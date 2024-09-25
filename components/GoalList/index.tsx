import { View, Text } from "react-native";
import { useState } from "react";
import AddGoal from "@/components/Modals/AddGoal";
import ToggleModalButton from "@/components/Buttons/ToggleModalButton/";

const GoalList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View className={"flex flex-col items-center justify-between p-8"}>
      <View className={"flex w-full flex-row items-center justify-between"}>
        <Text className={"text-[#7C7D7E] text-sm"}>
          My Goals: <Text className={"text-[#9767F8]"}>4</Text>
        </Text>
        <ToggleModalButton
          toggleOpenModal={toggleModal}
          iconName={"plus"}
          color={"#FCF485"}
          size={20}
        />
      </View>
      <AddGoal modalVisible={modalVisible} toggleModal={toggleModal} />
    </View>
  );
};

export default GoalList;
