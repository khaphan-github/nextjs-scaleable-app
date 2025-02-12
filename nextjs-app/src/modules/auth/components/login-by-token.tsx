/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useLoginByTokenHutech from "../hooks/login-by-token-hook";

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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return <p>Login successful. Redirecting...</p>;
}
