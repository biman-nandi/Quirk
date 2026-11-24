export const createSlug = (field: string) => {
  return field
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[^\w-]+/g, "")

}

// export const formatedPrice = (price: number) => {
//   return new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'INR'
//   }).format(price)
// }

export const formatedDate = (publishedAt: string) => {
  const date = new Date(publishedAt)
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date)
}

export const formatedRating = (rating: number) => {
  if (rating < 1000)
    return `${rating}`
  else if (rating >= 1000 && rating < 1000000)
    return `${Math.floor(rating / 1000)}K+`
}

export const discountedPercentage = (originalPrice: number, price: number) => {
  const totalDiscount = originalPrice - price
  return (totalDiscount * 100) / originalPrice
}

export const formatedPrice = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// categories:Maxi,Shirt::priceRanges:₹500 - ₹1,000"
export function parseFilters(f: string | null): Record<string, string[]> {
  const result: Record<string, string[]> = {}

  if (!f) {
    return result
  }

  f.split("::").forEach((group) => {
    const index = group.indexOf(":")

    if (index === -1)
      return

    const key = group.slice(0, index)
    const values = group.slice(index + 1).split(",").filter(Boolean)

    if (values.length) result[key] = values
  })

  return result
}

export function serializeFilters(filters: Record<string, string[]>): string {
  return Object.entries(filters)
    .filter(([, values]) => values.length > 0)
    .map(([key, value]) => `${key}:${value.join(",")}`)
    .join("::")
}