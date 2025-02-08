import { cn } from "@/lib/utils";

type ProductPriceProps = {
  value: number;
  className?: string;
};

const ProductPrice = ({ value, className }: ProductPriceProps) => {
  const stringValue = value.toFixed(2);
  const [intVal, floatVal] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intVal}
      <span className="text-xs align-super">.{floatVal}</span>
    </p>
  );
};

export default ProductPrice;
