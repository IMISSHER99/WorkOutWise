import { View } from "react-native";
import CustomTextInput from "@/components/Inputs/TextInput";
import CustomDropdown from "@/components/Inputs/Dropdown";
import DatePicker from "@/components/Inputs/DatePicker";
import SubmitButton from "@/components/Buttons/SubmitButton";
import ArrowButton from "@/components/Buttons/ArrowButtons";

interface GoalDetailProps {
  formData: {
    goalTitle: string;
    goalDescription: string;
  };
  nextStep: () => void;
  prevStep: () => void;
}

const GoalDetail: React.FC<GoalDetailProps> = ({
  formData,
  nextStep,
  prevStep,
}) => {
  return (
    <View className={"flex-1 items-center w-full pt-10"}>
      <DatePicker name={"Start Date"} />
      <DatePicker name={"End Date"} />
      <CustomTextInput name={"Intensity"} placeholder={"Enter Goal Title"} />
      <View className={"flex flex-row items-center justify-between"}>
        <ArrowButton onPress={prevStep} name={"caret-left"}></ArrowButton>
        <ArrowButton onPress={nextStep} name={"caret-right"}></ArrowButton>
      </View>
    </View>
  );
};

export default GoalDetail;
