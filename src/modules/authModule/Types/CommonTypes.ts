import { USER_DATA } from "./ResponseTypes";

export type LANGUAGE = "en" | "fr" | "ar" | "sp" | "tr";

export type AUTH_STATE = {
  language: LANGUAGE;
  loggedIn: boolean;
  user: USER_DATA | undefined;
  token: string;
};
