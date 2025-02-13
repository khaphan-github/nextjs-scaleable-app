import { CookieConfig } from "@/config/keys/cookies";
import { getCookieValue } from "./client-cookie";

/**
 * Get access token from cookie
 * @returns {string | null} The access token or null if not found
 */
export default function getAccessToken() {
  return getCookieValue(CookieConfig.accessToken);
}