import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { ArrowLeft, Share2, PlayCircle, X, Heart, Users, Truck, Clock, MapPin, Calendar, QrCode, Star, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Intro from "@client/public/IntroTL.mp4";



const mockProducts = [
    {
        id: 1,
        name: "Chả bò Đà Nẵng loại 1",
        price: 250000,
        originalPrice: 280000,
        images: [
            "https://www.cotrang.org/public/images/tin_dang/6/138_cha-bo-da-nang-bk-1.jpg",
            "https://baocamau.vn/image/ckeditor/2025/20250314/images/QC-1.jpg",
            "https://dacsanlamqua.com/wp-content/uploads/2017/05/cha-bo-da-nang-chat-luong.jpg"
        ],
        region: "Đà Nẵng",
        farmer: "Bà Tâm",
        farmerAvatar: "https://chabobatam.vn/wp-content/uploads/2025/08/ba-tam.jpg",
        category: "Đặc sản khô",
        rating: 4.8,
        reviewCount: 127,
        videoUrl: "https://www.youtube.com/watch?v=KyDRIJJ-wdo",

        story: `Chả Bò Bà Tâm – Hương vị Đà Nẵng chuẩn truyền thống

Bà Nguyễn Thị Thanh Tâm, quê Ninh Bình, vào Đà Nẵng lập nghiệp và bén duyên với nghề làm chả bò. Từ những ngày đầu phụ việc tại một cơ sở nhỏ, bà kiên trì học nghề rồi tự xây dựng thương hiệu “Chả Bò Bà Tâm” từ năm 2005.

Gần 20 năm qua, cơ sở của bà phát triển bền vững, đưa chả bò của mình xuất hiện rộng rãi tại siêu thị, sự kiện và được người tiêu dùng trên toàn quốc tin dùng.

Điều làm nên uy tín của thương hiệu là sự kỹ lưỡng trong từng công đoạn: chọn thịt nạc đùi tươi, không hàn the, không pha bột, không chất cấm. Chả được hấp theo phương pháp truyền thống để giữ độ dai – giòn – đậm đà mà không mất màu hay hương vị.

Hiện cơ sở sản xuất hơn 300 kg mỗi tháng cùng nhiều sản phẩm đặc sản khác như chả bò đặc biệt, chả bò ớt xiêm, tré, chả cá, mực một nắng… Mục tiêu của bà Tâm là đưa thương hiệu lan rộng khắp cả nước và vươn ra quốc tế.

Liên hệ đặt hàng
Họ tên: Nguyễn Thị Thanh Tâm
SĐT: 0977 939 509
Email: chabobatamdanang@gmail.com

Facebook: Thanh Tâm – (link cá nhân)`,

        productionProcess: [
            "Tiếp nhận thịt bò tươi từ lò mổ uy tín",
            "Sơ chế công nghiệp: lọc gân mỡ và cắt khối bằng máy",
            "Ướp gia vị bằng máy trộn chân không",
            "Ủ lạnh 0–4°C để gia vị thấm sâu",
            "Xay – quết mộc bằng máy cutter giữ nhiệt dưới 12°C",
            "Định hình và nhồi chả bằng máy đùn",
            "Hấp công nghiệp 85–95°C",
            "Làm nguội nhanh bằng nước lạnh hoặc gió lạnh"
        ],


        origin: "Đà Nẵng",
        productionDate: "08/12/2025",
        certification: "Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm (ATTP)",

        groupBuy: {
            currentParticipants: 15,
            requiredParticipants: 20,
            discount: 15,
            endTime: "2024-01-15T23:59:59",
            deliveryDate: "10/12/2025"
        },

        specifications: {
            weight: "1kg/cây",
            shelfLife: "1 tháng",
            storage: "Bảo quản trong ngăn mát tủ lạnh khoảng 1 tuần. Nếu muốn bảo quản lâu hơn thì bỏ ngăn đông tủ lạnh, khi nào ăn thì lấy ra rả đông, nấu lại rồi sử dụng",
            origin: "Đà Nẵng"
        }
    },
    {
        id: 2,
        name: "Mực rim me Dì Danh",
        price: 145000,
        originalPrice: 165000,
        images: [
            "https://dacsanlamqua.com/wp-content/uploads/2021/08/m%C6%B0c-rim-me-da-nang.jpg",
            "https://dacsanlamqua.com/wp-content/uploads/2017/02/Muc-rim-me-da-nang-11.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_o7QdUBTPTE44swYxh26f6tJUqCM2-NGiQ&s"
        ],
        region: "Đà Nẵng",
        farmer: "Dì Danh",
        farmerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
        category: "Đặc sản khô",
        rating: 4.7,
        reviewCount: 96,
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

        story: `Mực Rim Me Dì Danh – Hương vị ngọt cay chuẩn Đà Nẵng

Cơ sở Dì Danh nổi tiếng với các món hải sản rim me, trong đó mực rim là sản phẩm bán chạy nhất hơn 15 năm qua. Dì Danh bắt đầu nghề từ một gian bếp nhỏ trong chợ Hàn, nơi dì tự tay chọn từng mẻ mực tươi, rim cùng me chín, đường vàng và ớt tươi – tạo nên hương vị đặc trưng: ngọt, cay, chua hài hòa.

Điều làm nên sự khác biệt của mực rim Dì Danh là quy trình thủ công tỉ mỉ: mực được lựa từ loại tươi, cắt đều, rim nhỏ lửa nhiều giờ để thấm vị nhưng vẫn giữ độ dai tự nhiên, hoàn toàn không dùng phẩm màu, không chất bảo quản.

Sản phẩm được khách du lịch và người dân địa phương tin dùng, thường xuyên xuất hiện trong các combo quà tặng miền Trung.

Liên hệ đặt hàng:
Tên cơ sở: Dì Danh – Hải sản rim Đà Nẵng
SĐT: 0905 123 456
Địa chỉ: Chợ Hàn, Đà Nẵng
Facebook: Hải sản Dì Danh – (link)`,

        productionProcess: [
            "Chọn mực tươi loại nhỏ từ các tàu cá địa phương",
            "Sơ chế, rửa sạch bằng nước muối loãng",
            "Cắt miếng đều, để ráo hoàn toàn",
            "Rim me – đường – tỏi – ớt theo công thức gia truyền",
            "Sên nhỏ lửa 2–3 giờ để thấm vị",
            "Đóng lọ, hút chân không, dán nhãn và đóng gói"
        ],

        origin: "Đà Nẵng",
        productionDate: "08/12/2025",
        certification: "Giấy chứng nhận VSATTP — cơ sở chế biến hải sản khô Dì Danh",

        groupBuy: {
            currentParticipants: 10,
            requiredParticipants: 20,
            discount: 10,
            endTime: "2024-01-12T23:59:59",
            deliveryDate: "11/12/2025"
        },

        specifications: {
            weight: "200g/hũ",
            shelfLife: "3–6 tháng",
            storage: "Để nơi khô mát, tránh ánh nắng. Sau khi mở nắp nên bảo quản trong ngăn mát và dùng trong 7 ngày.",
            origin: "Đà Nẵng"
        }
    },
    {
        id: 3,
        name: "Bánh khô mè Bà Liễu – Hộp 250g",
        price: 145000,
        originalPrice: 165000,
        images: [
            "https://dacsanlamqua.com/wp-content/uploads/2021/05/banh-kho-me-ba-lieu-da-nang-mua-o-dau.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgsAa7Jl97DPWxqKZY6u_Ra3F4tWCJPiAMw&s",
            "data:image/jpeg;base64,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"
        ],
        region: "Đà Nẵng",
        farmer: "Cơ sở Bà Liễu",
        farmerAvatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150",
        category: "Đặc sản khô",
        rating: 4.9,
        reviewCount: 211,
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

        story: `Bánh khô mè Bà Liễu – Tinh hoa 70 năm của làng nghề Đà Nẵng

Cơ sở Bà Liễu là một trong những thương hiệu lâu đời nhất của làng nghề bánh khô mè Cẩm Lệ. Hơn 70 năm qua, nghề được truyền từ đời này sang đời khác, vẫn giữ trọn hương vị truyền thống: giòn – thơm – ngọt nhẹ, chuẩn đặc sản Đà Nẵng.

Bánh nổi tiếng nhờ công thức gia truyền: mè rang vàng, đường mạch nha nấu chuẩn độ sệt, bột gạo xay mịn và nướng nhiều lần để tạo độ giòn tự nhiên. Sản phẩm không chất bảo quản, không phẩm màu, không phụ gia tạo giòn.

Ngày nay, thương hiệu được người dân địa phương tin dùng, đồng thời là món quà được du khách lựa chọn nhiều nhất khi đến Đà Nẵng.

Liên hệ đặt hàng:
Cơ sở Bà Liễu
SĐT: 0905 888 777
Địa chỉ: Cẩm Lệ, Đà Nẵng
Website: BanhKhoMeLienMe.vn (link placeholder)`,

        productionProcess: [
            "Chọn mè trắng loại 1, sàng lọc và rang vàng",
            "Nấu mạch nha truyền thống đến độ kéo sợi",
            "Nhào bột gạo xay mịn",
            "Tạo hình bánh và sấy giòn nhiều lần",
            "Phủ mè rang đều lên từng mặt bánh",
            "Đóng gói hút chân không và dán nhãn"
        ],

        origin: "Đà Nẵng",
        productionDate: "08/12/2025",
        certification: "Giấy chứng nhận OCOP 4 sao – Bánh khô mè Cẩm Lệ",

        groupBuy: {
            currentParticipants: 12,
            requiredParticipants: 25,
            discount: 12,
            endTime: "2024-01-20T23:59:59",
            deliveryDate: "12/12/2025"
        },

        specifications: {
            weight: "250g/hộp",
            shelfLife: "3 tháng",
            storage: "Để nơi khô ráo, tránh ánh nắng. Đậy kín sau khi mở bao bì.",
            origin: "Đà Nẵng"
        }
    },
    {
        id: 4,
        name: "Mắm nêm Dì Cẩn – Hũ 250ml",
        price: 45000,
        originalPrice: 52000,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pDcKwO_k8-1IyHet19QiTgKimVpH5z9lnw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNV-wjixtnXK30ef7JeDOeLtiSt4lW2rPAg&s",
            "data:image/jpeg;base64,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"
        ],
        region: "Đà Nẵng",
        farmer: "Dì Cẩn",
        farmerAvatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150",
        category: "Nước mắm – mắm đặc sản",
        rating: 4.7,
        reviewCount: 156,
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

        story: `Mắm nêm Dì Cẩn – Hương vị quê nhà giữ trọn hơn 30 năm

Dì Cẩn sinh ra trong gia đình có truyền thống làm mắm cá cơm lâu đời tại Đà Nẵng. Gần 30 năm đứng bếp, dì vẫn giữ phương pháp ủ mắm thủ công: dùng cá cơm than tươi, muối Sa Huỳnh hạt to và ủ kín trong chum sành.

Mắm được ủ từ 9–12 tháng, không chất bảo quản, không chất tạo màu. Nhờ vậy vị mắm đậm, thơm rõ mùi cá cơm chín lên men tự nhiên, phù hợp để pha nước chấm bún thịt nướng, cuốn bánh tráng hay làm mắm nêm nguyên chất.

Thương hiệu Mắm nêm Dì Cẩn được người Đà Nẵng sử dụng rộng rãi, đồng thời là món quà được nhiều du khách lựa chọn khi muốn mang chút “hương biển miền Trung” về nhà.

Liên hệ đặt hàng:
Cơ sở Dì Cẩn
SĐT: 0905 222 333
Địa chỉ: Thanh Khê, Đà Nẵng`,

        productionProcess: [
            "Chọn cá cơm than tươi từ vùng biển Quảng Nam – Đà Nẵng",
            "Rửa sạch và để ráo theo phương pháp truyền thống",
            "Trộn muối hạt to và ủ vào chum sành",
            "Ủ kín 9–12 tháng để lên men tự nhiên",
            "Xay – lọc – nêm gia vị tùy loại mắm",
            "Đóng hũ thủy tinh hoặc nhựa thực phẩm",
            "Dán nhãn và kiểm tra chất lượng"
        ],

        origin: "Đà Nẵng",
        productionDate: "08/12/2025",
        certification: "Chứng nhận cơ sở đủ điều kiện ATTP",

        groupBuy: {
            currentParticipants: 20,
            requiredParticipants: 30,
            discount: 10,
            endTime: "2024-01-18T23:59:59",
            deliveryDate: "11/12/2025"
        },

        specifications: {
            weight: "250ml/hũ",
            shelfLife: "6 tháng",
            storage: "Đậy kín nắp, để nơi thoáng mát. Tránh ánh nắng trực tiếp.",
            origin: "Đà Nẵng"
        }
    },
    {
        id: 5,
        name: "Bánh tráng Túy Loan – Gói 10 cái",
        price: 170000,
        originalPrice: 190000,
        images: [
            "data:image/jpeg;base64,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",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0prABCXDuAnLbkx48MeYJuxrrochKEM4UxA&s",
            "https://thuexehana.com/wp-content/uploads/2024/07/banh-trang-tuy-loan.jpg"
        ],
        region: "Hòa Vang, Đà Nẵng",
        farmer: "Làng nghề Túy Loan",
        farmerAvatar: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=150",
        category: "Đặc sản khô",
        rating: 4.9,
        reviewCount: 178,
        videoUrl: "https://drive.google.com/file/d/1ctjhhPivV4mC72a1fBmzGbnWAJpxQAkD/view?usp=sharing",

        story: `Bánh tráng Túy Loan – Tự hào làng nghề hơn 500 năm tuổi

Làng Túy Loan thuộc huyện Hòa Vang là một trong những làng nghề truyền thống lâu đời nhất tại miền Trung. Bánh tráng nơi đây nổi tiếng nhờ công thức cổ truyền: gạo quê xay mịn, nước giếng cổ, mè đen và bí quyết tráng – phơi – nướng chuẩn mực.

Bánh được phơi trên giàn tre tự nhiên, sau đó nướng thủ công để đạt độ giòn đặc trưng. Hương tanh nhẹ của mè, vị bùi của gạo và độ giòn rụm là ưu điểm khiến bánh tráng Túy Loan được ưa chuộng trên khắp cả nước.

Làng nghề hiện được công nhận OCOP và có nhiều hộ gia đình sản xuất theo tiêu chuẩn ATTP, giúp sản phẩm giữ đúng tinh hoa qua nhiều thế hệ.

Liên hệ đặt hàng:
Làng nghề Túy Loan – Hòa Vang, Đà Nẵng
SĐT: 0905 113 577`,

        productionProcess: [
            "Chọn gạo lúa vụ mới từ vùng Quảng Nam – Đà Nẵng",
            "Xay bột gạo và hòa cùng nước giếng cổ",
            "Tráng bánh thủ công trên khuôn",
            "Rắc mè đen hoặc mè trắng tùy loại",
            "Phơi bánh trên giàn tre dưới nắng tự nhiên",
            "Nướng bánh bằng lò than hoặc bếp điện",
            "Đóng gói bảo quản và dán nhãn"
        ],

        origin: "Đà Nẵng",
        productionDate: "08/12/2025",
        certification: "OCOP 4 sao – Làng nghề Túy Loan",

        groupBuy: {
            currentParticipants: 18,
            requiredParticipants: 25,
            discount: 12,
            endTime: "2024-01-22T23:59:59",
            deliveryDate: "12/12/2025"
        },

        specifications: {
            weight: "10 bánh/gói",
            shelfLife: "4 tháng",
            storage: "Để nơi khô ráo, tránh ẩm, không để gần nguồn nhiệt.",
            origin: "Đà Nẵng"
        }
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
    const [showVideoModal, setShowVideoModal] = useState(false);

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
    // Helper render video: Sử dụng thẻ <video> chuẩn của HTML5 cho file tải lên
    const renderVideo = (url: string) => {
        return (
            <div className="relative w-full h-full bg-black rounded-lg overflow-hidden group">
                <video
                    controls
                    className="w-full h-full object-contain"
                    poster={product.images[0]}
                >
                    <source src={url} type="video/mp4" />
                    <source src={url} type="video/webm" />
                    Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
            </div>
        );
    };
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
            {/* VIDEO POPUP MODAL */}
            {showVideoModal && product.videoUrl && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowVideoModal(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Video Player in Popup */}
                        <div className="aspect-video">
                            {renderVideo(product.videoUrl)}
                        </div>
                    </div>
                </div>
            )}
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

                        {/* --- CARD TRUY XUẤT NGUỒN GỐC & VIDEO BUTTON --- */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <QrCode className="w-5 h-5 text-primary" /> Truy xuất nguồn gốc
                                </h3>
                                <div className="flex items-center gap-6">
                                    <div className="bg-card p-4 rounded-lg border-2 border-primary/20 cursor-pointer hover:border-primary/40" onClick={() => setShowQR(!showQR)}>
                                        <div className="w-24 h-24 bg-white flex items-center justify-center border rounded">
                                            {showQR ? <QrCode className="w-20 h-20 text-black" /> : <div className="text-center"><QrCode className="w-8 h-8 mx-auto mb-1 text-muted-foreground"/><span className="text-[10px]">Hiện mã</span></div>}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-muted-foreground mb-3">Quét mã để xem nhật ký canh tác.</p>

                                        {/* NÚT BẤM MỞ POPUP VIDEO */}
                                        <Button
                                            variant="link"
                                            className="p-0 h-auto text-primary font-medium flex items-center gap-2 hover:underline"
                                            onClick={() => setShowVideoModal(true)}
                                        >
                                            <PlayCircle className="w-4 h-4" />
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
                                            <div className="font-semibold"> Đã tham gia mua chung thành công!</div>
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