import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import useFont from "./constants/useFont";

//Screens
import { Home } from "./screens/";
import { icons, COLORS, FONTS, SIZES } from "./constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFont();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "SHOE SELECTOR",
            headerTitleAlign: "center",
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle,
            },
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={onPress}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log("Header right on pressed")}
              >
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
