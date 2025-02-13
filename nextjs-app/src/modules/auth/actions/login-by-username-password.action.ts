'use server'
import { loginByUserNamePasswordService } from "../service/login-by-username-password.service"
import { setTokenToCookie, setUserInfoToCookie } from "./auth-cookie"
import { redirect } from 'next/navigation'

export async function loginByUserNamePasswordAction({ username, password }: { username: string, password: string }, callback: string) {
  const result = await loginByUserNamePasswordService(username, password)

  await setTokenToCookie(result.token)
  await setUserInfoToCookie(result.user_info)

  redirect(callback)
}