import ProductCard from '../ProductCard';
import veggiesImage from '@assets/generated_images/Fresh_Vietnamese_market_vegetables_5b6cbbbf.png';

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        id={1}
        name="Rau cải hữu cơ Đà Lạt"
        price={45000}
        image={veggiesImage}
        region="Đà Lạt"
        farmer="Anh Minh"
        groupBuyAvailable={true}
        organic={true}
      />
    </div>
  );
}
