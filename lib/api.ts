const API_URL = `${process.env.API_BASE}/api`

export async function getProducts() {

  const res = await fetch(`${API_URL}/products/`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export async function getProduct(id: string) {

  const res = await fetch(`${API_URL}/products/${id}/`, {
    cache: "no-store"
  })

  return res.json()
}