import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import {
    SellerDashboard,
    SellerProductManager,
    SellerStoryBuilder,
    SellerOrderManager
} from '@/components/dashboard/SellerView.tsx';
import {
    BuyerMarketplace,
    BuyerQRScanner
} from '@/components/dashboard/BuyerView.tsx';
import { useLocation } from "wouter";
import {
    MessageCircle,
    X,
    Send,
    Package,
    Clock,
    ChevronRight,
    Truck,
    CheckCircle
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const MOCK_USER_BUYER = { name: "Nguyễn Văn A", role: "buyer", avatar: "A" };
const MOCK_USER_SELLER = { name: "Hộ sản xuất B", role: "seller", avatar: "B" };

// --- COMPONENT: LỊCH SỬ ĐƠN HÀNG CHO NGƯỜI MUA ---
const BuyerOrderHistory = () => {
    const orders = [
        {
            id: "LE8829",
            date: "06/12/2025",
            total: "200.000đ",
            status: "shipping",
            shop: "Bà Tâm - Đà Nẵng",
            items: [
                { name: "Chả bò", quantity: 2, image: "🥩" },
                { name: "Nem đặc sản", quantity: 1, image: "🌿" }
            ]
        },
        {
            id: "LE8801",
            date: "01/12/2025",
            total: "120.000đ",
            status: "completed",
            shop: "Cơ sở Bà Liễu",
            items: [
                { name: "Bánh khô mè", quantity: 3, image: "🍪" }
            ]
        },
        {
            id: "LE8790",
            date: "28/11/2025",
            total: "180.000đ",
            status: "pending",
            shop: "Dì Danh",
            items: [
                { name: "Mực rim me", quantity: 1, image: "🦑" },
                { name: "Mắm nêm", quantity: 1, image: "🥫" }
            ]
        },
        {
            id: "LE8785",
            date: "20/11/2025",
            total: "150.000đ",
            status: "completed",
            shop: "Cơ sở Nam Ô",
            items: [
                { name: "Nước mắm Nam Ô", quantity: 2, image: "🧂" }
            ]
        },
        {
            id: "LE8780",
            date: "15/11/2025",
            total: "100.000đ",
            status: "shipping",
            shop: "Hộ làm khô cá một nắng",
            items: [
                { name: "Cá một nắng", quantity: 1, image: "🐟" }
            ]
        }
    ];





    const getStatusStyle = (status: string) => {
        switch(status) {
            case 'pending': return { color: 'text-orange-600 bg-orange-100', icon: <Clock className="h-3 w-3 mr-1"/>, label: 'Chờ xác nhận' };
            case 'shipping': return { color: 'text-blue-600 bg-blue-100', icon: <Truck className="h-3 w-3 mr-1"/>, label: 'Đang giao hàng' };
            case 'completed': return { color: 'text-green-600 bg-green-100', icon: <CheckCircle className="h-3 w-3 mr-1"/>, label: 'Hoàn thành' };
            default: return { color: 'text-gray-600 bg-gray-100', icon: <Package className="h-3 w-3 mr-1"/>, label: 'Đã hủy' };
        }
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Đơn hàng của tôi</h2>
                <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>Tổng chi tiêu:</span>
                    <span className="font-bold text-primary">950.000đ</span>
                </div>
            </div>

            <div className="grid gap-4">
                {orders.map((order) => {
                    const statusStyle = getStatusStyle(order.status);
                    return (
                        <div key={order.id} className="bg-card border rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
                            {/* Header Card */}
                            <div className="flex flex-wrap justify-between items-start mb-4 pb-4 border-b gap-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-lg">Đơn #{order.id}</span>
                                        <span className="text-muted-foreground text-xs">• {order.date}</span>
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">Shop: <span className="text-primary font-medium">{order.shop}</span></div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit ${statusStyle.color}`}>
                   {statusStyle.icon}
                                    {statusStyle.label}
                 </span>
                            </div>

                            {/* Items List */}
                            <div className="space-y-3 mb-4 bg-muted/20 p-3 rounded-lg">
                                {order.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-white border rounded-md flex items-center justify-center text-lg shadow-sm">
                                            {item.image}
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-sm font-medium">{item.name}</span>
                                            <div className="text-xs text-muted-foreground">Số lượng: x{item.quantity}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Card */}
                            <div className="flex justify-between items-center pt-2">
                                <div>
                                    <span className="text-xs text-muted-foreground">Thành tiền:</span>
                                    <div className="font-bold text-lg text-primary">{order.total}</div>
                                </div>
                                <div className="flex gap-2">
                                    {order.status === 'completed' && (
                                        <Button variant="outline" size="sm" className="text-xs">Mua lại</Button>
                                    )}
                                    <Button variant="default" size="sm" className="gap-1 text-xs">
                                        Chi tiết <ChevronRight className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const BuyerChatSupport = () => {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 h-14 w-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all z-50 animate-bounce-subtle hover:scale-110"
            >
                <MessageCircle className="h-7 w-7" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-card border shadow-2xl rounded-xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
            {/* Header Chat */}
            <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                            <MessageCircle className="h-6 w-6" />
                        </div>
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-primary"></div>
                    </div>
                    <div>
                        <div className="font-bold text-sm">Trợ lý LocalEats</div>
                        <div className="text-xs opacity-90">Luôn sẵn sàng hỗ trợ</div>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition-colors">
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Message Body */}
            <div className="h-80 bg-gray-50 p-4 overflow-y-auto space-y-4">
                <div className="text-center text-xs text-muted-foreground my-2">Hôm nay, 08:30</div>

                {/* Tin nhắn từ Bot */}
                <div className="flex gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        LE
                    </div>
                    <div className="space-y-1 max-w-[80%]">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm shadow-sm border border-gray-100">
                            Xin chào {MOCK_USER_BUYER.name}! 👋 <br/>
                            Mình là trợ lý ảo LocalEats. Bạn đang tìm kiếm nông sản gì hôm nay?
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        LE
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm shadow-sm border border-gray-100 max-w-[80%]">
                        💡 Gợi ý: Hôm nay có <b>Chả bò Đà Nẵng loại 1</b> đang được giảm giá 15% đấy ạ!
                    </div>
                </div>

                {/* Tin nhắn giả lập từ Người dùng */}
                <div className="flex gap-3 justify-end">
                    <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[80%]">
                        Cho mình hỏi phí ship về Hà Nội là bao nhiêu?
                    </div>
                </div>

                {/* Bot đang trả lời */}
                <div className="flex gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        LE
                    </div>
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none text-sm shadow-sm border border-gray-100 w-fit">
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-3 border-t bg-white">
                <div className="flex gap-2">
                    <input
                        className="flex-1 px-4 py-2 text-sm border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                        placeholder="Nhập tin nhắn..."
                    />
                    <Button size="icon" className="h-10 w-10 rounded-full shrink-0">
                        <Send className="h-4 w-4 ml-0.5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default function Dashboard() {
    const [role, setRole] = useState(() => {
        const savedRole = localStorage.getItem("userRole");
        return savedRole === "seller" ? "seller" : "buyer";
    });
    const [activeTab, setActiveTab] = useState(role === "seller" ? "dashboard" : "market");
    const [, setLocation] = useLocation();

    useEffect(() => {
        const savedRole = localStorage.getItem("userRole");
        if (savedRole) {
            setRole(savedRole);
            if (savedRole === 'seller' && activeTab === 'market') setActiveTab('dashboard');
        }
    }, []);

    const currentUser = role === "seller" ? MOCK_USER_SELLER : MOCK_USER_BUYER;

    const handleLogout = () => {
        localStorage.removeItem("userRole"); // Xóa session khi đăng xuất
        console.log("Logged out");
        setLocation("/login");
    };

    const renderContent = () => {
        if (role === 'seller') {
            switch (activeTab) {
                case 'dashboard': return <SellerDashboard />;
                case 'products': return <SellerProductManager />;
                case 'stories': return <SellerStoryBuilder />;
                case 'orders-manage': return <SellerOrderManager />;
                default: return <SellerDashboard />;
            }
        } else {
            switch (activeTab) {
                case 'market': return <BuyerMarketplace />;
                case 'scan-qr': return <BuyerQRScanner />;
                case 'orders': return <BuyerOrderHistory />; // Đã cập nhật component
                default: return <BuyerMarketplace />;
            }
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            <Sidebar
                user={currentUser}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onLogout={handleLogout}
            />

            <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen relative">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold capitalize">
                        {role === 'seller' ? 'Kênh Người Bán' : 'Xin chào, ' + currentUser.name}
                    </h1>

                    {/* Nút chuyển đổi nhanh để Test (Dev mode) */}
                    <div className="flex items-center gap-2 bg-muted p-1 rounded-lg opacity-50 hover:opacity-100 transition-opacity">
                        <span className="text-[10px] px-2 text-muted-foreground uppercase font-bold">Dev Mode</span>
                        <button
                            onClick={() => { setRole('buyer'); setActiveTab('market'); }}
                            className={`px-3 py-1 text-xs rounded-md transition-all ${role === 'buyer' ? 'bg-white shadow text-black' : 'text-muted-foreground'}`}
                        >
                            Buyer
                        </button>
                        <button
                            onClick={() => { setRole('seller'); setActiveTab('dashboard'); }}
                            className={`px-3 py-1 text-xs rounded-md transition-all ${role === 'seller' ? 'bg-white shadow text-black' : 'text-muted-foreground'}`}
                        >
                            Seller
                        </button>
                    </div>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
                    {renderContent()}
                </div>

                {/* Hiển thị Chatbot nếu là Người mua */}
                {role === 'buyer' && <BuyerChatSupport />}
            </main>
        </div>
    );
}