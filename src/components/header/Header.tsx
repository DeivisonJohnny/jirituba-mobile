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

  const logout = () => {
    router.replace("../../login");
  };

  return (
    <HeaderContainer
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
    >
      <ButtonLogout onPress={() => router.back()}>
        <Icon
          name="arrow-back-outline"
          type="ionicon"
          size={23}
          color={"white"}
        ></Icon>
      </ButtonLogout>
      <ProfileCard></ProfileCard>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px 15px 25px;
  background-color: #0e0e12;
  width: 100%;
`;

const TextLogo = styled.Text`
  color: white;
  font-size: 18px;
  font-family: "montserratMedium";
  letter-spacing: 0.5px;
`;

const ButtonLogout = styled.TouchableOpacity`
  color: white;
  font-size: 20px;
  letter-spacing: 1.2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
`;

const TextLogout = styled.Text`
  color: white;
  font-size: 9px;
  margin-right: 4px;
`;

export default Header;
