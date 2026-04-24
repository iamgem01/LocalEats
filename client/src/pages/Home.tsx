import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import FarmerCard from "@/components/FarmerCard";
import RegionCard from "@/components/RegionCard";
import GroupBuyBanner from "@/components/GroupBuyBanner";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import images
import veggiesImage from "@assets/generated_images/Fresh_Vietnamese_market_vegetables_5b6cbbbf.png";
import MucImage from "@assets/generated_images/MucRimMe.png";
import CaBoImage from "@assets/generated_images/CaBo.png";
import BaTamImage from "@assets/generated_images/BaTam.png";
import MienBacImage from "@assets/generated_images/MienBac.png";
import ComImage from "@assets/generated_images/Com.png";
import ChaBoImage from "@assets/generated_images/ChaBo.png";
import basketArtisanImage from "@assets/generated_images/Vietnamese_basket_weaving_artisan_1bb90a2f.png";
import riceTerraceImage from "@assets/generated_images/img.png";
import MienTrung from "@assets/generated_images/img_1.png";
import MamNem from "@assets/generated_images/MamNem.png";
import BanhMe from "@assets/generated_images/BanhMeDN.png";
import NamO from "@assets/generated_images/TranNgocVinh.png";
import Sol from "@assets/generated_images/HuynhDucSol.png";
import Btrang from "@assets/generated_images/BanhtrangTL.png";



export default function Home() {
  // todo: remove mock functionality
  const featuredProducts = [
    {
      id: 1,
      name: "Chả bò Đà Nẵng loại 1",
      price: 280000,
      image: ChaBoImage,
      region: "Đà Nẵng",
      farmer: "Bà Tâm",
      groupBuyAvailable: true,
      organic: true,
    },
    {
      id: 2,
      name: "Mực Rim Me Dì Danh",
      price: 145000,
      image: MucImage,
      region: "Đà Nẵng",
      farmer: "Dì Danh",
      groupBuyAvailable: false,
      organic: true,
    },
    {
      id: 3,
      name: "Bánh khô mè lức trắng hộp 250g",
      price: 145000,
      image: BanhMe,
      region: "Đà Nẵng",
      farmer: "Cơ sở Bà Liễu Mẹ",
      groupBuyAvailable: false,
      organic: true,
    },
    {
      id: 4,
      name: "Mắm nêm Dì Cẩn",
      price: 45000,
      image: MamNem,
      region: "Đà Nẵng",
      farmer: "Dì Cẩn",
      groupBuyAvailable: true,
      organic: true,
    },

    {
        id: 5,
        name: "Bánh tráng Túy Loan",
        price: 170000,
        image: Btrang,
        region: "Đà Nẵng",
        farmer: "Làng nghề Túy Loan",
        groupBuyAvailable: false,
        organic: true,
    },
];

  const featuredFarmers = [
    {
      id: 1,
      name: "Bà Tâm",
      photo: BaTamImage,
      location: "Thuận Phước, Đà Nẵng",
      specialty: "Chả bò, nem, tré đặc biệt các loại",
      productCount: 8,
      bio: "Để giới thiệu đặc sản chả bò Đà Nẵng đến gần hơn với khách hàng, để mọi người đều có thể cảm nhận đúng chuẩn hương vị đặc trưng món ăn này",
    },
      {
          id: 2,
          name: "Cơ sở Bà Liễu Mẹ",
          photo: Sol,
          location: "Cẩm Lệ, Đà Nẵng",
          specialty: "Bánh khô mè truyền thống",
          productCount: 12,
          bio: "Làng nghề gia truyền hơn 70 năm — giữ lửa nghề bánh khô mè Đà Nẵng, nổi tiếng nhờ vị giòn tan, hương mè rang và đường mạch nha đặc trưng.",
      }
,
      {
          id: 2,
          name: "Cơ sở Nam Ô",
          photo: NamO,
          location: "Nam Ô, Đà Nẵng",
          specialty: "Nước mắm Nam Ô truyền thống",
          productCount: 12,
          bio: "Hơn 30 năm giữ nghề — sản xuất nước mắm thủ công, ủ cá cơm than theo phương pháp truyền thống, cam kết: không hóa chất, không chất bảo quản, không chất tạo màu, không chất tạo mùi. Được cấp nhãn hiệu tập thể bảo hộ chỉ dẫn địa lý Nam Ô.",
      },

  ];

    const regions = [
        {
            name: "Miền Bắc",
            image: ComImage,
            productCount: 200,
            description: "Đặc sản nổi bật: chè Thái Nguyên, cốm Hà Nội, thịt trâu gác bếp",
        },
        {
            name: "Miền Trung",
            image: MienTrung,
            productCount: 250,
            description: "Đặc sản đậm vị: nước mắm, mực khô, chả bò, mè xửng",
        },
        {
            name: "Miền Nam",
            image: MienBacImage,
            productCount: 300,
            description: "Đặc sản miền sông nước: trái cây sấy, bánh pía, khô cá lóc",
        },
    ];


    return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />

        {/* Featured Regions */}
        <section className="py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Khám phá theo vùng miền
              </h2>
              <p className="text-lg text-muted-foreground">
                Mỗi vùng đất mang một hương vị đặc trưng
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {regions.map((region, index) => (
                <RegionCard key={index} {...region} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2">
                  Sản phẩm nổi bật
                </h2>
                <p className="text-lg text-muted-foreground">
                  Những đặc sản được yêu thích nhất
                </p>
              </div>
              <Button variant="outline" className="gap-2" data-testid="button-view-all-products">
                Xem tất cả
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Group Buy Banner */}
            <GroupBuyBanner />
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Featured Farmers */}
        <section className="py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Gặp gỡ người làm
              </h2>
              <p className="text-lg text-muted-foreground">
                Những người đứng sau mỗi sản phẩm đặc sản
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredFarmers.map((farmer) => (
                <FarmerCard key={farmer.id} {...farmer} />
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-farmers">
                Xem tất cả người làm
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Khách hàng nói gì
              </h2>
              <p className="text-lg text-muted-foreground">
                Trải nghiệm thực tế từ cộng đồng LocalEats
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                  {
                      name: "Trung Minh (Sinh viên)",
                      location: "Đà Nẵng",
                      text: "Mỗi lần thèm chả Bò mà không biết chỗ mua uy tín, sợ mua bị chém giá.Ứng dụng này ra mắt thì quá hợp lý mà còn giá cả so với thị trường còn okela, không làm mình thất vọng.",
                  },
                  {
                      name: "Sarah (Du khách)",
                      location: "Singapore",
                      text: "I found LocalEats during my trip. It was wonderful to discover authentic specialties with clear stories from local artisans.",
                  },
                  {
                      name: "Anh Bình (Người dùng địa phương)",
                      location: "Đà Nẵng",
                      text: "Muốn gửi đặc sản cho người thân xa quê, đặt trên LocalEats cho chắc. Đúng hàng chuẩn, đáng tin cậy, truy xuất được nguồn gốc.",
                  },
                  {
                      name: "Cơ sở Mè Xửng Bà Liễu Mẹ",
                      location: "Đà Nẵng",
                      text: "Tham gia LocalEats giúp cơ sở giới thiệu mè xửng truyền thống đến nhiều khách hơn. Có thêm kênh bán ổn định, lại được hỗ trợ truyền thông.",
                  },

              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border hover-elevate transition-all"
                >
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Bắt đầu hành trình khám phá đặc sản
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Hàng trăm sản phẩm từ khắp Việt Nam đang chờ bạn. 
              Mỗi món đều có câu chuyện riêng.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                data-testid="button-cta-browse"
              >
                Duyệt sản phẩm
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 hover:bg-white/20 text-primary-foreground border-primary-foreground/30"
                data-testid="button-cta-learn-more"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
