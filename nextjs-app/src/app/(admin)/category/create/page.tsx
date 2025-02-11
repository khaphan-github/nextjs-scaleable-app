import CategoryForm from "@/modules/category/components/category-form"
import Link from "next/link"
export default function Page() {
  return (<>
    <CategoryForm></CategoryForm>
    <Link href='/category'>Goback</Link>
  </>)
}
