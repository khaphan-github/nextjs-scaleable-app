import { PostModel } from "../models/post";
import { APIs } from "../config";
import { POSTFetcher } from "@/lib/client/default-http-client";
import useApiState from "@/lib/hooks/use-api-state";
import { ApiUpsertHook } from "@/lib/hooks/interfaces/api-upsert-hook";
/**
 * Call api to create post
 * Return result
 * @param post 
 * @returns 
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCreatePost(post: PostModel): ApiUpsertHook<any> {
  const {
    data,
    error,
    isLoading,
    isSuccess,
    setData,
    setError,
    setIsSuccess,
    setIsLoading,
  } = useApiState();

  const summit = async () => {
    setIsLoading(true);

    const requestBody = {
      title: post.title,
      body: post.content
    };

    try {
      const response = await POSTFetcher(
        APIs.CREATE_POST,
        requestBody
      );

      if (!response) {
        throw new Error("Failed to create post");
      }

      setData(response);
      setIsSuccess(true);

    } catch (err) {
      setError((err as Error).message);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    isSuccess,
    summit
  };
}