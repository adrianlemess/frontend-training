export interface User {
  id: number;
  username: string;
  age: number;
  role: UserEnum;
  company: string;
  nationality: string;
}

export enum UserEnum {
    ADMIN = 'admin',
    USER = 'user'
}