import { Text, TextInput, View } from "react-native";
import { Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins";

interface TextInputProps {
  name: string;
  placeholder: string;
}

const CustomTextInput: React.FC<TextInputProps> = ({ name, placeholder }) => {
  const [loaded, error] = useFonts({
    Poppins_600SemiBold,
  });
  return (
    <View className={"flex w-full mb-6 items-start justify-center"}>
      <Text className={"text-white mb-1 text-base"}>{name}</Text>
      <TextInput
        placeholder={placeholder}
        className={"bg-[#282A2C] w-full p-3 rounded-md"}
        style={{ fontFamily: "Poppins_600SemiBold" }}
      ></TextInput>
    </View>
  );
};

export default CustomTextInput;
