import RegionCard from '../RegionCard';
import regionImage from '@assets/generated_images/Vietnamese_coffee_farmer_working_e7265474.png';

export default function RegionCardExample() {
  return (
    <div className="p-8 max-w-md">
      <RegionCard
        name="Tây Nguyên"
        image={regionImage}
        productCount={150}
        description="Nổi tiếng với cà phê Arabica, hồ tiêu và các loại rau củ cao nguyên"
      />
    </div>
  );
}
