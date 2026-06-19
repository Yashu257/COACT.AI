import ProductDetailTemplate from "../components/ProductDetailTemplate";
import { product } from "../data/products";

export default function Product() {
  return <ProductDetailTemplate config={product} />;
}
