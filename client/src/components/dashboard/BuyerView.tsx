import React from 'react';
import {
    Search,
    CheckCircle,
    Camera,
    BookOpen
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export const BuyerMarketplace = () => {
    const [, setLocation] = useLocation();

    const handleBuyNow = () => {
        setLocation("/checkout");
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold">Chợ Nông Sản</h2>
                    <p className="text-muted-foreground">Khám phá đặc sản từ các vùng miền</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input type="text" placeholder="Tìm kiếm đặc sản..." className="pl-9 pr-4 py-2 border rounded-full bg-background w-64 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="group bg-card border rounded-xl overflow-hidden hover:shadow-md transition-all">
                        <div className="aspect-[4/3] bg-muted relative">
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                                <CheckCircle className="h-3 w-3 text-green-600" /> Đã kiểm chứng
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-gray-100">
                                Ảnh SP
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="text-xs text-primary font-medium mb-1">Đà Lạt • Anh Tuấn</div>
                            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Cà phê Arabica Cầu Đất</h3>
                            <div className="flex justify-between items-center mt-3">
                                <span className="font-semibold">280.000đ</span>
                                <Button size="sm" onClick={handleBuyNow}>Mua ngay</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const BuyerQRScanner = () => (
    // ... existing code ...
    <div className="max-w-md mx-auto text-center space-y-8 py-10">
        <div>
            <h2 className="text-2xl font-bold mb-2">Truy xuất nguồn gốc</h2>
            <p className="text-muted-foreground">Quét mã QR trên bao bì sản phẩm để xem hành trình từ nông trại.</p>
        </div>

        <div className="relative aspect-square bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/70 text-sm">Đang mở camera...</p>
            </div>
            <div className="absolute inset-0 border-[40px] border-black/50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-primary rounded-lg animate-pulse"></div>

            <div className="absolute bottom-6 left-0 right-0">
                <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-0">
                    <Camera className="mr-2 h-4 w-4" /> Chạm để chụp
                </Button>
            </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-left flex gap-3 items-start">
            <div className="mt-1"><BookOpen className="h-5 w-5 text-blue-600"/></div>
            <div>
                <h4 className="font-bold text-blue-900 text-sm">Tại sao nên quét?</h4>
                <p className="text-blue-700 text-xs mt-1">
                    Mỗi sản phẩm LocalEats đều có một câu chuyện riêng do chính người nông dân viết. Bạn sẽ biết ai đã trồng nó, vào lúc nào, và bằng phương pháp gì.
                </p>
            </div>
        </div>
    </div>
);