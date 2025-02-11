import CategoryDisplayList from "@/modules/category/components/display-list";
import LoadingSkeleton from "@/modules/category/components/ui/loading";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (<>
    <Suspense fallback={<LoadingSkeleton></LoadingSkeleton>}>
      <CategoryDisplayList></CategoryDisplayList>
    </Suspense>
    <Link href="category/create">Go to create</Link>
  </>)
}
