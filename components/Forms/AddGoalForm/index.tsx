import { useState } from "react";
import GoalDetail from "@/components/Forms/GoalDetail";
import GoalOverview from "../GoalOverviews";

const AddGoalForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    goalTitle: "",
    goalType: "",
    exerciseType: "",
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  return (
    <>
      {currentStep === 1 && (
        <GoalOverview
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {/*{currentStep === 2 && (*/}
      {/*  <GoalDetail*/}
      {/*    formData={formData}*/}
      {/*    nextStep={nextStep}*/}
      {/*    prevStep={prevStep}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  );
};

export default AddGoalForm;
