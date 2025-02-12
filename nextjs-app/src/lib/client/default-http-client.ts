import getAccessToken from "../helpers/get-access-token";

const fetchWithToken = async (method: string, ...args: [RequestInfo, RequestInit?]) => {
  const [url, options] = args;

  const accessToken = getAccessToken();
  // Add JWT token to the request headers
  const updatedOptions = {
    ...options,
    method,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
      'Authentication': 'JWT ' + accessToken,
      'app-key': process.env.NEXT_PUBLIC_APP_KEY ?? '',
    },
  };

  const res = await fetch(url, updatedOptions);
  return await res.json();
};

/**
 * Call http GET request with default fetcher
 * @param args 
 * @returns 
 */
export const GETFetcher = async (...args: [RequestInfo, RequestInit?]) => {
  return fetchWithToken('GET', ...args);
};

/**
 * Call http POST request with default fetcher
 * @param args 
 * @returns 
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POSTFetcher = async (url: RequestInfo, body: any, options?: RequestInit) => {
  const updatedOptions = {
    ...options,
    body: JSON.stringify(body),
  };
  return fetchWithToken('POST', url, updatedOptions);
};
