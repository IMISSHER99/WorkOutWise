import React, { useState } from "react";
import CustomTextInput from "@/components/Inputs/TextInput";
import { View } from "react-native";

interface DatePickerProps {
  name: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name }) => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <View className={`flex w-full`}>
      <CustomTextInput name={name} placeholder={date.toDateString()} />
    </View>
  );
};

export default DatePicker;
