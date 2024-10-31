import styled from "styled-components/native";
import AppThemeContext from "./context/theme-context";
import Login from "./login";

const App = () => {
  return (
      <AppThemeContext>
        <Login></Login>
      </AppThemeContext>
  );
};

export default App;
