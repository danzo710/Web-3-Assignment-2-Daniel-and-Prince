import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
const ProductCard = (props) => {
  const placeholderUrl = `https://placehold.co/200x200?text=placeholder`;

  return (
    <Card className="product-card">
      <CardHeader>
        <Link to={`/product/${props.product.id}`}>
          <CardTitle>{props.product.name}</CardTitle>
        </Link>
        <Link to={`/product/${props.product.id}`}>
          <img
            src={placeholderUrl}
            alt={props.product.name}
            className="w-full h-48 object-cover mb-2"
          />
        </Link>
      </CardHeader>

      {(props.viewType === "browse" || props.viewType === "single") && (
        <CardFooter className="flex items-center justify-between">
          <span className="text-lg font-bold">${props.product.price.toFixed(2)}</span>
          <Button size="sm">Add to Cart</Button>
        </CardFooter>
      )}

      {props.viewType === "categoryOnly" && (
        <CardContent>
          <p>{props.product.category}</p>
        </CardContent>
      )}
    </Card>
  );
};

export { ProductCard };
