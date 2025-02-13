"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useLoginByTokenHutech from "../hooks/use-login-by-token";
import DefaultUILoadingHandler from "@/lib/helpers/default-ui-handler";
/**
 * Hanlde login by token then redirect to redirect routes.
 * @url http://localhost:3000/auth/login-token?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5Njk2NiIsIk5oYW5WaWVuSUQiOiIyMjgwNjAwMzU4IiwiYXBwIjoiTU9CSUxFX0hVVEVDSCIsImlwIjoiOjpmZmZmOjEyNy4wLjAuMSIsInNlcnZpY2VfaWQiOm51bGwsImlhdCI6MTczOTM0NDIwNzU2MSwidHlwZSI6IkxPR0lOX1RPS0VOIiwiZXhwIjoxNzM5MzQ0MjA3NTY4fQ.RNP2J2s4F8BCRATA_eimj6kLOML1YqFepUMYHOjPd6U&redirect=http://localhost:3000/&app_key=eduzaa_v6
 * @param param0 
 * @returns 
 */
export default function LoginToken({ token, redirect }: { token: string, redirect: string }) {
  // use reload
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