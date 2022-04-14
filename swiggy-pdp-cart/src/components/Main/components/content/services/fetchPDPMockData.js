export async function fetchCategoriesList() {
  const url="http://localhost:8080/categories"
  const data = await fetch(url).then(response=>response.json());
  return data
}
export async function fetchMenuList() {
  const url="http://localhost:8080/menu-items"
  const data = await fetch(url).then(response=>response.json());
  return data
}