import { View, Text, Button } from "react-native";
import { useState } from "react";
import AddGoal from "@/components/AddGoal/addGoal";
import OpenModalButton from "@/components/OpenModalButton/OpenModalButton";

const GoalList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View className={"flex flex-row items-center justify-between p-8"}>
      <Text className={"text-white"}>My Goals: 4</Text>
      <OpenModalButton toggleOpenModal={toggleModal} />
      <AddGoal modalVisible={modalVisible} toggleModal={toggleModal} />
    </View>
  );
};

export default GoalList;
