import { mutate } from "swr";
import { PostModel } from "../models/post";
import { APIs } from "../config";
import { useState } from "react";
import { POSTFetcher } from "@/lib/client/default-http-client";
/**
 * Call api to create post
 * Return result
 * @param post 
 * @returns 
 */
export function useCreatePost(post: PostModel) {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const createPost = async () => {
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
      mutate(APIs.CREATE_POST);
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
    createPost
  };
}