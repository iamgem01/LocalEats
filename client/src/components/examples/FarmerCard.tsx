import FarmerCard from '../FarmerCard';
import farmerImage from '@assets/generated_images/Vietnamese_honey_farmer_portrait_82a0dfd5.png';

export default function FarmerCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <FarmerCard
        id={1}
        name="Anh Tuấn"
        photo={farmerImage}
        location="Đà Lạt, Lâm Đồng"
        specialty="Mật ong rừng"
        productCount={8}
        bio="20 năm kinh nghiệm nuôi ong lấy mật từ hoa rừng tự nhiên"
      />
    </div>
  );
}
