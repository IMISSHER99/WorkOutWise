import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const App = () => {
  return (
    <SafeAreaView edges={[]} className={"flex-1 p-6 bg-[#151718]"}>
      <Text className={"text-white font-bold text-5xl"}>You can do</Text>
      <View className={"flex items-end justify-flex-start flex-row"}>
        <Text className={"text-white font-bold text-5xl"}>better today </Text>
        <Image
          source={require("../assets/images/peace.png")}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </View>
      <Text className={"text-white font-bold text-5xl"}>with your goals</Text>
    </SafeAreaView>
  );
};

export default App;
