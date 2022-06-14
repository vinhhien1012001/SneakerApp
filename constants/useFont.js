import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    "CarmenSans-Thin": require("../assets/fonts/CarmenSans-Thin.otf"),
    "CarmenSans-SemiBold": require("../assets/fonts/CarmenSans-SemiBold.otf"),
    "CarmenSans-Regular": require("../assets/fonts/CarmenSans-Regular.otf"),
  });
