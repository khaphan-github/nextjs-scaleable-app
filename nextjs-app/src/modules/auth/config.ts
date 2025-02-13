import { environments } from "@/config/environments"

const DOMAIN = environments.NEXT_PUBLIC_EDUZAA_DOMAIN;
export const APIs = {
  LOGIN_BY_TOKEN_HUTECH: DOMAIN + '/api/auth/login-token-hutech',
  LOGIN_BY_USERNAME_PASSWORD: DOMAIN + '/api/auth/login-user-pass',
}