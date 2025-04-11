import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../config/api/client";

type Login = {
  username: string;
  password: string;
};

export default class Auth {
  static async login(dataLogin: Login) {
    try {
      const { data } = await api.post("/auth/login", dataLogin as Login);

      await AsyncStorage.setItem("token", data.token);

      api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      return data;
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  }
}
