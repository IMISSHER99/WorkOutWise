import { Text, TextInput, View } from "react-native";
import { Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins";

interface TextInputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomTextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  const [loaded, error] = useFonts({
    Poppins_600SemiBold,
  });
  return (
    <View className={"flex w-full mb-6 items-start justify-center"}>
      <Text className={"text-white mb-2 text-base"}>{name}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#646567"}
        className={"bg-[#282A2C] w-full p-3 rounded-md"}
        style={{ fontFamily: "Poppins_600SemiBold" }}
        value={value}
        onChangeText={onChange}
      ></TextInput>
    </View>
  );
};

export default CustomTextInput;
