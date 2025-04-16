import api from "../config/api/client";

export default class SectorApi {
  async getAll() {
    return await api.get("/sector");
  }
}
