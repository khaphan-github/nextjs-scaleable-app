interface Post {
  id: string
  title: string
  content: string
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 61

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

// cALL TO GET ID/
export async function generateStaticParams() {
  // return [{
  //   id: String(1)
  // }, {
  //   id: String(2)
  // },
  // {
  //   id: String(3)
  // }
  // ]
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) => {
    console.log(`Call this function when bild time`)
    return res.json()
  }
  )
  return posts.map((post) => ({
    id: String(post.id),
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then(
    (res) => {
      console.log(`Call this function at run time`)
      return res.json()
    }
  )
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  )
}