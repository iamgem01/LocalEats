import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard.tsx";
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

export default function Products() {
    const [, setLocation] = useLocation();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRegion, setSelectedRegion] = useState<string>("all");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [showGroupBuyOnly, setShowGroupBuyOnly] = useState(false);
    const [showOrganicOnly, setShowOrganicOnly] = useState(false);

    // Mock data - sẽ thay bằng API call thực tế
    const allProducts = [
        {
            id: 1,
            name: "Chả bò Đà Nẵng loại 1",
            price: 280000,
            image: ChaBoImage,
            region: "Hải Châu", // Inference
            farmer: "Bà Tâm",
            groupBuyAvailable: true,
            organic: true,
            category: "Nem chả Đà Nẵng",
        },
        {
            id: 2,
            name: "Mực Rim Me Dì Danh",
            price: 145000,
            image: MucImage,
            region: "Sơn Trà", // Inference
            farmer: "Dì Danh",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 3,
            name: "Bánh khô mè lức trắng hộp 250g",
            price: 145000,
            image: BanhMe,
            region: "Cẩm Lệ", // Inference
            farmer: "Cơ sở Bà Liễu Mẹ",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản bánh kẹo",
        },
        {
            id: 4,
            name: "Mắm nêm Dì Cẩn",
            price: 45000,
            image: MamNem,
            region: "Hòa Vang", // Inference
            farmer: "Dì Cẩn",
            groupBuyAvailable: true,
            organic: true,
            category: "Đặc sản mắm, gia vị",
        },
        {
            id: 5,
            name: "Bánh tráng Túy Loan",
            price: 170000,
            image: Btrang,
            region: "Hòa Vang",
            farmer: "Làng nghề Túy Loan",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản bánh kẹo",
        },
        {
            id: 6,
            name: "Rong biển Mỹ Khê sấy giòn",
            price: 65000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Sơn Trà", // Inference
            farmer: "Hộ chị Liễu",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 7,
            name: "Cá khô tẩm ớt Hòa Khánh",
            price: 120000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Hòa Khánh",
            farmer: "Tổ hợp tác Hòa Khánh",
            groupBuyAvailable: true,
            organic: false,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 8,
            name: "Nước mắm Nam Ô đặc biệt",
            price: 95000,
            image: "https://dacsanlamqua.com/wp-content/uploads/2023/03/nuoc-mam-nam-o-dac-san-da-nang.jpg",
            region: "Liên Chiểu",
            farmer: "Làng nghề Nam Ô",
            groupBuyAvailable: true,
            organic: true,
            category: "Đặc sản mắm, gia vị",
        },
        {
            id: 9,
            name: "Cá thu tẩm sấy đặc sản Đà Nẵng",
            price: 55000,
            image: "https://dacsanlamqua.com/wp-content/uploads/2024/03/Ca-thu-tam-250gr.jpg",
            region: "Hương Trà", // Inference
            farmer: "Cơ sở Hương Trà",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 10,
            name: "Khô cá chỉ vàng Đà Nẵng",
            price: 130000,
            image: "https://dacsandanang365.com/wp-content/uploads/2017/09/ca-chi-vang-tam-san-gia-vi.png",
            region: "Sơn Trà", // Inference
            farmer: "Hộ ông Dũng",
            groupBuyAvailable: true,
            organic: false,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 11,
            name: "Bò khô sợi vị Đà Nẵng",
            price: 110000,
            image: "https://dacsanlamqua.com/wp-content/uploads/2015/10/Bo-kho-soi-da-nang-800x750.jpg",
            region: "Hải Châu", // Inference
            farmer: "Xưởng cô Hà",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 12,
            name: "Tré Đà Nẵng",
            price: 110000,
            image: "https://chabobatam.vn/wp-content/uploads/2023/11/tre-ba-tam-768x576.jpg",
            region: "Hải Châu",
            farmer: "Cơ sở bà Tâm",
            groupBuyAvailable: true,
            organic: false,
            category: "Nem chả Đà Nẵng",
        },
        {
            id: 13,
            name: "Bánh dừa nướng Đà Nẵng",
            price: 60000,
            image: "https://duonggiahotel.vn/wp-content/uploads/2023/09/banh-dua-nuong-da-nang-1.jpg",
            region: "Thanh Khê", // Inference
            farmer: "Cơ sở Bảy Hường",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản bánh kẹo",
        },
        {
            id: 14,
            name: "Chả cá Thu hấp",
            price: 175000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Ngũ Hành Sơn", // Inference
            farmer: "Lò cô Bé",
            groupBuyAvailable: true,
            organic: true,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 15,
            name: "Tôm rim cay Ngũ Hành Sơn",
            price: 125000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Ngũ Hành Sơn",
            farmer: "Hộ chú Thắng",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 16,
            name: "Bánh nổ Túy Loan",
            price: 50000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Hòa Vang",
            farmer: "Làng Túy Loan",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản bánh kẹo",
        },
        {
            id: 17,
            name: "Khô mực hấp cay",
            price: 190000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Sơn Trà", // Inference
            farmer: "Cơ sở Thu Nguyệt",
            groupBuyAvailable: true,
            organic: false,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 18,
            name: "Bánh đậu xanh khô Đà Nẵng",
            price: 45000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Hải Châu", // Inference
            farmer: "Cơ sở Ngọc Dung",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản bánh kẹo",
        },
        {
            id: 19,
            name: "Mít sấy giòn",
            price: 85000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Hòa Vang",
            farmer: "HTX Hòa Vang",
            groupBuyAvailable: true,
            organic: true,
            category: "Hoa, quả, hạt sấy",
        },
        {
            id: 20,
            name: "Trà sâm dứa Đà Nẵng",
            price: 65000,
            image: "https://duonggiahotel.vn/wp-content/uploads/2023/09/tra-sam-dua-da-nang-3.jpg",
            region: "Hải Châu", // Inference
            farmer: "Trà Tiên",
            groupBuyAvailable: false,
            organic: false,
            category: "Trà, cà phê đặc sản",
        },
        {
            id: 21,
            name: "Khô heo cháy tỏi",
            price: 95000,
            image: "https://dacsanlamqua.com/wp-content/uploads/2023/03/Kho-heo-chay-bo-toi-Da-Nang.jpg",
            region: "Thanh Khê",
            farmer: "Xưởng Anh Đạt",
            groupBuyAvailable: true,
            organic: false,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 22,
            name: "Bánh tổ Cẩm Lệ",
            price: 55000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Cẩm Lệ",
            farmer: "Cơ sở cô Lài",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản bánh kẹo",
        },
        {
            id: 23,
            name: "Nấm mèo khô Hòa Tiến",
            price: 35000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Hòa Tiến",
            farmer: "HTX Hòa Tiến",
            groupBuyAvailable: true,
            organic: true,
            category: "Đặc sản khô Đà Nẵng",
        },
        {
            id: 24,
            name: "Bột nghệ nguyên chất",
            price: 60000,
            image: "https://monngondanang.vn/wp-content/uploads/2024/02/rong-bien-kho-da-nang.jpg",
            region: "Hòa Vang",
            farmer: "Xưởng ông Tính",
            groupBuyAvailable: false,
            organic: true,
            category: "Đặc sản mắm, gia vị",
        },
        {
            id: 25,
            name: "Cá cơm rim tỏi ớt",
            price: 115000,
            image: "https://mamlangchai.s3.ap-southeast-1.amazonaws.com/2025/06/14050023/md_1749808896753Yg5k8rjxnV.jpg",
            region: "Sơn Trà", // Inference
            farmer: "Cơ sở Bé Hân",
            groupBuyAvailable: true,
            organic: false,
            category: "Đặc sản khô Đà Nẵng",
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

    // Hàm xử lý khi click vào sản phẩm để điều hướng đến trang chi tiết
    const handleProductClick = (productId: number) => {
        setLocation(`/product/${productId}`);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Page Header */}
                <section className="bg-card/30 border-b">
                    <div className="container mx-auto px-4 py-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                            Đặc sản Đà Nẵng
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Khám phá hàng trăm sản phẩm chất lượng từ khắp thành phố.
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

                            {/* Category Filter */}
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="w-full md:w-[200px]" data-testid="select-category">
                                    <SelectValue placeholder="Danh mục" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tất cả danh mục</SelectItem>
                                    <SelectItem value="Đặc sản khô Đà Nẵng">Đặc sản khô Đà Nẵng</SelectItem>
                                    <SelectItem value="Đặc sản bánh kẹo">Đặc sản bánh kẹo</SelectItem>
                                    <SelectItem value="Trà, cà phê đặc sản">Trà, cà phê đặc sản</SelectItem>
                                    <SelectItem value="Đặc sản mắm, gia vị">Đặc sản mắm, gia vị</SelectItem>
                                    <SelectItem value="Hoa, quả, hạt sấy">Hoa, quả, hạt sấy</SelectItem>
                                    <SelectItem value="Nem chả Đà Nẵng">Nem chả Đà Nẵng</SelectItem>
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
                                        Đã kiểm chứng
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
                                Đã kiểm chứng
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
                                    <ProductCard
                                        key={product.id}
                                        {...product}
                                        // Thêm onClick để xử lý điều hướng nếu cần
                                        // Hoặc ProductCard đã xử lý điều hướng nội bộ
                                    />
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