import styled from "styled-components/native";
import AppThemeContext from "./context/theme-context";
import Login from "./login";
import SplashScreen from "../components/splash-screen";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <AppThemeContext>
      <SplashScreen>
        <Login></Login>
      </SplashScreen>
    </AppThemeContext>
  );
};

export default App;
