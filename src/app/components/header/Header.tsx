import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ProfileCard from "../profile";

const Header = () => {
  useFonts({
    montserrat: require("../../assets/fonts/Montserrat.ttf"),
    montserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
  });

  return (
    <HeaderContainer>
      <ProfileCard></ProfileCard>
      <TituloHead>Jirituba</TituloHead>
      <ContainerButtons></ContainerButtons>
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

const ContainerButtons = styled.View`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const TituloHead = styled.Text`
  color: white;
  font-family: "montserratMedium";
  font-size: 20px;
  letter-spacing: 1.2px;
`;

export default Header;
