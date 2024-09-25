import { Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

interface OpenModalButtonProps {
  toggleOpenModal: () => void;
  iconName: any;
  color?: string;
  size?: number;
}
const ToggleModalButton: React.FC<OpenModalButtonProps> = ({
  toggleOpenModal,
  iconName,
  color,
  size,
}) => {
  return (
    <Pressable onPress={toggleOpenModal}>
      <View>
        <AntDesign name={iconName} color={color} size={size} />
      </View>
    </Pressable>
  );
};

export default ToggleModalButton;
