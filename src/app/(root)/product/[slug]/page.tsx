import ProductImages from "@/components/shared/product/product-images";
import ProductPrice from "@/components/shared/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const ProductDetailsPage = async (props: ProductDetailsPageProps) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Image columns */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        {/* Details column */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6 mb-10">
            <p className="text-xs">
              {product.brand} {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
            <p className="text-sm">
              {product.rating} of {product.numReviews} Reviews
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <ProductPrice
                value={Number(product.price)}
                className="bg-green-100 w-24 rounded-full text-green-700 px-5 py-2"
              />
            </div>
          </div>
          <div>
            <p className="font-semibold">Description</p>
            <p>{product.description}</p>
          </div>
        </div>
        {/* Action Column */}
        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <p className="text-md">Price</p>
                <div>
                  <ProductPrice value={Number(product.price)} />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <p className="text-md">Status</p>
                <div>
                  <Badge
                    variant={product.stock > 0 ? "outline" : "destructive"}
                  >
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </div>
              {product.stock > 0 && (
                <div className="flex-center">
                  <Button className="w-full">Add To Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
