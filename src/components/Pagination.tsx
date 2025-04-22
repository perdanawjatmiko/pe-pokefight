'use client'

import Link from 'next/link'
import { getPagination } from '@/lib/pagination'

type Props = {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: Props) {
  const pages = getPagination(currentPage, totalPages)

  return (
    <div className="flex justify-center mt-8">
      <div className="join">
        {currentPage > 1 && (
          <Link href={`/?page=${currentPage - 1}`} className="join-item btn">
            «
          </Link>
        )}

        {pages.map((page, i) =>
          typeof page === 'number' ? (
            <Link
              key={i}
              href={`/?page=${page}`}
              className={`join-item btn ${page === currentPage ? 'btn-active' : ''}`}
            >
              {page}
            </Link>
          ) : (
            <button key={i} className="join-item btn btn-disabled">
              ...
            </button>
          )
        )}

        {currentPage < totalPages && (
          <Link href={`/?page=${currentPage + 1}`} className="join-item btn">
            »
          </Link>
        )}
      </div>
    </div>
  )
}
