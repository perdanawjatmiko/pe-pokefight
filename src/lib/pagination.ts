// src/lib/pagination.ts
export function getPagination(current: number, total: number) {
    const range = []
    const delta = 2
  
    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i)
    }
  
    if (current - delta > 2) range.unshift('...')
    if (current + delta < total - 1) range.push('...')
  
    range.unshift(1)
    if (total > 1) range.push(total)
  
    return range
  }
  