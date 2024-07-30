export const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const getEmailValidationRules = (
  requiredMessage: string = "Email is required",
  invalidMessage: string = "Email is invalid"
) => {
  return {
    validate: (value: string | number = "") =>
      typeof value === "number"
        ? `${value}`.trim()
        : typeof value === "string" && value.trim()
          ? true
          : requiredMessage,
    pattern: {
      value: emailPattern,
      message: invalidMessage,
    },
  };
};

export const getPasswordValidationRules = (
  requiredMessage: string = "Password is required",
  minLengthMessage: string = "Password must be atleast 8 characters",
  maxLengthMessage: string = "Password should not be more than 20 characters"
) => {
  return {
    validate: (value: string | number = "") =>
      typeof value === "number"
        ? `${value}`.trim()
        : typeof value === "string" && value.trim()
          ? true
          : requiredMessage,
    minLength: {
      value: 8,
      message: minLengthMessage,
    },
    maxLength: {
      value: 20,
      message: maxLengthMessage,
    },
  };
};

export const getConfirmPasswordValidationRules = (password: string = "") => {
  return {
    validate: (value: string) => {
      if (value !== password) {
        return "Confirm Password didn't match";
      }
      return true;
    },
  };
};

export const getRequiredRules = (label: string, requiredMessage?: string) => {
  return {
    validate: (value: string | number = "") =>
      (
        typeof value === "number"
          ? `${value}`.trim()
          : typeof value === "string" && value.trim()
      )
        ? true
        : requiredMessage
          ? requiredMessage
          : `${label} is required`,
  };
};

export const getBarcodeRequiredRules = (
  label: string,
  requiredMessage?: string
) => {
  return {
    validate: (value: string | number = "") =>
      (typeof value === "number"
        ? `${value}`.trim()
        : typeof value === "string" && value.trim()) &&
        `${value}`.trim().length > 1
        ? true
        : requiredMessage
          ? requiredMessage
          : `${label} is required`,
  };
};

export const getRequiredNumberRules = (
  label: string,
  requiredMessage?: string
) => {
  return {
    validate: (value: number | string) => {
      if (isNaN(Number(value)) || `${value}`.trim() === "") {
        return requiredMessage ? requiredMessage : `${label} must be a number`;
      } else {
        return true;
      }
    },
  };
};

export const getUDIDRequiredRules = (label: string) => {
  return {
    validate: (value: string) =>
      value.trim() && value.trim().length === 12
        ? true
        : `Valid ${label} is required`,
  };
};

export const getMinRequiredNumberRules = (
  label: string,
  requiredMessage?: string
) => {
  return {
    validate: (value: number | string) => {
      if (isNaN(Number(value)) || `${value}`.trim() === "") {
        return requiredMessage ? requiredMessage : `${label} must be a number`;
      } else if (Number(value) === 0) {
        return `${label} must be greater than 0`;
      } else {
        return true;
      }
    },
  };
};

export const getRequiredAlphabetRules = (
  label: string,
  requiredMessage?: string
) => {
  return {
    validate: (value: number) => {
      if (isNaN(value)) {
        return requiredMessage ? requiredMessage : `${label} must be in digits`;
      } else if (`${value}`.length > 12) {
        return requiredMessage
          ? requiredMessage
          : `${label} can not be greater than 12 digits`;
      } else if (`${value}`.trim() === "") {
        return `${label} is required`;
      } else {
        return true;
      }
    },
  };
};

export const getRequiredPhoneNumberRules = (
  label: string,
  requiredMessage?: string
) => {
  return {
    validate: (value: number) => {
      if (isNaN(value)) {
        return requiredMessage ? requiredMessage : `${label} must be in digits`;
      } else if (`${value}`.length > 12) {
        return requiredMessage
          ? requiredMessage
          : `${label} can not be greater than 12 digits`;
      } else if (`${value}`.trim() === "") {
        return `${label} is required`;
      } else {
        return true;
      }
    },
  };
};

export const getGSTRequiredRules = (label: string) => {
  return {
    validate: (value: string) =>
      value.trim() === ""
        ? true
        : value.trim() && /^(\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}Z\d{1})$/.test(value)
          ? true
          : `Valid ${label} is required`,
  };
};

export const getPANRequiredRules = (label: string) => {
  return {
    validate: (value: string) =>
      value.trim() && /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value)
        ? true
        : `Valid ${label} is required`,
  };
};