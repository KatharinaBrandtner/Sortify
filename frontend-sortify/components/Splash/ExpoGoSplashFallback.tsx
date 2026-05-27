import { Image, View } from "react-native";

import { splashStyles } from "../../styles/splashStyles";

export default function ExpoGoSplashFallback() {
  return (
    <View style={splashStyles.container}>
      <View style={splashStyles.accentTopLeft} />
      <View style={splashStyles.accentBottomRight} />

      <Image
        source={require("../../assets/splash.png")}
        style={splashStyles.image}
        resizeMode="contain"
      />
    </View>
  );
}