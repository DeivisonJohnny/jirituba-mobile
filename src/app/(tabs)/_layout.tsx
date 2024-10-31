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
import { BlurView } from "expo-blur";

const Tabs = createBottomTabNavigator();
const Layout = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [iconSize, setIconSize] = useState(16);
  const [colorIcon, setcolorIcon] = useState("white");

  const TabBargGradient = () => {
    return (
      <BlurView
        intensity={5}
        blurReductionFactor={100}
        experimentalBlurMethod="dimezisBlurView"
        tint="default"
      ></BlurView>
    );
  };

  return (
    <ContainerMain>
      <Header></Header>
      <Tabs.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            position: "absolute",
            left: "auto",
            right: "auto",
            bottom: "3%",
            width: "87%",
            marginHorizontal: "auto",
            borderRadius: 10,
            alignSelf: "center",
            borderWidth: 1,
            borderTopColor: "#ff9789",
            borderRightColor: "#ff9789",
            borderBottomColor: "#ff9789",
            borderLeftColor: "#ff9789",
            shadowColor: "#ff9789ca",
            shadowOpacity: 0.3,
            shadowOffset: { height: 4, width: 0 },
            backgroundColor: "#262630",
          },
          tabBarActiveTintColor: "#ffbdb5",

          tabBarIconStyle: {
            fontSize: 10,
            maxHeight: 25,
          },
          tabBarItemStyle: {
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          },
          tabBarBackground: TabBargGradient,
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Dashboard}
          options={{
            tabBarIcon: (props) => (
              <Icon
                name="home"
                size={iconSize}
                type="ionicon"
                color={props.color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Registrar"
          component={RegisterEmployees}
          options={{
            tabBarIcon: (props) => (
              <Icon
                name="person-add"
                size={iconSize}
                type="ionicon"
                color={props.color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Funcionarios"
          component={ListEmployees}
          options={{
            tabBarIcon: (props) => (
              <Icon
                name="person"
                size={iconSize}
                type="ionicon"
                color={props.color}
                aria-hidden={false}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Config"
          component={Settings}
          options={{
            tabBarIcon: (props) => (
              <Icon
                name="settings"
                size={iconSize}
                type="ionicon"
                color={props.color}
              />
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
