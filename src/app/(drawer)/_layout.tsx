import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import Dashboard from "./dashboard";
import styled, { ThemeProvider } from "styled-components/native";
import CustomHeader from "../components/header/CustomHeader";
import themes from "../theme/index";
import { useColorScheme } from "react-native";
import SettingsUser from "./pages/settings";
import Profile from "./pages/profile";

export default function HeaderMenu() {
  const Drawer = createDrawerNavigator();

  const themeDevice = useColorScheme();
  const theme = themes[themeDevice] || "dark";

  return (
    <ThemeProvider theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          header: () => <CustomHeader></CustomHeader>,
          drawerPosition: "right",
          drawerStyle: styles.drawer,
          drawerItemStyle: styles.itemDrawer,
          drawerLabelStyle: { color: "white" },
        }}
      >
        <Drawer.Screen name="Home" component={Dashboard} />
        <Drawer.Screen name="Settings" component={SettingsUser} />
        <Drawer.Screen name="Perfil" component={Profile} />
      </Drawer.Navigator>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#1C1C23",
  },

  itemDrawer: {
    backgroundColor: "#343442",
    color: "white",
  },
});

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
