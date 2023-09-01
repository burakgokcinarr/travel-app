import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import RouteNavigation from "./src/navigation/RouteNavigation";
import { useFonts } from 'expo-font';
import { Font } from "./src/config/Font";
import Color from "./src/constants/Color";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Color.white,
  },
};

export default function App() {

  const [isLoaded] = useFonts(Font);
  
  if (!isLoaded) {
    return null
  }

  return (
    <NavigationContainer theme={theme}>
      <RouteNavigation />
    </NavigationContainer>
  );
}
