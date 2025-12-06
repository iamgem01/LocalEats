import React from 'react';
import {
    LayoutDashboard,
    ShoppingBag,
    QrCode,
    BookOpen,
    TrendingUp,
    Users,
    LogOut
} from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SidebarProps {
    user: { name: string; role: string; avatar: string };
    activeTab: string;
    setActiveTab: (tab: string) => void;
    onLogout: () => void;
}

export default function Sidebar({ user, activeTab, setActiveTab, onLogout }: SidebarProps) {
    const buyerLinks = [
        { id: 'market', label: 'Chợ nông sản', icon: ShoppingBag },
        { id: 'scan-qr', label: 'Quét QR & Câu chuyện', icon: QrCode },
        { id: 'orders', label: 'Đơn hàng của tôi', icon: LayoutDashboard },
    ];

    const sellerLinks = [
        { id: 'dashboard', label: 'Tổng quan', icon: TrendingUp },
        { id: 'products', label: 'Quản lý sản phẩm', icon: ShoppingBag },
        { id: 'stories', label: 'Câu chuyện & QR', icon: BookOpen },
        { id: 'orders-manage', label: 'Đơn hàng', icon: Users },
    ];

    const links = user.role === 'seller' ? sellerLinks : buyerLinks;

    return (
        <div className="w-64 bg-card border-r h-screen flex flex-col fixed left-0 top-0 z-20">
            <div className="p-6 border-b">
                <h1 className="text-2xl font-serif font-bold text-primary">LocalEats</h1>
                <p className="text-xs text-muted-foreground mt-1">Vị của đất - Hồn của người</p>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => setActiveTab(link.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            activeTab === link.id
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'hover:bg-accent text-muted-foreground'
                        }`}
                    >
                        <link.icon className="h-5 w-5" />
                        {link.label}
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {user.avatar}
                    </div>
                    <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                            {user.role === 'seller' ? 'Nông dân / Đối tác' : 'Thành viên'}
                        </p>
                    </div>
                </div>
                <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50" onClick={onLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Đăng xuất
                </Button>
            </div>
        </div>
    );
}