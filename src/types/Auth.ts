export interface Auth {
  user: User
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  createdDate: string;
  updatedDate: string;
  jwtToken: string;
  deviceId: string;
}

export interface Me extends User {
  imageUrl: string;
}