import { Text, View } from "react-native";
import React from "react";
import DatePicker from "@/components/Inputs/DatePicker";
import ArrowButton from "@/components/Buttons/ArrowButtons";
import { GoalFormData } from "@/components/Forms/AddGoalForm/model";
import { DateType } from "react-native-ui-datepicker";
interface TimeframeProps {
  formData: GoalFormData;
  updateFormData: (key: keyof GoalFormData, value: DateType) => void; // Assuming date values will be strings
  nextStep: () => void;
  prevStep: () => void;
}
const Timeframe: React.FC<TimeframeProps> = ({
  formData,
  nextStep,
  prevStep,
  updateFormData,
}) => {
  const handleDateChange = (startDate: DateType, endDate: DateType) => {
    updateFormData("startDate", startDate);
    updateFormData("endDate", endDate);
  };
  return (
    <View className={"flex-1 items-center w-full pt-10"}>
      <View
        className={
          "flex flex-row items-center justify-between w-full pt-5 mb-10"
        }
      >
        <Text
          className={"text-white text-xl"}
          style={{ fontFamily: "Poppins_600SemiBold" }}
        >
          Stay on Track: {"\n"}
          Schedule Your <Text className={"text-[#9767F8]"}>Workloads</Text>
        </Text>
      </View>
      <DatePicker
        name={"Date Range"}
        startDate={formData.startDate}
        endDate={formData.endDate}
        onChange={handleDateChange}
      />
      <ArrowButton icon={"caret-right"} name={"Continue"} onPress={nextStep} />
    </View>
  );
};
export default Timeframe;
