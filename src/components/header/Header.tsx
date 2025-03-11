import React from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import ProfileCard from "../profile";
import { Icon } from "react-native-elements";
import { router } from "expo-router";

const Header = () => {
  useFonts({
    montserrat: require("../../app/assets/fonts/Montserrat.ttf"),
    montserratMedium: require("../../app/assets/fonts/Montserrat-Medium.ttf"),
  });

  const handleBack = () => {
    router.back();
  };

  return (
    <HeaderContainer>
      <BackButton onPress={handleBack}>
        <Icon
          name="arrow-back-outline"
          type="ionicon"
          size={23}
          color="white"
        />
      </BackButton>
      <ProfileCard />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #0e0e12;
  width: 100%;
`;

const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 30px;
`;

export default Header;
