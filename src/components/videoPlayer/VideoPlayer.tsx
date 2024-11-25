import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeData, StepData } from "../../../public/models/recipe.model";

const VideoPlayer: React.FC<{ id: number }> = ({ id }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const [recipesResponse, videosResponse] = await Promise.all([
          fetch("/data/recipes.json"),
          fetch("/data/steps.json"),
        ]);

        if (!recipesResponse.ok || !videosResponse.ok) {
          throw new Error("Error al cargar los archivos JSON");
        }

        const recipesData: RecipeData[] = await recipesResponse.json();
        const stepsData: StepData[] = await videosResponse.json();
        const recipe = recipesData.find((item) => item.id === id);
        if (!recipe) {
          console.error("ID no encontrado en recipes.json");
          return;
        }

        const urls = recipe.steps
          .map((stepId) => {
            const video = stepsData.find((video) => video.id === stepId);
            if (!video) {
              console.error(`Video no encontrado para stepId: ${stepId}`);
            }
            return video?.url;
          })
          .filter((url): url is string => !!url);

        console.log("URLs generadas:", urls);
        setVideoUrls(urls);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchJsonData();
  }, [id]);

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
