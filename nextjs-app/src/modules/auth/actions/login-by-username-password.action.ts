'use server'
import { loginByUserNamePasswordService } from "../service/login-by-username-password.service"
import { setTokenToCookie, setUserInfoToCookie } from "./auth-cookie"
import { redirect } from 'next/navigation'

export async function loginByUserNamePasswordAction(formData: FormData,  callback: string) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const result = await loginByUserNamePasswordService(username, password)
  
  await setTokenToCookie(result.token)
  await setUserInfoToCookie(result.user_info)

  redirect(callback)
}