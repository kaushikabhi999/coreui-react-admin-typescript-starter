import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import AuthService from "../Services/AuthService";
import { LOGIN_RESPONSE } from "../Types/ResponseTypes";
import { getAuthValue, setAuthValue } from "./useAuthValue";
import { onError } from "src/utils/Helpers";

function useLoginMutation() {
  const navigate = useNavigate();
  const loginMutation = useMutation(AuthService.login, {
    onSuccess: (responseData) => {
      const {
        status,
        data,
      }: AxiosResponse<LOGIN_RESPONSE> = responseData;
      if (status === 200) {
        const {data: _data} = data as LOGIN_RESPONSE;
        const { user , accessToken } = _data
          setAuthValue({
            ...getAuthValue(),
            loggedIn: true,
            user,
            token: accessToken.token,
          });
          navigate({ pathname: "/dashboard" });
      }
    },
    onError: onError,
  });

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isLoading,
  };
}

export default useLoginMutation;
