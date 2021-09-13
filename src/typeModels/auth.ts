export interface IresponseUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  gender: number;
  roleid?: string;
  phoneNumber: string;
  positionId?: number;
  image?: string;
}
export interface IresponseLogin {
  errCode: number;
  message: string;
  data: IresponseUser[];
}
export interface Iresponse<T> {
  errCode: number;
  message: string;
  data: T[];
}
export interface IpostParams {
  userName: string;
  password: string;
}
