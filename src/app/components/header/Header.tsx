import React from "react";
import { TouchableOpacity, useColorScheme} from "react-native";
import { Icon } from "react-native-elements";
import styled, { ThemeProvider } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import themes from "../../theme";
import { useFonts } from "expo-font";
import ProfileCard from "../profile";

const Header = () => {
  const navigation = useNavigation();
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme];

  const [fontsLoaded] = useFonts({
    montserrat: require("../../assets/fonts/Montserrat.ttf"),
  });

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <ProfileCard></ProfileCard>
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

export default Header;
