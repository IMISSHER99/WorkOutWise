import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

interface CustomDropdownProps {
  name: string;
  data: { key: string; value: string }[];
  setGoalType: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  name,
  data,
  setGoalType,
}) => {
  return (
    <View className={"flex w-full mb-6 items-start justify-center relative"}>
      <Text className={"text-white mb-2 text-base"}>{name}</Text>
      <SelectList
        setSelected={(value: string) => setGoalType(value)}
        data={data}
        save={"value"}
        boxStyles={{
          position: "relative",
          borderWidth: 0,
          backgroundColor: "#282A2C",
          width: "100%",
          borderColor: "white",
          borderBottomWidth: 1,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        searchPlaceholder={"Search..."}
        searchicon={
          <FontAwesome6
            name="magnifying-glass"
            size={14}
            color="#646567"
            marginRight={10}
          />
        }
        arrowicon={<FontAwesome6 name="caret-down" size={14} color="#646567" />}
        closeicon={<FontAwesome6 name="xmark" size={14} color="#646567" />}
        dropdownStyles={{
          position: "absolute",
          top: 35,
          borderWidth: 0,
          backgroundColor: "#282A2C",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          width: "100%",
        }}
        dropdownTextStyles={{
          color: "#646567",
          position: "relative",
        }}
        inputStyles={{
          color: "#646567",
          fontSize: 14,
          fontFamily: "Poppins_600SemiBold",
        }}
      />
    </View>
  );
};
export default CustomDropdown;
