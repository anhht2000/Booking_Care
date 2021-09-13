import { IresponseLogin } from "../typeModels/auth";
import { IpostUser } from "../typeModels/user";
import axiosClient from "./axiosClient";

export const userApi = {
  getAllUsers: () => {
    const url = "/get-user/0";
    return axiosClient.get(url);
  },
  getUser: (userId: number) => {
    const url = "/get-user";
    return axiosClient.get(url + `/${userId}`);
  },
  createUser: (user: IpostUser) => {
    const url = "/create-user";
    return axiosClient.post(url, user);
  },
  DeleteUser: (id: number): Promise<IresponseLogin> => {
    const url = "/delete-user";
    return axiosClient.delete(url + `/${id}`);
  },
  editUser: (user: any): Promise<IresponseLogin> => {
    const url = "/edit-user";
    return axiosClient.put(url + `/${user.id}`, user);
  },
  postLogin: (userName: string, password: string) => {
    const url = "/login";
    return axiosClient.post(url, { userName, password });
  },
};
