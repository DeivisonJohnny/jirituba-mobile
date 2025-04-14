import api from "../config/api/client";

export type EmployeeType = {
  id: string;
  name: string;
  surname: string;
  cpf: string;
  shift: "MANHÃ" | "TARDE" | "NOITE" | string;
  assessable: boolean;
  imgProfile: string;
  roleEmployeesId: string;
  sectorId: string;
  sector: {
    name: string;
  };
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

  static async getByIdOrCPF(cpfOrId: string) {
    const { data } = await api.get(`/employee/${cpfOrId}`);
    return data;
  }
}
