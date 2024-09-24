import { Stack } from "expo-router";
import Header from "@/components/Header/header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
