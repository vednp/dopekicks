// @ts-ignore
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { cardProductInterface } from "../interface";
import { client } from "../lib/sanity";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import { montserrat } from "../fonts";

const getData = async (category: { category: string }) => {
  const query = `*[_type == "product" && category->name == "${category}"]{
  _id,
  price,
  name,
  slug,
"categoryName": category->name,
"imageUrl": image.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
};

export default async function page({ params }: any) {
  const data: cardProductInterface[] = await getData(params.category);
  return (
    <div className="pb-20 pt-9 bg-[#d7d7d7]">
      <MaxWidthWrapper>
        <p
          className={cn(
            "text-2xl pt-16 pb-9 flex mx-auto tracking-tight",
            montserrat.className
          )}
        >
          Our Products for {params.category}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {data.length > 0 ? (
            data.map((product) => {
                return <Card key={product._id} {...product} />;
              })
          ):(
              <p>No products found</p>
          ) }
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
