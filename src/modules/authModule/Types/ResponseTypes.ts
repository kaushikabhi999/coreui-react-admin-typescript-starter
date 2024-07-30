
export type USER_DATA = {
  id: number;
  name: string;
  email: string;
  role: string;
  username: string;
  phone_number: string;
  type: number;
  status: number;
};

export type LOGIN_RESPONSE = {
  data: {
    accessToken: {
      token: string;
    }
    user: USER_DATA;
  };
  message?: string;
};

export type FORGET_PASSWORD_RESPONSE = {
  status: boolean;
  message?: string;
};

export type VERIFY_OTP_RESPONSE = {
  status: boolean;
  message?: string;
};

export type RESET_PASSWORD_RESPONSE = {
  status: boolean;
  message?: string;
};
