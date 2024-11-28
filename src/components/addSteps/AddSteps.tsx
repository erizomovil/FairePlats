import { useEffect, useState } from "react";
import "./AddSteps.css"; // Asegúrate de que el CSS esté actualizado
import { StepData } from "../../../public/models/recipe.model";

const AddSteps = () => {
  const [selectedSteps, setSelectedSteps] = useState<StepData[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [steps, setSteps] = useState<StepData[]>([]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    fetch("/data/steps.json")
      .then((response) => response.json())
      .then((data) => setSteps(data))
      .catch((error) => console.error("Error al cargar steps:", error));
  }, []);

  const addStep = (step: StepData) => {
    setSelectedSteps((prevSteps) => [...prevSteps, step]);
    toggleModal();
  };

  return (
    <>
      <div className="addSteps">
        <div>
          <ul>
            {selectedSteps.map((step) => (
              <li key={step.id} className="addStep-list-name">
                {step.name}
              </li>
            ))}
          </ul>
          <button className="add-step-icon" onClick={toggleModal}>
            +
          </button>
        </div>
      </div>
      {isModalVisible && (
        <div className="popupStyle">
          <div className="popupContentStyle">
            <h3>Select a Step</h3>
            <ul>
              {steps.map((step) => (
                <li
                  key={step.id}
                  className="listItemStyle"
                  onClick={() => addStep(step)}
                >
                  {step.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AddSteps;
