import Posts from "@/modules/post/components/posts"
import Link from "next/link"

export default function Page() {
  return (
  <>
  <Link href={'/blog/create'}>Go to create</Link>
  <Posts />
  </>
  )
}