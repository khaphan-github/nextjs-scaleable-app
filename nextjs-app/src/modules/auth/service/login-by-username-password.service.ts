import { environments } from "@/config/environments";
import { LoginByTokenModel } from "../models/login-by-token.model";
import defaultAxios from "@/lib/client/axios-default";
import { APIs } from "../config";
/**
 * Call api to get response
 * Hanle all logic map data at service
 * @param username 
 * @param password 
 * @returns 
 */
export async function loginByUserNamePasswordService(username: string, password: string) {
  const result = await defaultAxios.post(APIs.LOGIN_BY_USERNAME_PASSWORD, {
    username: username,
    password: password,
    app_key: environments.NEXT_PUBLIC_APP_KEY,
  });
  return new LoginByTokenModel().fromJSON(result.data)
}