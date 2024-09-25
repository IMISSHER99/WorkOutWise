import { Modal, View, Text } from "react-native";
import React from "react";
import AddGoalForm from "@/components/Forms/AddGoalForm";
import { Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins";
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
        <View
          className={"flex flex-row items-center justify-between w-full pt-5"}
        >
          <Text
            className={"text-white text-xl"}
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            Set your next milestone {"\n"}and{" "}
            <Text className={"text-[#9767F8]"}>Achieve More!</Text>
          </Text>
        </View>
        <AddGoalForm />
      </View>
    </Modal>
  );
};

export default AddGoal;
