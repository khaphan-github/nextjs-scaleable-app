"use client";
import useGetListPost from '../hook/use-get-list-post';
import { PostModel } from '../models/post';
import DefaultUILoadingHandler from '@/lib/helpers/default-ui-handler';

/**
 * Get data from useGetListPost and display it
 * @returns 
 */
export default function Posts() {
  const { data, error, isLoading, isEmpty } = useGetListPost();

  const loading = DefaultUILoadingHandler(isLoading, isEmpty, error);

  return loading || (
    <ul className="space-y-4">
      {data.map((post: PostModel) => (
        <li key={post.id} className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
        </li>
      ))}
    </ul>
  );
}
