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
    { id: 101, url: "https://www.youtube.com/embed/EVD05w66xbo" },
    { id: 102, url: "https://www.youtube.com/embed/cwyTleTL06Y" },
    { id: 103, url: "https://www.youtube.com/embed/GF2m1MXdtb0" },
    { id: 201, url: "https://www.youtube.com/embed/hvL1339luv0" },
    { id: 202, url: "https://www.youtube.com/embed/VKgjhKkxpCQ" },
  ],
};

interface VideoPlayerProps {
  id: number;
}

const YoutubePlayer: React.FC<VideoPlayerProps> = ({ id }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
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

    setVideoUrls(urls);
  }, [id]);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (videoUrls.length === 0) return;

    const handleVideoEnd = () => {
      if (currentStepIndex < videoUrls.length - 1) {
        setCurrentStepIndex((prevIndex) => prevIndex + 1);
      } else {
        navigate("/nueva-pagina");
      }
    };

    iframeRef.current?.addEventListener("load", handleVideoEnd);

    return () => {
      iframeRef.current?.removeEventListener("load", handleVideoEnd);
    };
  }, [currentStepIndex, videoUrls, navigate]);

  useEffect(() => {}, [currentStepIndex, videoUrls]);

  return (
    <iframe
      ref={iframeRef}
      width="100%"
      height="315"
      src={`${videoUrls[currentStepIndex]}?autoplay=1`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
};

export default YoutubePlayer;
