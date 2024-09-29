import { useEffect, useState } from "react";
import GoalOverview from "../GoalDetail";
import Timeframe from "../Timeframe";
import RoutineAndSession from "@/components/Forms/RoutineAndSession";
import {
  GoalFormData,
  initialGoalFormData,
} from "@/components/Forms/AddGoalForm/model";
import { DateType } from "react-native-ui-datepicker";

const AddGoalForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<GoalFormData>(initialGoalFormData);

  const updateFormData = (
    key: keyof GoalFormData,
    value: string | number | DateType,
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  return (
    <>
      {currentStep === 1 && (
        <GoalOverview
          formData={formData}
          nextStep={nextStep}
          updateFormData={updateFormData}
        />
      )}
      {currentStep === 2 && (
        <Timeframe
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          updateFormData={updateFormData}
        />
      )}
      {currentStep === 3 && (
        <RoutineAndSession
          updateFormData={updateFormData}
          formData={formData}
          prevStep={prevStep}
        />
      )}
    </>
  );
};

export default AddGoalForm;
