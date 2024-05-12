// This file contains type definitions for the data.

export type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UserCreate = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  type?: string;
  required?: boolean;
  inputProps?: Object;
}
