import { IresponseLogin } from "./../typeModels/auth";
import axiosClient from "./axiosClient";
export const allCodeApi = {
  getGender: (): Promise<IresponseLogin> => {
    const url = "get-allcode";
    return axiosClient.get(url + "/GENDER");
  },
  getRole: (): Promise<IresponseLogin> => {
    const url = "get-allcode";
    return axiosClient.get(url + "/ROLE");
  },
  getPosition: (): Promise<IresponseLogin> => {
    const url = "get-allcode";
    return axiosClient.get(url + "/POSITION");
  },
};
