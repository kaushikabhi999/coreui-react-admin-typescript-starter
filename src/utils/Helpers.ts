import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "./Constants";
import SnackbarHandler from "./SnackbarHandler";
import { ERROR_RESPONSE } from "./Types";
import { getAuthValue, resetAuthValue } from "../modules/authModule/Hooks/useAuthValue";

export const fetcher = (config: AxiosRequestConfig) => {
  const { url, method = "GET", data, headers } = config;
  const { token, language } = getAuthValue();

  return axios.request({
    baseURL: API_URL,
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Accept-Language": language,
      "Content-Type": "application/json",
      "x-Authorization":
        "K9mDtjR81Tr6fwwqRtlFo1HmK9nzF9eza7k5FKd5cEs7he4SbE66o18fJAJyJIoh",
      ...headers,
    },
    ...config,
  });
};

export const onSuccess = (response: any) => {
  if (response?.data) {
    const { message }: ERROR_RESPONSE = response?.data;
    if (message) {
      SnackbarHandler.successToast(message);
    }
  }
};

export const onError = (error: any) => {
  if (error?.response) {
    const { message }: ERROR_RESPONSE = error?.response?.data;
    console.log({ error: error?.response?.data, message });
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      resetAuthValue();
    }
    if (message !== "Email not found") {
      SnackbarHandler.errorToast(message);
    }
  } else {
    console.log({ error });
    SnackbarHandler.errorToast("Failed to connect to server");
  }
};

export const jsonToFormData = (data: any) => {
  const formData = new FormData();
  for (let key in data) {
    if (data[key]) {
      formData.append(key, data[key]);
    }
  }
  return formData;
};

export const isEmptyObject = (o: any) => {
  return Object.keys(o).every(function (x) {
    return o[x] === "" || o[x] === null;
  });
};

export const removeEmptyKey = (o: any) => {
  const obj: any = {};
  Object.entries(o).forEach(([k, v]) => {
    if (v === Object(v)) {
      obj[k] = removeEmptyKey(v);
    } else if (v !== null && v !== "") {
      obj[k] = o[k];
    }
  });
  return obj;
};
