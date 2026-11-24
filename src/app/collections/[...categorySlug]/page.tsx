export default async function CategoryPage(
  {
    params
  }: {
  params: Promise<{categorySlug: string}>
}) {
  const {categorySlug} = await params
  console.log(categorySlug)

  return (
    
    <div>
      {categorySlug}
    </div>
  );
};