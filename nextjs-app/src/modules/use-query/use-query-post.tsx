"use client"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "@/lib/hooks/use-debounce";

const fetchPosts = async (searchString: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchString}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const UseQueryPostComponent = () => {
  const [searchString, setSearchString] = useState("");
  const debouncedSearchString = useDebounce(searchString);

  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["posts", { searchString: debouncedSearchString }],
    queryFn: () => fetchPosts(debouncedSearchString),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <input
         type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Search posts"
      />
      <button onClick={() => refetch()}>Search</button>
      <button onClick={() => refetch()}>Refresh</button>
      {isFetching ? <p>Refreshing...</p> : (
        <ul>
          {data.map((post: { id: number; title: string }) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
