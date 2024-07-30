import { BehaviorSubject } from "rxjs";
import { AUTH_STATE } from "../Types/CommonTypes";
import { getAuthValue } from "../Hooks/useAuthValue";
import { LOGIN_REQUEST, VERIFY_OTP_REQUEST } from "../Types/RequestTypes";
import PersistStorage from "src/utils/PersistStorage";
import { fetcher } from "src/utils/Helpers";

class AuthService {
  queryKeys = {};
  authState$;
  initialAuthState: AUTH_STATE = {
    language: "en",
    loggedIn: false,
    user: undefined,
    token: "",
  };
  registerParams: any = {};

  constructor() {
    this.authState$ = new BehaviorSubject<AUTH_STATE>(this.initialAuthState);

    const persistStorage = new PersistStorage("authState", this.authState$);
    persistStorage.init();
  }

  resetAuthValue = () => {
    const { language } = getAuthValue();
    this.authState$.next({ ...this.initialAuthState, language });
  };

  login = (data: LOGIN_REQUEST) => {
    return fetcher({
      url: "/auth/login",
      method: "POST",
      data,
    });
  };

  verifyOtp = (data: VERIFY_OTP_REQUEST) => {
    return fetcher({
      url: "/verify-OTP",
      method: "PUT",
      data,
    });
  };

  checkEmailExists = (email: string) => {
    return fetcher({
      url: "/checkEmail",
      data: { email },
      method: "POST",
    });
  };

  checkEmailAvailability = (email: string) => {
    return fetcher({
      url: "/check-email-availability",
      data: { email },
      method: "POST",
    });
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
