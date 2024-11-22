import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface StepData {
  id: number;
  steps: number[];
}

interface VideoData {
  id: number;
  url: string;
}

interface JsonData {
  data: StepData[];
  videos: VideoData[];
}

const jsonData: JsonData = {
  data: [
    { id: 1, steps: [101, 102, 103] },
    { id: 2, steps: [201, 202] },
  ],
  videos: [
    { id: 101, url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" },
    {
      id: 102,
      url: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    },
    {
      id: 103,
      url: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_2mb.mp4",
    },
    { id: 201, url: "video201.mp4" },
    { id: 202, url: "video202.mp4" },
  ],
};

interface VideoPlayerProps {
  id: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ id }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    const stepData = jsonData.data.find((item) => item.id === id);
    if (!stepData) {
      console.error("ID no encontrado");
      return;
    }

    const steps = stepData.steps;
    const urls = steps
      .map((stepId) => {
        const video = jsonData.videos.find((video) => video.id === stepId);
        if (!video) {
          console.error(`Video no encontrado para stepId: ${stepId}`);
        }
        return video?.url;
      })
      .filter((url): url is string => !!url);

    console.log("URLs generadas:", urls);
    setVideoUrls(urls);
  }, [id]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoUrls.length === 0) return;

    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      if (currentStepIndex < videoUrls.length - 1) {
        console.log("Siguiente video");
        setCurrentStepIndex((prevIndex) => prevIndex + 1);
      } else {
        navigate("/home");
      }
    };

    videoElement?.addEventListener("ended", handleVideoEnd);
    return () => {
      videoElement?.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentStepIndex, videoUrls]);

  useEffect(() => {
    if (currentStepIndex < videoUrls.length) {
      const videoElement = videoRef.current;
      videoElement?.load();
      videoElement?.play();
    }
  }, [currentStepIndex, videoUrls]);

  return (
    <video
      ref={videoRef}
      src={videoUrls[currentStepIndex]}
      controls
      autoPlay
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default VideoPlayer;
