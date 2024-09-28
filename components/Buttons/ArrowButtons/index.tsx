import { Pressable, Text, View } from "react-native";
import { Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins";
import { FontAwesome6 } from "@expo/vector-icons";
interface ArrowButtonProps {
  onPress: () => void;
  name: string;
}
const ArrowButton: React.FC<ArrowButtonProps> = ({ onPress, name }) => {
  const [loaded, error] = useFonts({
    Poppins_600SemiBold,
  });
  return (
    <Pressable
      onPress={onPress}
      className={" p-3 w-max flex items-center justify-center rounded-xl"}
    >
      <View className={"flex px-4 py-2 rounded-xl bg-[#B4FFDF] mr-2"}>
        <FontAwesome6 name={name} size={24} />
      </View>
    </Pressable>
  );
};

export default ArrowButton;
