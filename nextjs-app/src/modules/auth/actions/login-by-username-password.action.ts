'use server'

import { loginByUserNamePasswordService } from "../service/login-by-username-password.service"
import { setTokenToCookie, setUserInfoToCookie } from "./auth-cookie"
import { redirect } from 'next/navigation'

export async function loginByUserNamePasswordAction(username: string, password: string, callback: string) {
  // Hanlde login by username and password:
  const result = await loginByUserNamePasswordService(username, password)
  console.log(result);
  await setTokenToCookie(result.token)
  await setUserInfoToCookie(result.user_info)
  redirect(callback)

  return Promise.resolve({
    success: true,
    message: 'Thank you for your message!'
  })
}