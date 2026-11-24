export const createSlug = (field: string) => {
  return field
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[^\w-]+/g, "")

}

export const formatedPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR'
  }).format(price)
}

export const formatedDate = (publishedAt: string) => {
    const date = new Date(publishedAt)
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date)
  }