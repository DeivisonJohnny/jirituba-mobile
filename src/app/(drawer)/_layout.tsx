import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./dashboard";
import { TouchableOpacity, View, StyleSheet, BackHandler } from "react-native";
import { Icon } from "react-native-elements";
import styled, { ThemeProvider } from "styled-components/native";
import CustomHeader from "../components/header/CustomHeader";
import themes from "../theme/index";
import { useColorScheme } from "react-native";

export default function HeaderMenu() {
  const Drawer = createDrawerNavigator();

  const themeDevice = useColorScheme();
  const theme = themes[themeDevice] || 'dark'


  return (
  <ThemeProvider theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          header: () => <CustomHeader></CustomHeader>,
          drawerPosition: "right",
        }}
      >
        <Drawer.Screen name="Home" component={Dashboard} />
      </Drawer.Navigator>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    position: "absolute",
    backgroundColor: "green",
    height: 200,
    padding: 0,
  },

  contentMenu: {
    backgroundColor: "red",
    width: "100%",
    padding: 0,
    marginEnd: 0,
    margin: 0,
  },
});

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
