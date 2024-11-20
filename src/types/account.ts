export type Account = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  createdDate: Date;
  updatedDate: Date;
  jwtToken: string;
  deviceId: string;
}