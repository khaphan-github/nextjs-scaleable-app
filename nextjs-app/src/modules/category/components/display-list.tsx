"use client"
import { useEffect, useState } from "react"
import { FindAllCategory } from "../service/caregory.service"
import Category from "../model/category"

export default function CategoryDisplayList() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function get() {
      const res = await FindAllCategory();
      setCategories(res);
    }
    get();
  }, [])

  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>{category.name}</li>
      ))}
    </ul>
  )
}