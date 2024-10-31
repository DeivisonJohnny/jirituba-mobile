import styled from "styled-components/native";
import Header from "../components/header/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./dashboard";
import { Icon } from "react-native-elements";
import RegisterEmployees from "./pages/register-employees";
import ListEmployees from "./pages/list-employees";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme-context";
import Settings from "./pages/settings";

const Layout = () => {
  const Tabs = createBottomTabNavigator();
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("🚀 ~ Layout ~ theme:", theme);
  const [iconSize, setIconSize] = useState(17);

  return (
    <ContainerMain>
      <Header></Header>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            left: "auto",
            right: 'auto',
            bottom: 10,
            width: "87%",
            marginHorizontal: "auto",
            borderRadius: 10,
            alignSelf: "center",
          },
          tabBarIconStyle: {
            fontSize: 10,
            height: 10,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Dashboard}
          options={{
            tabBarIcon: () => (
              <Icon name="home" size={iconSize} type="ionicon" />
            ),
          }}
        />
        <Tabs.Screen
          name="Registrar"
          component={RegisterEmployees}
          options={{
            tabBarIcon: () => (
              <Icon name="person-add" size={iconSize} type="ionicon" />
            ),
          }}
        />
        <Tabs.Screen
          name="Funcionarios"
          component={ListEmployees}
          options={{
            tabBarIcon: () => (
              <Icon name="person" size={iconSize} type="ionicon" />
            ),
          }}
        />
        <Tabs.Screen
          name="Config"
          component={Settings}
          options={{
            tabBarIcon: () => (
              <Icon name="settings" size={iconSize} type="ionicon" />
            ),
          }}
        />
      </Tabs.Navigator>
    </ContainerMain>
  );
};

export default Layout;

const ContainerMain = styled.View`
  flex: 1;
  height: "100%";
`;
