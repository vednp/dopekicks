import { productDetails } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import ProductDetail from "@/components/ProductDetail";


async function getData(slug: string) {
  const query = `*[_type == "product" && slug == "${slug}"]{
    _id,
     price,
     name,
     "categoryName": category->name,
     "imageUrl": image.asset->url,
     description,
 } `;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const data: productDetails = await getData(params.slug);

  return (
    <div>
      <ProductDetail {...data} />
    </div>
  );
}
