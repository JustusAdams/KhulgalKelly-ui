// components/Price.tsx
import { formatPrice } from '@/lib/currency'

interface PriceProps {
  amount: number | string
  currency?: string
  className?: string
}

export default function Price({ amount, currency = 'GHS', className }: PriceProps) {
  return (
    <span className={className}>
      {formatPrice(amount, currency)}
    </span>
  )
}