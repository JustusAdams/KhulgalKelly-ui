// lib/currency.ts
export const formatPrice = (amount: number | string, currency = 'GHS'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(Number(amount))
}