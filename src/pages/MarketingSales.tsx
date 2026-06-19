import ProductDetailTemplate from "../components/ProductDetailTemplate";
import { marketingSales } from "../data/products";

export default function MarketingSales() {
  return <ProductDetailTemplate config={marketingSales} />;
}
