import defaultAxios from "@/lib/client/axios-default";
import { APIs } from "../config";
import useApiState from "@/lib/hooks/use-api-state";
import { LoginByTokenModel } from "../models/login-by-token.model";

/**
 * Handle login by token hutech at serverside
 * @param token 
 */
export default function useLoginByTokenHutech(token: string) {
  const {
    data,
    error,
    isLoading,
    isSuccess,
    setData,
    setError,
    setIsSuccess,
    setIsLoading,
  } = useApiState();

  const submit = async () => {
    try {
      setIsLoading(true);
      const result = await defaultAxios.post(APIs.LOGIN_BY_TOKEN_HUTECH, {
        token_hutech: token,
      });

      setData(new LoginByTokenModel().fromJSON(result.data));
      setIsSuccess(true);

    } catch (err) {
      setError(err as string);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    isSuccess,
    submit
  };
}