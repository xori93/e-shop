export type AuthType = "login" | "signup";

export type AuthFormData = {
  username?: string;
  email: string;
  password: string;
};