import { View, Text, TextInput } from "react-native";
import CustomTextInput from "@/components/Inputs/TextInput";
import SubmitButton from "@/components/Buttons/SubmitButton";
import DatePicker from "@/components/Inputs/DatePicker";

const AddGoalForm: React.FC = () => {
  return (
    <View className={"flex-1 items-center w-full pt-10"}>
      <CustomTextInput name={"Goal Title"} placeholder={"Enter Goal Title"} />
      <CustomTextInput name={"Goal Type"} placeholder={"Enter Goal Type"} />
      <View className={"flex flex-row items-center justify-between  p-2"}>
        <DatePicker name={"Start Date"} margin={10} />
        <DatePicker name={"End Date"} margin={0} />
      </View>
      <CustomTextInput name={"Frequency"} placeholder={"Select an Option"} />
      <SubmitButton onPress={() => {}}>Add Goal</SubmitButton>
    </View>
  );
};

export default AddGoalForm;
