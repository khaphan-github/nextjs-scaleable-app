"use client"

import LoadingSkeleton from "@/modules/category/components/ui/loading";
import dynamic from "next/dynamic";
import Link from "next/link";

const CategoryDisplayListLazyLoad = dynamic(() => import("@/modules/category/components/display-list"), {
  ssr: false, // disable server size rendering
  loading: () => <LoadingSkeleton />
});

export default function Page() {
  return (<>
    <CategoryDisplayListLazyLoad></CategoryDisplayListLazyLoad>
    <Link href="category/create">Go to create</Link>
  </>)
}
