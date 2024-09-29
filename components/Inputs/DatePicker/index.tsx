import React, { useState } from "react";
import { Text, View } from "react-native";
import DateTimePicker from "react-native-ui-datepicker/src/DateTimePicker";
import { DateType } from "react-native-ui-datepicker";

interface DatePickerProps {
  name: string;
  startDate: DateType;
  endDate: DateType;
  onChange: (startDate: DateType, endDate: DateType) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  name,
  startDate,
  endDate,
  onChange,
}) => {
  return (
    <View className={"flex w-full mb-6 items-start justify-center"}>
      <Text className={"text-white mb-4 text-base"}>{name}</Text>
      <DateTimePicker
        mode={"range"}
        onChange={({ startDate, endDate }) => {
          onChange(startDate, endDate);
        }}
        startDate={startDate}
        endDate={endDate}
        headerContainerStyle={{ backgroundColor: "#282A2C", borderRadius: 50 }}
        headerTextStyle={{ color: "white" }}
        todayTextStyle={{ color: "white" }}
        weekDaysTextStyle={{ color: "white" }}
        headerButtonColor={"white"}
        monthContainerStyle={{ backgroundColor: "#282A2C" }}
        yearContainerStyle={{ backgroundColor: "#282A2C" }}
        calendarTextStyle={{ color: "white" }}
        selectedItemColor={"#B4FFDF"}
        selectedTextStyle={{ color: "black" }}
        dayContainerStyle={{ backgroundColor: "#282A2C" }}
      />
    </View>
  );
};

export default DatePicker;
