import { Product } from "./products"

const API_URL = `${process.env.API_BASE}/api`

export interface PaginationMeta {
  total: number
  totalPages: number
  currentPage: number
  perPage: number
  hasNext: boolean
  hasPrevious: boolean
}

export interface PaginatedResponse<T> {
  pagination: PaginationMeta
  results: T[]
}

// For featured section (homepage) — simple limit, no pagination
export async function getFeaturedProducts(limit = 3) {
  const res = await fetch(`${API_URL}/products/?perPage=${limit}&page=1`, {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('Failed to fetch featured products')
  const data: PaginatedResponse<Product> = await res.json()
  return data.results
}

// For shop page — full pagination
export async function getProducts(
  page = 1,
  perPage = 12
): Promise<PaginatedResponse<Product>> {
  const url = new URL(`${API_URL}/products/`)
  url.searchParams.set('page', String(page))
  url.searchParams.set('perPage', String(perPage))

  const res = await fetch(url.toString(), { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function getProduct(id: string) {
  const res = await fetch(`${API_URL}/products/${id}/`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch product')
  return res.json()
}