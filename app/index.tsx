import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import GoalList from "@/components/GoalList/goalList";
import { useState } from "react";

const App = () => {
  return (
    <SafeAreaView edges={[]} className={"flex-1 bg-[#151718]"}>
      <Image
        source={require("../assets/images/heading.png")}
        className="w-full h-1/4"
        resizeMode="contain"
      />
      <GoalList />
    </SafeAreaView>
  );
};

export default App;
