"use client"
import { useEffect, useState } from 'react';
import { useCreatePost } from '../hook/use-create-post';
import { PostModel } from '../models/post';
import { useRouter } from 'next/navigation';
/**
 * Create post
 * Call api
 * Sucess then show message and redirect to route
 * @returns 
 */
const CreatePost = ({ redirect }: { redirect: string }) => {
  const route = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { error, isLoading, summit, isSuccess } = useCreatePost({
    title,
    content,
  } as PostModel);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await summit();
    setTitle('');
    setContent('');
  };

  useEffect(() => {
    if (isSuccess) {
      route.push(redirect);
    }
  }, [isSuccess, redirect, route]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? 'Creating...' : 'Create Post'}
      </button>
      {error && <p className="text-red-500">{typeof error === 'string' ? error : 'An error occurred'}</p>}
      {isSuccess && <p className="text-green-500">Post created successfully</p>}
    </form>
  );
};

export default CreatePost;