import api from "../config/api/client";

export type EmployeeType = {
  id: string;
  name: string;
  surname: string;
  cpf: string;
  shift: "MANHÃ" | "TARDE" | "NOITE" | string; // ajuste se tiver valores fixos
  sector: string;
  assessable: boolean;
  imgProfile: string;
  roleEmployeesId: string;
  rolesEmployee: {
    id: string;
    roleId: string;
    roles: {
      id: string;
      name: string;
    };
  };
};

export default class EmployeeApi {
  static async getAll() {
    const { data } = await api.get("/employee");
    return data;
  }
}
