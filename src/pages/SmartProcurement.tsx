import ProductDetailTemplate from "../components/ProductDetailTemplate";
import { smartProcurement } from "../data/products";

export default function SmartProcurement() {
  return <ProductDetailTemplate config={smartProcurement} />;
}
