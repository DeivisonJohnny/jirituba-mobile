import { createContext, useEffect, useState } from "react";
import { PermissionsAndroid } from "react-native";

// Criação do contexto
const PermissionsContext = createContext(null);

export const PermissionsProvider = ({ children }: any) => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const requestPermissions = async () => {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.NEARBY_WIFI_DEVICES,
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
        ]);

        for (const [permission, result] of Object.entries(granted)) {
          if (result === PermissionsAndroid.RESULTS.GRANTED) {
            console.log(`Permissão concedida - ${permission}`);
            setPermissions((prev) => [...prev, permission] as any);
          } else {
            console.log(`Permissão negada - ${permission}`);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    };

    requestPermissions();
  }, []);

  return (
    <PermissionsContext.Provider value={permissions as any}>
      {children}
    </PermissionsContext.Provider>
  );
};

export default PermissionsContext;
