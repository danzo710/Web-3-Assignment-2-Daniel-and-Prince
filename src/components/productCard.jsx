import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
const ProductCard = (props) => {
    const placeholderUrl = `https://placehold.co/200x200?text=placeholder`;

    return (
    <Card className="product-card">
      <CardHeader>
        <CardTitle>{props.product.name}</CardTitle>
        <img src={placeholderUrl} alt={props.product.name} className="w-full h-48 object-cover mb-2" />
      </CardHeader>

      {(props.viewType === "browse" || props.viewType === "single") && (
        <CardContent>
          <p>${props.product.price.toFixed(2)}</p>
        </CardContent>
      )}

      {props.viewType === "categoryOnly" && (
        <CardContent>
          <p>{props.product.category}</p>
        </CardContent>
      )}

      {(props.viewType === "browse" || props.viewType === "single") && (
        <CardFooter>
          <Button>Add to Cart</Button>
        </CardFooter>
      )}
    </Card>
    );
};

export {ProductCard}