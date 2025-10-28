import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import images
import veggiesImage from "@assets/generated_images/Fresh_Vietnamese_market_vegetables_5b6cbbbf.png";
import dragonFruitImage from "@assets/generated_images/Dragon_fruit_farm_aerial_47ecbec9.png";
import coffeeImage from "@assets/generated_images/Vietnamese_coffee_farmer_working_e7265474.png";
import honeyFarmerImage from "@assets/generated_images/Vietnamese_honey_farmer_portrait_82a0dfd5.png";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showGroupBuyOnly, setShowGroupBuyOnly] = useState(false);
  const [showOrganicOnly, setShowOrganicOnly] = useState(false);

  // todo: remove mock functionality
  const allProducts = [
    {
      id: 1,
      name: "Rau cải hữu cơ Đà Lạt",
      price: 45000,
      image: veggiesImage,
      region: "Đà Lạt",
      farmer: "Anh Minh",
      groupBuyAvailable: true,
      organic: true,
      category: "Rau củ",
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
      category: "Trái cây",
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
      category: "Đồ uống",
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
      category: "Thực phẩm",
    },
    {
      id: 5,
      name: "Gạo ST25 Sóc Trăng",
      price: 65000,
      image: veggiesImage,
      region: "Sóc Trăng",
      farmer: "Chị Hoa",
      groupBuyAvailable: true,
      organic: true,
      category: "Ngũ cốc",
    },
    {
      id: 6,
      name: "Chè Shan Tuyết cổ thủ",
      price: 320000,
      image: coffeeImage,
      region: "Hà Giang",
      farmer: "Anh Dũng",
      groupBuyAvailable: false,
      organic: true,
      category: "Đồ uống",
    },
    {
      id: 7,
      name: "Măng khô Tây Bắc",
      price: 95000,
      image: veggiesImage,
      region: "Sơn La",
      farmer: "Chị Mai",
      groupBuyAvailable: true,
      organic: false,
      category: "Rau củ",
    },
    {
      id: 8,
      name: "Tôm khô Cà Mau",
      price: 180000,
      image: dragonFruitImage,
      region: "Cà Mau",
      farmer: "Anh Phúc",
      groupBuyAvailable: true,
      organic: false,
      category: "Hải sản",
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "all" || product.region === selectedRegion;
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesGroupBuy = !showGroupBuyOnly || product.groupBuyAvailable;
    const matchesOrganic = !showOrganicOnly || product.organic;

    return matchesSearch && matchesRegion && matchesCategory && matchesGroupBuy && matchesOrganic;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRegion("all");
    setSelectedCategory("all");
    setShowGroupBuyOnly(false);
    setShowOrganicOnly(false);
  };

  const activeFiltersCount = [
    selectedRegion !== "all",
    selectedCategory !== "all",
    showGroupBuyOnly,
    showOrganicOnly,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page Header */}
        <section className="bg-card/30 border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              Đặc sản Việt Nam
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Khám phá hàng trăm sản phẩm chất lượng từ khắp ba miền. 
              Mỗi sản phẩm đều có câu chuyện riêng về nguồn gốc và người làm.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-[73px] z-40 bg-background/95 backdrop-blur border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                  data-testid="input-product-search"
                />
              </div>

              {/* Region Filter */}
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full md:w-[200px]" data-testid="select-region">
                  <SelectValue placeholder="Vùng miền" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả vùng</SelectItem>
                  <SelectItem value="Đà Lạt">Đà Lạt</SelectItem>
                  <SelectItem value="Bình Thuận">Bình Thuận</SelectItem>
                  <SelectItem value="Tây Nguyên">Tây Nguyên</SelectItem>
                  <SelectItem value="Sóc Trăng">Sóc Trăng</SelectItem>
                  <SelectItem value="Hà Giang">Hà Giang</SelectItem>
                  <SelectItem value="Sơn La">Sơn La</SelectItem>
                  <SelectItem value="Cà Mau">Cà Mau</SelectItem>
                </SelectContent>
              </Select>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[200px]" data-testid="select-category">
                  <SelectValue placeholder="Danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả danh mục</SelectItem>
                  <SelectItem value="Rau củ">Rau củ</SelectItem>
                  <SelectItem value="Trái cây">Trái cây</SelectItem>
                  <SelectItem value="Đồ uống">Đồ uống</SelectItem>
                  <SelectItem value="Thực phẩm">Thực phẩm</SelectItem>
                  <SelectItem value="Ngũ cốc">Ngũ cốc</SelectItem>
                  <SelectItem value="Hải sản">Hải sản</SelectItem>
                </SelectContent>
              </Select>

              {/* Filter Button */}
              <Button variant="outline" className="gap-2 relative" data-testid="button-filters">
                <SlidersHorizontal className="h-4 w-4" />
                Bộ lọc
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-sm text-muted-foreground">Đang lọc:</span>
                {showGroupBuyOnly && (
                  <Badge variant="secondary" className="gap-1">
                    Mua chung
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setShowGroupBuyOnly(false)}
                    />
                  </Badge>
                )}
                {showOrganicOnly && (
                  <Badge variant="secondary" className="gap-1">
                    Hữu cơ
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setShowOrganicOnly(false)}
                    />
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  data-testid="button-clear-filters"
                >
                  Xóa tất cả
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Quick Filters */}
        <section className="py-6 border-b bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={showGroupBuyOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowGroupBuyOnly(!showGroupBuyOnly)}
                data-testid="button-filter-group-buy"
              >
                Mua chung
              </Button>
              <Button
                variant={showOrganicOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowOrganicOnly(!showOrganicOnly)}
                data-testid="button-filter-organic"
              >
                Hữu cơ
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Hiển thị <span className="font-semibold text-foreground">{filteredProducts.length}</span> sản phẩm
              </p>
              <Select defaultValue="popular">
                <SelectTrigger className="w-[180px]" data-testid="select-sort">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Phổ biến nhất</SelectItem>
                  <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                  <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="text-muted-foreground mb-4">
                  Thử điều chỉnh bộ lọc hoặc tìm kiếm từ khóa khác
                </p>
                <Button onClick={clearFilters} data-testid="button-clear-all-filters">
                  Xóa bộ lọc
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
