import { Text, TextInput, View } from "react-native";

interface NumericInputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const NumericInput: React.FC<NumericInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <View className={"flex w-full mb-6 items-start justify-center"}>
      <Text className={"text-white mb-2 text-base"}>{name}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#646567"}
        className={"bg-[#282A2C] w-full p-3 rounded-md text-[#646567]"}
        style={{ fontFamily: "Poppins_600SemiBold" }}
        value={value}
        onChangeText={onChange}
        keyboardType="numeric"
      ></TextInput>
    </View>
  );
};

export default NumericInput;
