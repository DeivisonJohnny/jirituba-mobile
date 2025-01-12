import styled from "styled-components/native";
import AppThemeContext from "./context/theme-context";
import Login from "./login";
import SplashScreen from "../components/splash-screen";
import { StatusBar } from "expo-status-bar";
import PermissionsContext, { PermissionsProvider } from "./context/permissions";

const App = () => {
  return (
    <PermissionsProvider>
      <AppThemeContext>
        <SplashScreen>
          <Login></Login>
        </SplashScreen>
      </AppThemeContext>
    </PermissionsProvider>
  );
};

export default App;
