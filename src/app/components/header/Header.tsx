import React from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import ProfileCard from "../profile";
import { Icon } from "react-native-elements";
import { router } from "expo-router";

const Header = () => {
  useFonts({
    montserrat: require("../../assets/fonts/Montserrat.ttf"),
    montserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
  });

  const logout = () => {
    router.replace("../../login");
  };

  return (
    <HeaderContainer>
      <ProfileCard></ProfileCard>
      <BoxLogout>
        <Icon
          name="log-out-outline"
          type="ionicon"
          size={23}
          color={"white"}
        ></Icon>
        <TextLogout onPress={logout}>Sair</TextLogout>
      </BoxLogout>
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

const BoxLogout = styled.TouchableOpacity`
  color: white;
  font-family: "montserratMedium";
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
