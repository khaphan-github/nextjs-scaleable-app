const DOMAIN = process.env.NEXT_PUBLIC_EDUZAA_AUTH_DOMAIN ?? '';
export const APIs = {
  LOGIN_BY_TOKEN_HUTECH: DOMAIN + '/api/auth/login-token-hutech',
}