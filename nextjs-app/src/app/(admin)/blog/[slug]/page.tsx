export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // post/123/ => 123
  // authth?toen=123123123123 => 123123123123
  const slug = (await params).slug
  return <div>My Post: {slug}</div>
}