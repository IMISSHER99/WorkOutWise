import { Button, ScrollView, Text, View } from "react-native";
import CustomTextInput from "@/components/Inputs/TextInput";
import CustomDropdown from "@/components/Inputs/Dropdown";
import ArrowButton from "@/components/Buttons/ArrowButtons";
import React from "react";
import { goalTypeDropdownData } from "@/components/Forms/GoalDetail/data";
import CustomSlider from "@/components/Inputs/Slider";
import { GoalFormData } from "@/components/Forms/AddGoalForm/model";

interface GoalOverviewProps {
  formData: GoalFormData;
  updateFormData: (key: keyof GoalFormData, value: string | number) => void;
  nextStep: () => void;
}

const GoalOverview: React.FC<GoalOverviewProps> = ({
  formData,
  nextStep,
  updateFormData,
}) => {
  const filteredExerciseTypes = formData.goalType
    ? goalTypeDropdownData.find((goal) => goal.value === formData.goalType)
        ?.exerciseType || []
    : [];

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
          Set Your Sights: {"\n"}
          Define Your <Text className={"text-[#9767F8]"}>Goal</Text> and{" "}
          <Text className={"text-[#9767F8]"}>Focus</Text>
        </Text>
      </View>
      <CustomTextInput
        name={"Goal title"}
        placeholder={"Enter your goal title"}
        value={formData.goalTitle}
        onChange={(value) => updateFormData("goalTitle", value)}
      />
      <View className={"flex flex-row items-center justify-between z-20"}>
        <CustomDropdown
          name={"Goal type"}
          data={goalTypeDropdownData}
          setGoalType={(value) => updateFormData("goalType", value)}
        />
      </View>
      <View className={"flex flex-row items-center justify-between z-10"}>
        <CustomDropdown
          name={"Exercise type"}
          data={filteredExerciseTypes}
          setGoalType={(value) => updateFormData("exerciseType", value)}
        />
      </View>
      <CustomSlider
        name={"Intensity level"}
        value={formData.intensity}
        onChange={(value) => updateFormData("intensity", value)}
      />
      <ArrowButton icon={"caret-right"} name={"Continue"} onPress={nextStep} />
    </View>
  );
};

export default GoalOverview;
