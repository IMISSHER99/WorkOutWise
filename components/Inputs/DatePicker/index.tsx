import React, { useState } from "react";
import CustomTextInput from "@/components/Inputs/TextInput";
import { View } from "react-native";

interface DatePickerProps {
  name: string;
  margin: number;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, margin }) => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <View className={`flex w-1/2`} style={{ marginRight: margin }}>
      <CustomTextInput name={name} placeholder={date.toDateString()} />
    </View>
  );
};

export default DatePicker;
