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
import basketArtisanImage from "@assets/generated_images/Vietnamese_basket_weaving_artisan_1bb90a2f.png";
import riceTerraceImage from "@assets/generated_images/Vietnamese_rice_terraces_farmer_fb8b00e8.png";
import coffeeImage from "@assets/generated_images/Vietnamese_coffee_farmer_working_e7265474.png";

export default function Farmers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  // todo: remove mock functionality
  const allFarmers = [
    {
      id: 1,
      name: "Anh Tuấn",
      photo: honeyFarmerImage,
      location: "Đà Lạt, Lâm Đồng",
      specialty: "Mật ong rừng",
      productCount: 8,
      bio: "20 năm kinh nghiệm nuôi ong lấy mật từ hoa rừng tự nhiên, cam kết 100% nguyên chất không pha trộn",
    },
    {
      id: 2,
      name: "Chị Mai",
      photo: basketArtisanImage,
      location: "Hội An, Quảng Nam",
      specialty: "Thủ công mỹ nghệ",
      productCount: 12,
      bio: "Nghệ nhân làng nghề truyền thống, chuyên đan lát tre nứa theo kỹ thuật gia truyền 3 đời",
    },
    {
      id: 3,
      name: "Anh Minh",
      photo: riceTerraceImage,
      location: "Sa Pa, Lào Cai",
      specialty: "Gạo hữu cơ",
      productCount: 5,
      bio: "Canh tác ruộng bậc thang theo phương pháp truyền thống, không sử dụng hóa chất",
    },
    {
      id: 4,
      name: "Anh Hùng",
      photo: coffeeImage,
      location: "Buôn Ma Thuột, Đắk Lắk",
      specialty: "Cà phê Arabica",
      productCount: 15,
      bio: "Gia đình trồng cà phê từ năm 1975, chuyên về cà phê Arabica chất lượng cao",
    },
    {
      id: 5,
      name: "Chị Lan",
      photo: basketArtisanImage,
      location: "Phan Thiết, Bình Thuận",
      specialty: "Trái cây",
      productCount: 10,
      bio: "Vườn thanh long 5 hecta, áp dụng công nghệ VietGAP trong canh tác",
    },
    {
      id: 6,
      name: "Anh Dũng",
      photo: honeyFarmerImage,
      location: "Hà Giang",
      specialty: "Chè Shan Tuyết",
      productCount: 6,
      bio: "Chăm sóc vườn chè cổ thủ hàng trăm năm tuổi, sản xuất theo phương pháp hữu cơ",
    },
    {
      id: 7,
      name: "Chị Hoa",
      photo: riceTerraceImage,
      location: "Sóc Trăng",
      specialty: "Gạo ST25",
      productCount: 4,
      bio: "Nông dân trồng gạo ST25 đạt giải thưởng gạo ngon nhất thế giới",
    },
    {
      id: 8,
      name: "Anh Phúc",
      photo: coffeeImage,
      location: "Cà Mau",
      specialty: "Hải sản",
      productCount: 18,
      bio: "Nuôi tôm sinh thái và đánh bắt hải sản tươi sống, đảm bảo nguồn gốc rõ ràng",
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
              Những người nông dân, nghệ nhân tận tâm đằng sau mỗi sản phẩm đặc sản. 
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
                  <SelectItem value="all">Tất cả khu vực</SelectItem>
                  <SelectItem value="Đà Lạt">Đà Lạt</SelectItem>
                  <SelectItem value="Hội An">Hội An</SelectItem>
                  <SelectItem value="Sa Pa">Sa Pa</SelectItem>
                  <SelectItem value="Buôn Ma Thuột">Buôn Ma Thuột</SelectItem>
                  <SelectItem value="Phan Thiết">Phan Thiết</SelectItem>
                  <SelectItem value="Hà Giang">Hà Giang</SelectItem>
                  <SelectItem value="Sóc Trăng">Sóc Trăng</SelectItem>
                  <SelectItem value="Cà Mau">Cà Mau</SelectItem>
                </SelectContent>
              </Select>

              {/* Specialty Filter */}
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="w-full md:w-[200px]" data-testid="select-specialty">
                  <SelectValue placeholder="Chuyên môn" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả chuyên môn</SelectItem>
                  <SelectItem value="Mật ong rừng">Mật ong rừng</SelectItem>
                  <SelectItem value="Thủ công mỹ nghệ">Thủ công mỹ nghệ</SelectItem>
                  <SelectItem value="Gạo hữu cơ">Gạo hữu cơ</SelectItem>
                  <SelectItem value="Cà phê Arabica">Cà phê Arabica</SelectItem>
                  <SelectItem value="Trái cây">Trái cây</SelectItem>
                  <SelectItem value="Chè Shan Tuyết">Chè Shan Tuyết</SelectItem>
                  <SelectItem value="Gạo ST25">Gạo ST25</SelectItem>
                  <SelectItem value="Hải sản">Hải sản</SelectItem>
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
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Người làm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">63</div>
                <div className="text-sm text-muted-foreground">Tỉnh thành</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1,200+</div>
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
