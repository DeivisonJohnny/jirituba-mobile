import LottieView from "lottie-react-native";
import * as React from "react";
import { View } from "react-native";

interface LoadingPageProps {}

const LoadingPage = (props: LoadingPageProps) => {
  const animation = React.useRef<LottieView>(null);

  return (
    <View
      style={{
        width: "100%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 30,
          height: 30,
        }}
        source={require("../../app/assets/animations/loading/loading.json")}
      />
    </View>
  );
};

export default LoadingPage;
