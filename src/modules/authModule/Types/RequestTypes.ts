export type LOGIN_REQUEST = {
  username: string;
  password: string;
};
export type FORGET_PASSWORD_REQUEST = {
  email: string;
};
export type VERIFY_OTP_REQUEST = {
  email: string;
  OTP: string;
};
export type RESET_PASSWORD_REQUEST = {
  new_password: string;
  confirm_new_password: string;
};
