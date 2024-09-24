import { Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

interface OpenModalButtonProps {
  toggleOpenModal: () => void;
}
const OpenModalButton: React.FC<OpenModalButtonProps> = ({
  toggleOpenModal,
}) => {
  return (
    <Pressable onPress={toggleOpenModal}>
      <View>
        <AntDesign name={"plus"} color={"white"} size={20} />
      </View>
    </Pressable>
  );
};

export default OpenModalButton;
