import { toast } from "react-toastify";

class SnackbarHandler {
  errorToast = (text: string) => {
    toast(text, { position: "bottom-center", type: "error" });
  };

  successToast = (text: string) => {
    toast(text, { position: "bottom-center", type: "success" });
  };

  normalToast = (text: string) => {
    toast(text, { position: "bottom-center", type: "default" });
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SnackbarHandler();
