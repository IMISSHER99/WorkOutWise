import { Button, ScrollView, Text, View } from "react-native";
import CustomTextInput from "@/components/Inputs/TextInput";
import CustomDropdown from "@/components/Inputs/Dropdown";
import ArrowButton from "@/components/Buttons/ArrowButtons";
import React from "react";
import { goalTypeDropdownData } from "@/components/Forms/GoalOverviews/data";

interface GoalOverviewProps {
  formData: {
    goalTitle: string;
    goalType: string;
    exerciseType: string;
  };
  nextStep: () => void;
  prevStep: () => void;
}

const GoalOverview: React.FC<GoalOverviewProps> = ({
  formData,
  nextStep,
  prevStep,
}) => {
  const [goalTitle, setGoalTitle] = React.useState<string>("");
  const [goalType, setGoalType] = React.useState<string | null>(null);
  const [exercises, setExercises] = React.useState<string | null>(null);
  const handleSubmit = () => {
    const formData = {
      goalTitle,
      goalType,
      exercises,
    };

    console.log("Form Data: ", formData);
  };
  const filteredExerciseTypes = goalType
    ? goalTypeDropdownData.find((goal) => goal.value === goalType)
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
        value={goalTitle}
        onChange={setGoalTitle}
      />
      <View className={"flex flex-row items-center justify-between z-20"}>
        <CustomDropdown
          name={"Goal type"}
          data={goalTypeDropdownData}
          setGoalType={setGoalType}
        />
      </View>
      <View className={"flex flex-row items-center justify-between z-10"}>
        <CustomDropdown
          name={"Exercise type"}
          data={filteredExerciseTypes}
          setGoalType={setExercises}
        />
      </View>
      <Button title={"Next"} onPress={handleSubmit} />
    </View>
  );
};

export default GoalOverview;
