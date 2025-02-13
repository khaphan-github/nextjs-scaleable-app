/* eslint-disable @typescript-eslint/no-explicit-any */
import { CookieConfig } from "@/config/keys/cookies";
import { cookies } from "next/headers";

export async function setTokenToCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set(CookieConfig.accessToken, token, {
    path: '/',
    secure: true,
  })
}
export async function setUserInfoToCookie(userInfo: any) {
  const cookieStore = await cookies()
  cookieStore.set(CookieConfig.userInfo, JSON.stringify(userInfo), {
    secure: true,
  })
}

export async function removeTokenFromCookie() {
  const cookieStore = await cookies()
  cookieStore.delete(CookieConfig.accessToken)
}

export async function removeUserInfo() {
  const cookieStore = await cookies()
  cookieStore.delete(CookieConfig.userInfo)
}