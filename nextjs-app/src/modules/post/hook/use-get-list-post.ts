import { APIs } from "../config";
import useSWR from "swr";
import { PostModel } from "../models/post";
import { GETFetcher } from "@/lib/client/default-http-client";
import { IAPIFetchingHook } from "@/lib/hooks/interfaces/api-fetching-hook";

/**
 * Declare respone from api
 */
export interface IPostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * Get list post from API
 * Map data to PostModel
 * Return data, error, isLoading
 * @returns 
 */
export default function useGetListPost(): IAPIFetchingHook<Array<PostModel>> {
  const { data, error, isLoading } = useSWR(APIs.GET_LIST_POST, GETFetcher);

  let mappedData = [];
  if (data) {
    mappedData = data.map((e: IPostResponse) =>
      new PostModel().fromJson(e)
    )
  }
  return {
    data: mappedData,
    error,
    isLoading,
    isEmpty: !mappedData || mappedData.length === 0
  };
}