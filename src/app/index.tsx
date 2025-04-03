import ConfigApp from "./context/config";
import Login from "./login";
import { PermissionsProvider } from "./context/permissions";

const App = () => {
  return (
    <PermissionsProvider>
      <ConfigApp>
        <Login></Login>
      </ConfigApp>
    </PermissionsProvider>
  );
};

export default App;
