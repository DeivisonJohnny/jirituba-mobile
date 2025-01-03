import styled from "styled-components/native";
import Header from "../../components/header/Header";
import { Icon } from "react-native-elements";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme-context";
import { BlurView } from "expo-blur";
import { router, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

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
    <>
      <StatusBar style="light" backgroundColor="#1c1c23"/>
      <ContainerMain
        screenOptions={{
          header: () => <Header></Header>,
          headerShadowVisible: false,
          tabBarStyle: {
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            position: "absolute",
            left: "auto",
            right: "auto",
            bottom: "2%",
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
          name="dashboard"
          options={{
            title: "Inicio",
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
          name="pages/register-employees/index"
          options={{
            title: "Registrar",

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
          name="pages/list-employees/index"
          options={{
            title: "Funcionarios",
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
          name="pages/menu/index"
          options={{
            title: "More",

            tabBarIcon: (props) => (
              <Icon
                name="menu"
                size={iconSize}
                type="ionicon"
                color={props.color}
              />
            ),
          }}
        />

        <Tabs.Screen name="pages/details-user/[id]" options={{ href: null }} />
        <Tabs.Screen name="pages/details-avaliation/[id]" options={{ href: null }} />
        <Tabs.Screen name="pages/users/index" options={{ href: null }} />
      </ContainerMain>
    </>
  );
};

export default Layout;

const ContainerMain = styled(Tabs)`
  flex: 1;
`;
