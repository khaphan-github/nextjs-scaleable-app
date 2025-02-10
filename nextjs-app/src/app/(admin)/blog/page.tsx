/**
 * Version call api
 */
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

// export default async function Page() {
//   try {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await data.json()
//     return (
//       <ul>
//         {posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     )
//   } catch (error) {
//     console.error('Failed to fetch posts:', error)
//     return (
//       <ul>
//         <li>Failed to load posts</li>
//       </ul>
//     )
//   }
// }
/**
 * Version using client 
 */
import { Suspense } from 'react'
import Posts from "@/lib/ui/posts"
export default function Page() {
  // Don't await the data fetching function
  const posts = fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json())
  return (
   <Suspense fallback={<div>Loafding...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}