/* eslint-disable @typescript-eslint/no-explicit-any */
import defaultAxios from "@/lib/client/axios-default";
import { APIs } from "../config";
import useApiState from "@/lib/hooks/use-api-state";

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

      if (result.status === 200) {
        setData(result.data);
        setIsSuccess(true);
        console.log(result.data);
        // TODO: IMPLEMENT SET COOKIE
      }
    } catch (err) {
      setError(err as any);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    data,
    error,
    isLoading,
    isSuccess,
    submit
  };
}