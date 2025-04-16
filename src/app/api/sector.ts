import api from "../config/api/client";

export default class SectorApi {
  static async getAll() {
    const { data } = await api.get("/sector");
    return data;
  }
}
