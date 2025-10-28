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
import dragonFruitImage from "@assets/generated_images/Dragon_fruit_farm_aerial_47ecbec9.png";
import coffeeImage from "@assets/generated_images/Vietnamese_coffee_farmer_working_e7265474.png";
import honeyFarmerImage from "@assets/generated_images/Vietnamese_honey_farmer_portrait_82a0dfd5.png";
import basketArtisanImage from "@assets/generated_images/Vietnamese_basket_weaving_artisan_1bb90a2f.png";
import riceTerraceImage from "@assets/generated_images/Vietnamese_rice_terraces_farmer_fb8b00e8.png";

export default function Home() {
  // todo: remove mock functionality
  const featuredProducts = [
    {
      id: 1,
      name: "Rau cải hữu cơ Đà Lạt",
      price: 45000,
      image: veggiesImage,
      region: "Đà Lạt",
      farmer: "Anh Minh",
      groupBuyAvailable: true,
      organic: true,
    },
    {
      id: 2,
      name: "Thanh long ruột đỏ",
      price: 35000,
      image: dragonFruitImage,
      region: "Bình Thuận",
      farmer: "Chị Lan",
      groupBuyAvailable: false,
      organic: true,
    },
    {
      id: 3,
      name: "Cà phê Arabica Đà Lạt",
      price: 280000,
      image: coffeeImage,
      region: "Đà Lạt",
      farmer: "Anh Tuấn",
      groupBuyAvailable: true,
      organic: false,
    },
    {
      id: 4,
      name: "Mật ong rừng nguyên chất",
      price: 150000,
      image: honeyFarmerImage,
      region: "Tây Nguyên",
      farmer: "Anh Hùng",
      groupBuyAvailable: false,
      organic: true,
    },
  ];

  const featuredFarmers = [
    {
      id: 1,
      name: "Anh Tuấn",
      photo: honeyFarmerImage,
      location: "Đà Lạt, Lâm Đồng",
      specialty: "Mật ong rừng",
      productCount: 8,
      bio: "20 năm kinh nghiệm nuôi ong lấy mật từ hoa rừng tự nhiên",
    },
    {
      id: 2,
      name: "Chị Mai",
      photo: basketArtisanImage,
      location: "Hội An, Quảng Nam",
      specialty: "Thủ công mỹ nghệ",
      productCount: 12,
      bio: "Nghệ nhân làng nghề truyền thống, chuyên đan lát tre nứa",
    },
    {
      id: 3,
      name: "Anh Minh",
      photo: riceTerraceImage,
      location: "Sa Pa, Lào Cai",
      specialty: "Gạo hữu cơ",
      productCount: 5,
      bio: "Canh tác ruộng bậc thang theo phương pháp truyền thống",
    },
  ];

  const regions = [
    {
      name: "Miền Bắc",
      image: riceTerraceImage,
      productCount: 200,
      description: "Nổi tiếng với chè Thái Nguyên, gạo Sapa và các đặc sản vùng núi",
    },
    {
      name: "Miền Trung",
      image: coffeeImage,
      productCount: 250,
      description: "Cà phê Đà Lạt, rau củ cao nguyên và hải sản tươi ngon",
    },
    {
      name: "Miền Nam",
      image: dragonFruitImage,
      productCount: 300,
      description: "Trái cây nhiệt đới, gạo ST25 và đặc sản đồng bằng sông Cửu Long",
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
                  name: "Chị Hương",
                  location: "Hà Nội",
                  text: "Mua rau ở LocalEats yên tâm vì biết rõ nguồn gốc. Video người làm rất chi tiết, cảm giác như được đến tận vườn!",
                },
                {
                  name: "Anh Phong",
                  location: "TP.HCM",
                  text: "Tính năng mua chung rất hay, vừa tiết kiệm chi phí vừa được giao lưu với nhiều người cùng sở thích.",
                },
                {
                  name: "Chị Lan",
                  location: "Đà Nẵng",
                  text: "Đặc sản về tươi ngon, đúng như mô tả. Quan trọng là được hỗ trợ trực tiếp người nông dân địa phương!",
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
