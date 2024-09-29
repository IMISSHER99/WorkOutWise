import { Modal, View, Text } from "react-native";
import React from "react";
import AddGoalForm from "@/components/Forms/AddGoalForm";
import ToggleModalButton from "@/components/Buttons/ToggleModalButton";

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
        className={"flex-1 flex-col mx-5 my-20 rounded-xl bg-[#1C1E1F] p-5"}
      >
        <View className={"flex flex-row items-center justify-end w-full"}>
          <ToggleModalButton
            toggleOpenModal={toggleModal}
            iconName={"close"}
            color={"#FCF485"}
            size={20}
          />
        </View>
        <AddGoalForm />
      </View>
    </Modal>
  );
};

export default AddGoal;
