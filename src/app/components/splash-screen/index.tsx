import { useState, useEffect } from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

const SplashScreen = ({ children }: any) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (animationFinished) {
      return;
    }
  }, [animationFinished]);

  return (
    <>
      {!animationFinished ? (
        <Splash
          source={require("../../assets/splashscreen.json")}
          autoPlay
          loop={false}
          resizeMode="cover"
          onAnimationFinish={() => setAnimationFinished(true)}
        />
      ) : (
        children
      )}
    </>
  );
};

export default SplashScreen;

const Splash = styled(LottieView)`
background-color: #0e0e12;
  position: absolute;
  left: 0;
  top: 0;
  flex: 1;
  width: 100%;
  height: 105%;
`;
