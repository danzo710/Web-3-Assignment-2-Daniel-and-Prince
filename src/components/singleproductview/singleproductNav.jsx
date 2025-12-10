import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SingleProductNav = (props) => {
  const product = props.product;

  if (!product) return null;

  return (
    <Breadcrumb className="mb-6 flex items-center space-x-1 text-gray-500 text-sm">
      <BreadcrumbItem>
        <BreadcrumbPage>Home</BreadcrumbPage>
      </BreadcrumbItem>

      <span className="inline-block"> &gt; </span>

      <BreadcrumbItem>
        <BreadcrumbPage>{product.gender || "Gender"}</BreadcrumbPage>
      </BreadcrumbItem>

      <span className="inline-block"> &gt; </span>

      <BreadcrumbItem>
        <BreadcrumbPage>{product.category || "Category"}</BreadcrumbPage>
      </BreadcrumbItem>

      <span className="inline-block"> &gt; </span>

      <BreadcrumbItem>
        <BreadcrumbPage>{product.name}</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default SingleProductNav;
