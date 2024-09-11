import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import Dashboard from "./dashboard";
import Header from "../components/header/Header";
import SettingsUser from "./pages/settings";
import Profile from "./pages/profile";
import ListEmployees from "./pages/list-employees";

export default function HeaderMenu() {
  const Drawer = createDrawerNavigator();


  return (
      <Drawer.Navigator
        screenOptions={{
          header: () => <Header></Header>,
          drawerPosition: "right",
          drawerStyle: styles.drawer,
          drawerItemStyle: styles.itemDrawer,
          drawerLabelStyle: { color: "white" },
        }}

      >
        <Drawer.Screen  name="Home" component={Dashboard} />
        <Drawer.Screen name="Settings" component={SettingsUser} />
        <Drawer.Screen name="Perfil" component={Profile} />
        <Drawer.Screen name="Lista de funcionarios" component={ListEmployees} />
      </Drawer.Navigator>
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
