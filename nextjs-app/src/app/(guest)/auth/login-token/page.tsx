import LoginToken from "@/modules/auth/components/login-by-token"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { token = '', redirect = '/' } = await searchParams;
  return <LoginToken token={token[0]}  redirect={redirect[0]}></LoginToken>
}