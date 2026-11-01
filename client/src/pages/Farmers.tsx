import { useLocation } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FarmerCard from "@/components/FarmerCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import images
import honeyFarmerImage from "@assets/generated_images/Vietnamese_honey_farmer_portrait_82a0dfd5.png";

import coffeeImage from "@assets/generated_images/Vietnamese_coffee_farmer_working_e7265474.png";

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
import NamO from "@assets/generated_images/TranNgocVinh.png";
import Sol from "@assets/generated_images/HuynhDucSol.png";

export default function Farmers() {
    const [, setLocation] = useLocation();

    const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");


    // todo: remove mock functionality
    const allFarmers = [
        {
            id: 1,
            name: "Bà Tâm",
            photo: BaTamImage,
            location: "Thuận Phước, Hải Châu, Đà Nẵng",
            specialty: "Chả bò, nem, tré",
            productCount: 8,
            bio: "Nhiều năm làm nghề chế biến đặc sản Đà Nẵng — nổi tiếng với chả bò loại 1, tré và nem đặc sản.",
        },

        {
            id: 2,
            name: "Cơ sở Bà Liễu",
            photo: Sol,
            location: "Cẩm Lệ, Đà Nẵng",
            specialty: "Bánh khô mè",
            productCount: 12,
            bio: "Làng nghề bánh khô mè hơn 70 năm, giữ lửa hương vị truyền thống với mè rang và đường mạch nha.",
        },

        {
            id: 3,
            name: "Dì Danh",
            photo: basketArtisanImage,
            location: "Đà Nẵng",
            specialty: "Mực rim me",
            productCount: 6,
            bio: "Chế biến các món hải sản khô đặc trưng miền Trung, nổi bật với mực rim me chuẩn vị đường, tỏi, ớt.",
        },

        {
            id: 4,
            name: "Dì Cẩn",
            photo: riceTerraceImage,
            location: "Đà Nẵng",
            specialty: "Mắm nêm",
            productCount: 4,
            bio: "Làm mắm nêm theo phương pháp truyền thống — hương vị đặc trưng dùng chế biến nhiều món ngon Đà Nẵng.",
        },

        {
            id: 5,
            name: "Làng nghề Túy Loan",
            photo: basketArtisanImage,
            location: "Hòa Vang, Đà Nẵng",
            specialty: "Bánh tráng Túy Loan",
            productCount: 10,
            bio: "Làng nghề hơn 500 năm tuổi, nổi tiếng với bánh tráng dày, thơm, nướng giòn đặc trưng.",
        },

        {
            id: 6,
            name: "Cơ sở Nam Ô",
            photo: NamO,
            location: "Nam Ô, Liên Chiểu, Đà Nẵng",
            specialty: "Nước mắm Nam Ô",
            productCount: 12,
            bio: "30 năm làm nước mắm cá cơm than ủ chượp truyền thống — được cấp nhãn hiệu tập thể và bảo hộ chỉ dẫn địa lý Nam Ô.",
        },

        {
            id: 7,
            name: "Hộ làm khô cá một nắng",
            photo: honeyFarmerImage,
            location: "Sơn Trà, Đà Nẵng",
            specialty: "Hải sản khô",
            productCount: 7,
            bio: "Chuyên làm cá một nắng, mực một nắng từ nguồn hải sản địa phương tươi mới mỗi ngày.",
        },

        {
            id: 8,
            name: "Cơ sở Bánh Đậu Xanh Cẩm Lệ",
            photo: coffeeImage,
            location: "Cẩm Lệ, Đà Nẵng",
            specialty: "Bánh đậu xanh khô",
            productCount: 5,
            bio: "Sản xuất bánh đậu xanh truyền thống — vị ngọt thanh, thơm bùi, phù hợp làm quà biếu.",
        },
    ];


    const filteredFarmers = allFarmers.filter((farmer) => {
    const matchesSearch =
      farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "all" || farmer.location.includes(selectedRegion);
    const matchesSpecialty = selectedSpecialty === "all" || farmer.specialty === selectedSpecialty;

    return matchesSearch && matchesRegion && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page Header */}
        <section className="bg-card/30 border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              Gặp gỡ người làm
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Những hộ sản xuất, nghệ nhân tận tâm đằng sau mỗi sản phẩm đặc sản.
              Mỗi người đều có câu chuyện riêng về đam mê và nghề nghiệp.
            </p>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="sticky top-[73px] z-40 bg-background/95 backdrop-blur border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm theo tên hoặc chuyên môn..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                  data-testid="input-farmer-search"
                />
              </div>

                {/* Region Filter */}
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="w-full md:w-[200px]" data-testid="select-region">
                        <SelectValue placeholder="Khu vực" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tất cả</SelectItem>
                        <SelectItem value="Hòa Vang">Hòa Vang</SelectItem>
                        <SelectItem value="Liên Chiểu">Liên Chiểu</SelectItem>
                        <SelectItem value="Hải Châu">Hải Châu</SelectItem>
                        <SelectItem value="Sơn Trà">Sơn Trà</SelectItem>
                        <SelectItem value="Thanh Khê">Thanh Khê</SelectItem>
                        <SelectItem value="Cẩm Lệ">Cẩm Lệ</SelectItem>
                        <SelectItem value="Ngũ Hành Sơn">Ngũ Hành Sơn</SelectItem>
                        <SelectItem value="Hòa Cường">Hòa Cường</SelectItem>
                        <SelectItem value="Hòa Khánh">Hòa Khánh</SelectItem>
                        <SelectItem value="Hải Vân">Hải Vân</SelectItem>
                        <SelectItem value="Hòa Xuân">Hòa Xuân</SelectItem>
                        <SelectItem value="An Khê">An Khê</SelectItem>
                        <SelectItem value="An Hải">An Hải</SelectItem>

                        {/* Ngoài Đà Nẵng */}
                        <SelectItem value="Tam Kỳ">Tam Kỳ</SelectItem>
                        <SelectItem value="Bàn Thạch">Bàn Thạch</SelectItem>
                        <SelectItem value="Hương Trà">Hương Trà</SelectItem>
                        <SelectItem value="Điện Bàn">Điện Bàn</SelectItem>
                        <SelectItem value="An Thắng">An Thắng</SelectItem>
                        <SelectItem value="Hội An">Hội An</SelectItem>

                        {/* Các xã */}
                        <SelectItem value="Hòa Tiến">Hòa Tiến</SelectItem>
                        <SelectItem value="Bà Nà">Bà Nà</SelectItem>

                        {/* Đặc khu */}
                        <SelectItem value="Hoàng Sa">Hoàng Sa</SelectItem>

                    </SelectContent>
                </Select>

                {/* Specialty Filter */}
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger className="w-full md:w-[200px]" data-testid="select-specialty">
                        <SelectValue placeholder="Chuyên môn" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tất cả chuyên môn</SelectItem>
                        <SelectItem value="Chả bò, nem, tré">Chả bò, nem, tré</SelectItem>
                        <SelectItem value="Bánh khô mè">Bánh khô mè</SelectItem>
                        <SelectItem value="Mực rim me">Mực rim me</SelectItem>
                        <SelectItem value="Mắm nêm">Mắm nêm</SelectItem>
                        <SelectItem value="Bánh tráng Túy Loan">Bánh tráng Túy Loan</SelectItem>
                        <SelectItem value="Nước mắm Nam Ô">Nước mắm Nam Ô</SelectItem>
                        <SelectItem value="Hải sản khô">Hải sản khô</SelectItem>
                        <SelectItem value="Bánh đậu xanh khô">Bánh đậu xanh khô</SelectItem>
                    </SelectContent>
                </Select>

            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-card/30 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Hộ sản xuất</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">23</div>
                <div className="text-sm text-muted-foreground">Phường</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Sản phẩm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Hài lòng</div>
              </div>
            </div>
          </div>
        </section>

        {/* Farmers Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Hiển thị <span className="font-semibold text-foreground">{filteredFarmers.length}</span> người làm
              </p>
              <Select defaultValue="name">
                <SelectTrigger className="w-[180px]" data-testid="select-sort">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Tên A-Z</SelectItem>
                  <SelectItem value="products">Nhiều sản phẩm nhất</SelectItem>
                  <SelectItem value="newest">Mới tham gia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredFarmers.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">
                  Không tìm thấy người làm
                </h3>
                <p className="text-muted-foreground mb-4">
                  Thử điều chỉnh bộ lọc hoặc tìm kiếm từ khóa khác
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedRegion("all");
                    setSelectedSpecialty("all");
                  }}
                  data-testid="button-clear-filters"
                >
                  Xóa bộ lọc
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredFarmers.map((farmer) => (
                  <FarmerCard key={farmer.id} {...farmer} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Bạn là người làm?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Tham gia LocalEats để kết nối sản phẩm của bạn với hàng ngàn khách hàng trên toàn quốc.
            </p>
              <Button
                  size="lg"
                  variant="secondary"
                  data-testid="button-join-as-farmer"
                  onClick={() => setLocation("/signup-seller")}
              >
                  Đăng ký làm người bán
              </Button>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
