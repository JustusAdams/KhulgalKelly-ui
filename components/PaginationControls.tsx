import Link from 'next/link'
import { PaginationMeta } from '@/lib/api'

interface Props {
  pagination: PaginationMeta
  perPage: number
}

export default function PaginationControls({ pagination, perPage }: Props) {
  const { currentPage, totalPages, total, hasNext, hasPrevious } = pagination

  const buildUrl = (page: number) => `/shop?page=${page}&perPage=${perPage}`

  const getPageNumbers = () => {
    const delta = 2
    const range: number[] = []
    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      range.push(i)
    }
    return range
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex flex-col items-center gap-4 mt-14">

      <p className="text-xs tracking-[0.2em] uppercase text-stone-400">
        Page {currentPage} of {totalPages} — {total} works
      </p>

      <div className="flex items-center gap-2">

        {/* Previous */}
        {hasPrevious ? (
          <Link href={buildUrl(currentPage - 1)}
            className="border border-stone-900 text-stone-900 text-xs tracking-[0.25em] uppercase px-6 py-3 hover:bg-stone-900 hover:text-white transition-colors duration-200">
            Previous
          </Link>
        ) : (
          <span className="border border-stone-200 text-stone-300 text-xs tracking-[0.25em] uppercase px-6 py-3 cursor-not-allowed">
            Previous
          </span>
        )}

        {/* First + ellipsis */}
        {pageNumbers[0] > 1 && (
          <>
            <Link href={buildUrl(1)} className="w-9 h-9 flex items-center justify-center text-xs text-stone-500 hover:text-stone-900">1</Link>
            {pageNumbers[0] > 2 && <span className="w-9 h-9 flex items-center justify-center text-xs text-stone-300">…</span>}
          </>
        )}

        {/* Page numbers */}
        {pageNumbers.map((p) => (
          <Link key={p} href={buildUrl(p)}
            className={`w-9 h-9 flex items-center justify-center text-xs transition-colors duration-200
              ${p === currentPage ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-900'}`}>
            {p}
          </Link>
        ))}

        {/* Last + ellipsis */}
        {pageNumbers.at(-1)! < totalPages && (
          <>
            {pageNumbers.at(-1)! < totalPages - 1 && <span className="w-9 h-9 flex items-center justify-center text-xs text-stone-300">…</span>}
            <Link href={buildUrl(totalPages)} className="w-9 h-9 flex items-center justify-center text-xs text-stone-500 hover:text-stone-900">{totalPages}</Link>
          </>
        )}

        {/* Next */}
        {hasNext ? (
          <Link href={buildUrl(currentPage + 1)}
            className="border border-stone-900 text-stone-900 text-xs tracking-[0.25em] uppercase px-6 py-3 hover:bg-stone-900 hover:text-white transition-colors duration-200">
            Next
          </Link>
        ) : (
          <span className="border border-stone-200 text-stone-300 text-xs tracking-[0.25em] uppercase px-6 py-3 cursor-not-allowed">
            Next
          </span>
        )}
      </div>

      {/* Per page selector */}
      <div className="flex items-center gap-3 text-xs text-stone-400 tracking-widest uppercase">
        <span>Per page:</span>
        {[12, 24, 48].map((size) => (
          <Link key={size} href={`/shop?page=1&perPage=${size}`}
            className={`transition-colors ${perPage === size ? 'text-stone-900 font-medium underline underline-offset-4' : 'hover:text-stone-600'}`}>
            {size}
          </Link>
        ))}
      </div>

    </div>
  )
}