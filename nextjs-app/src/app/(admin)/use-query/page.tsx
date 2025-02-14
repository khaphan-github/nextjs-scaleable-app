import { UseQueryPostComponent } from "@/modules/use-query/use-query-post";
import { CreatePost } from '@/modules/use-query/use-mutations-post';
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/">Go Home</Link> <br />
      <CreatePost></CreatePost>
      <UseQueryPostComponent />
    </>
  );
}