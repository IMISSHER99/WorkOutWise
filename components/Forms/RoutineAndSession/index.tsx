import { Text, View } from "react-native";
import React from "react";
import CustomDropdown from "@/components/Inputs/Dropdown";
import { WorkoutFrequency } from "@/components/Forms/RoutineAndSession/data";
import { GoalFormData } from "@/components/Forms/AddGoalForm/model";
import NumericInput from "@/components/Inputs/NumericInput";

interface RoutineAndSessionProps {
  formData: GoalFormData;
  updateFormData: (key: keyof GoalFormData, value: string) => void; // Assuming date values will be strings
  prevStep: () => void;
}

const RoutineAndSession: React.FC<RoutineAndSessionProps> = ({
  updateFormData,
  formData,
}) => {
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
          Shape Your Sessions: {"\n"}
          Plan the <Text className={"text-[#9767F8]"}>Routine</Text> and{" "}
          <Text className={"text-[#9767F8]"}>Targets</Text>
        </Text>
      </View>
      <View className={"flex flex-row items-center justify-between z-20"}>
        <CustomDropdown
          name={"Workout Frequency"}
          data={WorkoutFrequency}
          setGoalType={(value) => updateFormData("workoutFrequency", value)}
        />
      </View>
      <View className={"flex flex-row items-center justify-between z-10"}>
        <NumericInput
          name={"Duration per Session"}
          placeholder={"Duration (In Minutes)"}
          value={formData.duration}
          onChange={(value) => updateFormData("duration", value)}
        />
      </View>
    </View>
  );
};

export default RoutineAndSession;
