"use client"
import { useMutation } from "@tanstack/react-query";

const createPost = async (newPost: { title: string; body: string }) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const CreatePost = () => {
  const { mutate, } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
    },
  });

  return (
    <button
      onClick={() => mutate({ title: "New Post", body: "Hello World" })}
    >
      Add Post
    </button>
  );
};
