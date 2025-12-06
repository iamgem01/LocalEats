import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { ArrowLeft, Share2, Heart, Users, Truck, Clock, MapPin, Calendar, QrCode, Star, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";


const mockProducts = [
    {
        id: 1,
        name: "Rau cải hữu cơ Đà Lạt",
        price: 45000,
        originalPrice: 55000,
        images: [
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500",
            "https://images.unsplash.com/photo-1592415479559-4bc64e7c1e1a?w=500",
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500"
        ],
        region: "Đà Lạt",
        farmer: "Anh Minh",
        farmerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        category: "Rau củ",
        rating: 4.8,
        reviewCount: 127,
        story: `Tôi là Minh, một nông dân trẻ ở Đà Lạt. Sau 5 năm làm việc tại thành phố, tôi quyết định trở về quê hương để tiếp nối nghề trồng rau của gia đình. Với phương châm "Thuận tự nhiên", tôi canh tác rau cải hoàn toàn hữu cơ, không sử dụng thuốc trừ sâu hay phân bón hóa học.

Mỗi sáng, tôi cùng các công nhân hái rau từ 5h khi sương mai còn đọng trên lá, đảm bảo độ tươi ngon nhất. Rau của tôi được trồng trên vùng đất đỏ bazan màu mỡ, tưới bằng nước suối tự nhiên từ núi Lang Biang.

Tôi mong muốn mang đến cho người tiêu dùng những bó rau không chỉ tươi ngon mà còn chứa đựng tình yêu với đất, với nghề. Mỗi sản phẩm đều là tâm huyết của cả gia đình tôi.`,

        productionProcess: [
            "Gieo hạt giống hữu cơ trên đất đỏ bazan",
            "Chăm sóc tự nhiên không hóa chất",
            "Tưới nước suối tự nhiên từ núi Lang Biang",
            "Thu hoạch thủ công vào sáng sớm",
            "Đóng gói và vận chuyển trong ngày"
        ],

        origin: "Đà Lạt, Lâm Đồng",
        productionDate: "10/01/2024",
        certification: "Hữu cơ VietGAP",

        groupBuy: {
            currentParticipants: 15,
            requiredParticipants: 20,
            discount: 15,
            endTime: "2024-01-15T23:59:59",
            deliveryDate: "18/01/2024"
        },

        specifications: {
            weight: "500g/bó",
            shelfLife: "5 ngày",
            storage: "Nhiệt độ 4-8°C",
            origin: "Đà Lạt, Lâm Đồng"
        }
    },
    {
        id: 2,
        name: "Thanh long ruột đỏ",
        price: 35000,
        images: [
            "https://images.unsplash.com/photo-1592415479559-4bc64e7c1e1a?w=500",
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500"
        ],
        region: "Bình Thuận",
        farmer: "Chị Lan",
        farmerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        category: "Trái cây",
        rating: 4.6,
        reviewCount: 89,
        // ... thêm các thuộc tính khác tương tự
    }

];

export default function ProductDetail() {
    const [match, params] = useRoute('/product/:id');
    const [, setLocation] = useLocation();
    const [product, setProduct] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [joinedGroupBuy, setJoinedGroupBuy] = useState(false);
    const [activeTab, setActiveTab] = useState('story');
    const [showQR, setShowQR] = useState(false);

    useEffect(() => {
        console.log('ProductDetail mounted, params:', params);
        if (params?.id) {
            console.log('Looking for product with id:', params.id);
            const productId = parseInt(params.id);
            const foundProduct = mockProducts.find(p => p.id === productId);
            console.log('Found product:', foundProduct);
            setProduct(foundProduct);
        }
    }, [params?.id]);

    const handleJoinGroupBuy = () => {
        setJoinedGroupBuy(true);
        // TODO: Gọi API để tham gia mua chung
        console.log('Tham gia mua chung sản phẩm:', params?.id);
    };

    const calculateProgress = () => {
        if (!product?.groupBuy) return 0;
        return (product.groupBuy.currentParticipants / product.groupBuy.requiredParticipants) * 100;
    };

    const getTimeRemaining = () => {
        if (!product?.groupBuy) return { days: 0, hours: 0 };
        const end = new Date(product.groupBuy.endTime).getTime();
        const now = new Date().getTime();
        const difference = end - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        return { days, hours };
    };

    if (!product) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Đang tải thông tin sản phẩm...</p>
                </div>
            </div>
        );
    }

    const { days, hours } = getTimeRemaining();
    const savings = product.originalPrice ? product.originalPrice - product.price : 0;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="bg-card/50 border-b backdrop-blur-sm sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <Button
                        variant="ghost"
                        onClick={() => setLocation('/products')}
                        className="flex items-center gap-2 text-foreground hover:text-primary"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Quay lại danh sách
                    </Button>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="h-full w-full object-cover transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4 flex space-x-2">
                                <Button variant="secondary" size="icon" className="bg-background/80 backdrop-blur-sm">
                                    <Heart className="w-4 h-4" />
                                </Button>
                                <Button variant="secondary" size="icon" className="bg-background/80 backdrop-blur-sm">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex space-x-2 overflow-x-auto pb-2">
                            {product.images.map((image: string, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
                                        selectedImage === index
                                            ? 'border-primary scale-105'
                                            : 'border-border hover:border-primary/50'
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Badge variant="secondary" className="bg-primary/10 text-primary">
                                    {product.category}
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    {product.rating} ({product.reviewCount} đánh giá)
                                </Badge>
                            </div>

                            <h1 className="text-3xl font-bold font-serif mb-2">{product.name}</h1>

                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={product.farmerAvatar}
                                    alt={product.farmer}
                                    className="w-8 h-8 rounded-full"
                                />
                                <div>
                                    <p className="text-sm font-medium">Sản xuất bởi</p>
                                    <p className="text-primary font-semibold">{product.farmer}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                <MapPin className="w-4 h-4" />
                                <span>{product.region}</span>
                                <span>•</span>
                                <Shield className="w-4 h-4" />
                                <span>Đảm bảo chất lượng</span>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">
                {product.price.toLocaleString('vi-VN')}đ
              </span>
                            {product.originalPrice && (
                                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString('vi-VN')}đ
                  </span>
                                    <Badge variant="destructive" className="ml-2">
                                        Tiết kiệm {savings.toLocaleString('vi-VN')}đ
                                    </Badge>
                                </>
                            )}
                        </div>

                        {/* QR Code Section */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <QrCode className="w-5 h-5 text-primary" />
                                    Truy xuất nguồn gốc
                                </h3>
                                <div className="flex items-center gap-6">
                                    <div
                                        className="bg-card p-4 rounded-lg border-2 border-primary/20 cursor-pointer hover:border-primary/40 transition-colors"
                                        onClick={() => setShowQR(!showQR)}
                                    >
                                        <div className="w-32 h-32 bg-white flex items-center justify-center border border-border rounded">
                                            {showQR ? (
                                                <div className="text-center text-xs text-muted-foreground p-2">
                                                    QR Code sẽ hiển thị tại đây
                                                    <br />
                                                    URL: {window.location.href}
                                                </div>
                                            ) : (
                                                <div className="text-center">
                                                    <QrCode className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                                    <span className="text-xs text-muted-foreground">Nhấn để xem QR</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Quét mã QR để xem thông tin chi tiết về nguồn gốc và quy trình sản xuất của sản phẩm
                                        </p>
                                        <Button variant="link" className="p-0 h-auto text-primary font-medium">
                                            Xem video quy trình sản xuất →
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Group Buy Section */}
                        {product.groupBuy && (
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Users className="w-5 h-5 text-primary" />
                                        <h3 className="text-lg font-semibold">Mua chung - Tiết kiệm {product.groupBuy.discount}%</h3>
                                    </div>

                                    <div className="bg-primary/10 rounded-lg p-4 mb-4 border border-primary/20">
                                        <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">
                        Đã có {product.groupBuy.currentParticipants}/{product.groupBuy.requiredParticipants} người tham gia
                      </span>
                                            <span className="text-primary font-semibold">
                        Còn {days} ngày {hours} giờ
                      </span>
                                        </div>

                                        <div className="w-full bg-muted rounded-full h-2 mb-4">
                                            <div
                                                className="bg-primary h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${calculateProgress()}%` }}
                                            ></div>
                                        </div>

                                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Truck className="w-4 h-4" />
                                                <span>Giao hàng: {product.groupBuy.deliveryDate}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>Tiết kiệm: {savings.toLocaleString('vi-VN')}đ</span>
                                            </div>
                                        </div>
                                    </div>

                                    {!joinedGroupBuy ? (
                                        <Button
                                            onClick={handleJoinGroupBuy}
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                                        >
                                            Tham gia mua chung - {product.price.toLocaleString('vi-VN')}đ/kg
                                        </Button>
                                    ) : (
                                        <div className="text-center py-4 bg-primary/10 text-primary rounded-lg border border-primary/20">
                                            <div className="font-semibold">✅ Đã tham gia mua chung thành công!</div>
                                            <p className="text-sm mt-1">Chúng tôi sẽ thông báo khi đủ số lượng người tham gia</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1">
                                Thêm vào giỏ hàng
                            </Button>
                            <Button className="flex-1 bg-secondary hover:bg-secondary/90">
                                Mua ngay
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs */}
                <div className="mt-12 max-w-6xl mx-auto">
                    <Card>
                        <CardContent className="p-0">
                            {/* Tab Navigation */}
                            <div className="border-b border-border">
                                <nav className="flex -mb-px">
                                    {['story', 'process', 'origin', 'specs'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                                                activeTab === tab
                                                    ? 'text-primary border-b-2 border-primary'
                                                    : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                        >
                                            {tab === 'story' && 'Câu chuyện'}
                                            {tab === 'process' && 'Quy trình sản xuất'}
                                            {tab === 'origin' && 'Nguồn gốc'}
                                            {tab === 'specs' && 'Thông số kỹ thuật'}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Tab Content */}
                            <div className="p-6">
                                {activeTab === 'story' && (
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold mb-6">Câu chuyện từ người sản xuất</h3>
                                        <div className="prose max-w-none text-foreground leading-relaxed">
                                            <p className="whitespace-pre-line text-lg">{product.story}</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'process' && (
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold mb-6">Quy trình sản xuất</h3>
                                        <div className="space-y-4">
                                            {product.productionProcess.map((step: string, index: number) => (
                                                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card border">
                                                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                        {index + 1}
                                                    </div>
                                                    <p className="text-foreground leading-relaxed pt-1">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'origin' && (
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold mb-6">Thông tin nguồn gốc</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                                                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Xuất xứ</p>
                                                        <p className="text-foreground">{product.origin}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                                                    <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Ngày sản xuất</p>
                                                        <p className="text-foreground">{product.productionDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                                                    <Leaf className="w-6 h-6 text-primary flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Chứng nhận</p>
                                                        <p className="text-foreground">{product.certification}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                                                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Cam kết chất lượng</p>
                                                        <p className="text-foreground">Đảm bảo 100% hài lòng</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'specs' && product.specifications && (
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold mb-6">Thông số kỹ thuật</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {Object.entries(product.specifications).map(([key, value]) => (
                                                <div key={key} className="flex justify-between items-center p-3 rounded-lg bg-card border">
                          <span className="font-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                                                    <span className="text-foreground">{value as string}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}