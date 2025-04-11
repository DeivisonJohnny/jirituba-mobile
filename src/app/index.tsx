import ConfigApp from "./context/config";
import Login from "./login";
import { PermissionsProvider } from "./context/permissions";
import { AuthProvider } from "./context/auth/AuthContext";

const App = () => {
  return (
    <PermissionsProvider>
      <ConfigApp>
        <AuthProvider>
          <Login></Login>
        </AuthProvider>
      </ConfigApp>
    </PermissionsProvider>
  );
};

export default App;
