import { UseQueryPostComponent } from "@/modules/use-query/use-query-post";
import { CreatePost } from '@/modules/use-query/use-mutations-post';

export default function Page() {
  return (
    <div>
      <CreatePost></CreatePost>
      <UseQueryPostComponent />
    </div>
  );
}