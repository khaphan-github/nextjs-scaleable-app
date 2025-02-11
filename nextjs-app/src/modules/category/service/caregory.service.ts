import Category from "../model/category";

/**
 * Find all category in local storage push new items and save
 * @param category 
 */
export async function SaveCategory(category: Category) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  category.id = new Date().getTime().toString();
  const categories = JSON.parse(localStorage.getItem('categories') || '[]') as Category[];
  categories.push(category);
  localStorage.setItem('categories', JSON.stringify(categories));
}

export async function FindAllCategory() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return JSON.parse(localStorage.getItem('categories') || '[]') as Category[];
}
