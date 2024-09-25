import { Pressable, Text } from "react-native";
import { Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins";
interface SubmitButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  const [loaded, error] = useFonts({
    Poppins_600SemiBold,
  });
  return (
    <Pressable
      onPress={() => {}}
      className={
        "bg-[#B4FFDF] p-4 w-full flex items-center justify-center rounded-md"
      }
    >
      <Text
        style={{ fontFamily: "Poppins_600SemiBold" }}
        className={"text-base"}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default SubmitButton;
