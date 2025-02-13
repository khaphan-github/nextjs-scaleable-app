import { CookieConfig } from "@/config/keys/cookies";
import { getCookieValue } from "./client-cookie";

/**
 * Get access token from cookie
 */
export default function getAccessToken() {
  return getCookieValue(CookieConfig.accessToken);
}