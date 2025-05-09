import React from "react";
import styled from "styled-components/native";
import Header from "../../components/header/Header";
import { Icon } from "react-native-elements";
import { useState } from "react";
import ConfigApp from "../context/config";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  const [iconSize] = useState(16);

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
    <ConfigApp>
      <StatusBar style="light" backgroundColor="#0e0e12" />
      <ContainerMain
        screenOptions={{
          header: () => <Header></Header>,

          headerShadowVisible: false,
          tabBarStyle: {
            position: "absolute",
            width: "100%",
            alignSelf: "center",
            borderWidth: 0,
            borderWidthTop: 1,
            borderColor: "#1c1c23",

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
          name="pages/list-employees/index"
          options={{
            href: null,
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
        <Tabs.Screen
          name="pages/register-employees/[id]"
          options={{ href: null }}
        />
        <Tabs.Screen name="pages/details-user/[id]" options={{ href: null }} />
        <Tabs.Screen
          name="pages/details-avaliation/[id]"
          options={{ href: null }}
        />
        <Tabs.Screen name="pages/users/index" options={{ href: null }} />
        <Tabs.Screen name="pages/analysis-day/index" options={{ href: null }} />
        <Tabs.Screen
          name="pages/roles-employees/index"
          options={{ href: null }}
        />
        <Tabs.Screen
          name="pages/sector-employees/index"
          options={{ href: null }}
        />
        <Tabs.Screen
          name="pages/emphasis-employee/[id]"
          options={{ href: null }}
        />
        <Tabs.Screen
          name="pages/avaliation-list/index"
          options={{ href: null }}
        />
      </ContainerMain>
    </ConfigApp>
  );
};

export default Layout;

const ContainerMain = styled(Tabs)``;
