// FormData.ts
import { DateType } from "react-native-ui-datepicker";

export interface GoalFormData {
  goalTitle: string;
  goalType: string;
  exerciseType: string;
  intensity: number;
  startDate: DateType;
  endDate: DateType;
  workoutFrequency: string;
  duration: string;
}

// Initial state of the form data
export const initialGoalFormData: GoalFormData = {
  goalTitle: "",
  goalType: "",
  exerciseType: "",
  intensity: 0,
  startDate: new Date(),
  endDate: new Date(),
  workoutFrequency: "",
  duration: "",
};
