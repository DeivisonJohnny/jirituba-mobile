import React, { useState, useEffect } from "react";
import { Switch, TouchableOpacity, useColorScheme } from "react-native";
import { Icon } from "react-native-elements";
import styled, { ThemeProvider } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import themes from "../../theme";
import { useFonts } from "expo-font";

const CustomHeader = () => {
  const navigation = useNavigation();
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme];

  const [fontsLoaded] = useFonts({
    montserrat: require("../../assets/fonts/Montserrat.ttf"),
    montserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    montserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <ProfileImage source={require("../../assets/img/foto-perfil.jpg")} />

        <TituloHead>Jirituba</TituloHead>
        <ContainerButtons>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Icon
              name="menu-outline"
              color={theme.color}
              size={28}
              type="ionicon"
            />
          </TouchableOpacity>
        </ContainerButtons>
      </HeaderContainer>
    </ThemeProvider>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: ${(props) => props.theme.background};
  width: 100%;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const ButtonTheme = styled(Switch)`
  transform: scale(0.7);
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
  font-family: "montserrat";
  font-size: 20px;
  letter-spacing: 1.2px;
`;

export default CustomHeader;
