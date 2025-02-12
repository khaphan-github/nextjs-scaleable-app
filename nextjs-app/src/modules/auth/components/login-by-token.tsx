/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useLoginByTokenHutech from "../hooks/use-login-by-token";
import DefaultUILoadingHandler from "@/lib/helpers/default-ui-handler";
/**
 * Hanlde login by token then redirect to redirect routes.
 * @param param0 
 * @returns 
 */
export default function LoginToken({ token, redirect }: { token: string, redirect: string }) {
  const router = useRouter();
  const {
    error,
    isLoading,
    isSuccess,
    submit
  } = useLoginByTokenHutech(token);

  useEffect(() => {
    submit();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      router.push(redirect);
    }
  }, [isSuccess, router, redirect]);

  const loading = DefaultUILoadingHandler(isLoading, false, error);
  return loading;
}
