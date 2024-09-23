import { TouchableOpacity, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView
      edges={["top"]}
      className="flex-row justify-between items-center p-6 bg-[#151718]"
    >
      {/* Hamburger Icon */}
      <TouchableOpacity className="w-12">
        <View className="w-6 h-0.5 bg-white mb-1"></View>
        <View className="w-4 h-0.5 bg-white mb-1"></View>
      </TouchableOpacity>

      {/* Header Text */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-white font-bold text-lg">Goals</Text>
      </View>

      {/* User Icon */}
      <TouchableOpacity className="relative w-12 h-12 rounded-xl flex flex-row items-center justify-center p-1.5 bg-[#282A2C]">
        <View className="w-0.5 h-4 bg-white mb-1 absolute left-0"></View>
        <View className="w-full h-full rounded-lg flex items-center justify-center bg-[#B4FFDF]">
          <Image
            source={require("../../assets/images/UserIcon.png")}
            className="w-8 h-8"
            resizeMode="contain"
          />
          {/*<FontAwesome5 name="user" size={20} color="black" />*/}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
