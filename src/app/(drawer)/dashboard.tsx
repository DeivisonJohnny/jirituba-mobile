import * as React from "react";
import { Text, View, StyleSheet, useColorScheme } from "react-native";
import { styled, ThemeProvider } from "styled-components/native";
import themes from "../theme/index";

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {

  const deviceTheme = useColorScheme()

  const theme = themes[deviceTheme] || 'dark'


  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Text>Dashboard</Text>
      </Body>
    </ThemeProvider>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {},
});

const Body = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
`;
