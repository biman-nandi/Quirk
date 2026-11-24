
export const collectionFilters = {
  categories: [
    { label: "Maxi", value: "maxi", count: 1 },
    { label: "Shirt", value: "shirt", count: 2 },
    { label: "Saree", value: "saree", count: 1 },
    { label: "Mobile", value: "mobile", count: 1 },
    { label: "Shoes", value: "shoes", count: 1 },
    { label: "Watch", value: "watch", count: 1 },
    { label: "Laptop", value: "laptop", count: 1 },
    { label: "Mascara", value: "mascara", count: 1 },
    { label: "Bra", value: "bra", count: 1 },
  ],

  brands: [
    { label: "MF Retail", value: "mf-retail", count: 1 },
    { label: "Allen Solly", value: "allen-solly", count: 1 },
    { label: "Anula", value: "anula", count: 1 },
    { label: "U.S. POLO ASSN.", value: "us-polo-assn", count: 1 },
    { label: "Apple", value: "apple", count: 2 },
    { label: "Nike", value: "nike", count: 1 },
    { label: "Titan", value: "titan", count: 1 },
    { label: "Essence", value: "essence", count: 1 },
    { label: "Marks & Spencer", value: "marks-spencer", count: 1 },
  ],

  priceRanges: [
    { label: "Under ₹500", value: "0-500", min: 0, max: 500, count: 1 },
    { label: "₹500 - ₹1,000", value: "500-1000", min: 500, max: 1000, count: 2 },
    { label: "₹1,000 - ₹2,000", value: "1000-2000", min: 1000, max: 2000, count: 2 },
    { label: "₹2,000 - ₹5,000", value: "2000-5000", min: 2000, max: 5000, count: 2 },
    { label: "₹5,000 - ₹10,000", value: "5000-10000", min: 5000, max: 10000, count: 1 },
    { label: "Above ₹10,000", value: "10000+", min: 10000, max: Infinity, count: 2 },
  ],

  ratings: [
    { label: "4★ & above", value: "4+", min: 4, count: 6 },
    { label: "3★ & above", value: "3+", min: 3, count: 7 },
    { label: "2★ & above", value: "2+", min: 2, count: 8 },
    { label: "1★ & above", value: "1+", min: 1, count: 10 },
  ],

  discounts: [
    { label: "10% and above", value: "10+", min: 10, count: 10 },
    { label: "25% and above", value: "25+", min: 25, count: 8 },
    { label: "40% and above", value: "40+", min: 40, count: 5 },
    { label: "60% and above", value: "60+", min: 60, count: 2 },
  ],

  availability: [
    { label: "In Stock", value: "in-stock", count: 10 },
    { label: "Out of Stock", value: "out-of-stock", count: 0 },
  ],
};