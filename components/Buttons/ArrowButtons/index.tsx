import { Pressable, Text, View } from "react-native";
import { Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins";
import { FontAwesome6 } from "@expo/vector-icons";
interface ArrowButtonProps {
  onPress: () => void;
  icon: string;
  name: string;
}
const ArrowButton: React.FC<ArrowButtonProps> = ({ onPress, name, icon }) => {
  const [loaded, error] = useFonts({
    Poppins_600SemiBold,
  });
  return (
    <Pressable
      onPress={onPress}
      className={
        " p-2.5 w-max flex flex-row items-center justify-between rounded-2xl bg-[#282A2C] space-x-3"
      }
    >
      <View className={"flex px-4 py-2 rounded-xl bg-[#B4FFDF] mr-2"}>
        <FontAwesome6 name={icon} size={24} />
      </View>
      <View className={"flex items-center justify-between"}>
        <Text
          className={"text-white"}
          style={{ fontFamily: "Poppins_600SemiBold" }}
        >
          {name}
        </Text>
      </View>
      <View
        className={"flex flex-row items-center justify-between gap-1.5 pr-3"}
      >
        <FontAwesome6 name={"chevron-right"} size={16} color="white" />
        <FontAwesome6 name={"chevron-right"} size={16} color="#5E5F61" />
        <FontAwesome6 name={"chevron-right"} size={16} color="#343739" />
      </View>
    </Pressable>
  );
};

export default ArrowButton;
