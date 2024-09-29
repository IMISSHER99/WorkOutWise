import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";

interface CustomSliderProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <View className={"flex w-full mb-6 items-start justify-center"}>
      <Text className={"text-white mb-2 text-base"}>
        {name} : {value}
      </Text>
      <View className={"flex w-full"}>
        <Slider
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#FCF485"
          maximumTrackTintColor="#282A2C"
          step={1}
          value={value}
          onValueChange={onChange}
        />
      </View>
    </View>
  );
};

export default CustomSlider;
