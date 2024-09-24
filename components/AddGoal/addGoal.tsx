import { Modal, View, Text } from "react-native";
import React from "react";

interface AddGoalProps {
  modalVisible: boolean;
  toggleModal: () => void;
}
const AddGoal: React.FC<AddGoalProps> = ({ modalVisible, toggleModal }) => {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      animationType={"slide"}
      onRequestClose={toggleModal}
    >
      <View
        className={"flex-1 justify-center items-center bg-black bg-opacity-50"}
      >
        <Text className="text-white font-bold text-lg">Add Goal</Text>
      </View>
    </Modal>
  );
};

export default AddGoal;
