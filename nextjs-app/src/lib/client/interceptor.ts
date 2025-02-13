import { AxiosError } from "axios";

export async function defaultResponseInterceptor(error: AxiosError) {
  console.log(error);
  if (error.response?.status === 401) {
    // Do something
  }
  return Promise.reject(error);

}