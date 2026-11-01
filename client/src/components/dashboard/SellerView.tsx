import React, { useState } from 'react';
import {
    TrendingUp,
    PlusCircle,
    CheckCircle,
    QrCode,
    Camera,
    Download,
    Printer,
    MoreHorizontal,
    Package,
    Truck,
    CheckSquare,
    Clock,
    Search,
    Filter
} from 'lucide-react';
import { Button } from "@/components/ui/button";

export const SellerDashboard = () => {
    // Mock data cho biểu đồ doanh thu
    const revenueData = [
        { month: 'T7', amount: 8500000, height: '40%' },
        { month: 'T8', amount: 10200000, height: '55%' },
        { month: 'T9', amount: 12500000, height: '65%' },
        { month: 'T10', amount: 9800000, height: '50%' },
        { month: 'T11', amount: 14200000, height: '75%' },
        { month: 'T12', amount: 15500000, height: '85%' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* 1. Cards Thống kê Tổng quan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-muted-foreground text-sm font-medium">Doanh thu tháng này</p>
                            <h3 className="text-3xl font-bold mt-2">15.500.000đ</h3>
                        </div>
                        <div className="p-2 bg-green-100 rounded-full">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                        </div>
                    </div>
                    <div className="flex items-center text-green-600 text-sm mt-3 font-medium">
                        +12% <span className="text-muted-foreground font-normal ml-1">so với tháng trước</span>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-muted-foreground text-sm font-medium">Sản phẩm đang bán</p>
                            <h3 className="text-3xl font-bold mt-2">8</h3>
                        </div>
                        <div className="p-2 bg-blue-100 rounded-full">
                            <PlusCircle className="h-5 w-5 text-blue-600" />
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">Đã kiểm định: 8/8 sản phẩm</p>
                </div>

                <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-muted-foreground text-sm font-medium">Lượt quét QR Story</p>
                            <h3 className="text-3xl font-bold mt-2">1,240</h3>
                        </div>
                        <div className="p-2 bg-purple-100 rounded-full">
                            <QrCode className="h-5 w-5 text-purple-600" />
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">Tăng mạnh ở sản phẩm Cà phê</p>
                </div>
            </div>

            {/* 2. Khu vực Biểu đồ & Top sản phẩm */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Biểu đồ Doanh thu (Chiếm 2/3) */}
                <div className="lg:col-span-2 bg-card p-6 rounded-xl border shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="font-bold text-lg">Tổng quan doanh thu</h3>
                            <p className="text-sm text-muted-foreground">Hiệu suất kinh doanh 6 tháng cuối năm</p>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs">
                            Tải báo cáo
                        </Button>
                    </div>

                    {/* Custom CSS Bar Chart */}
                    <div className="h-64 flex items-end justify-between gap-4 px-2">
                        {revenueData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                                {/* Tooltip giá trị */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity mb-1 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                                    {(item.amount / 1000000).toFixed(1)}tr
                                </div>
                                {/* Cột biểu đồ */}
                                <div
                                    className="relative w-full max-w-[50px] bg-primary/20 rounded-t-lg overflow-hidden"
                                    style={{ height: item.height }}
                                >
                                    <div className="absolute bottom-0 left-0 w-full bg-primary/80 group-hover:bg-primary transition-all duration-500 h-0 group-hover:h-full animate-in slide-in-from-bottom-full" style={{ height: '100%' }}></div>
                                </div>
                                {/* Nhãn trục X */}
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{item.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Sản phẩm bán chạy (Chiếm 1/3) */}
                <div className="bg-card p-6 rounded-xl border shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-lg">Top bán chạy</h3>
                        <MoreHorizontal className="h-5 w-5 text-muted-foreground cursor-pointer" />
                    </div>

                    <div className="space-y-5 flex-1 overflow-y-auto pr-2">
                        {[
                            { name: "Cà phê Arabica", sales: 32, revenue: "5.2tr", color: "bg-amber-100 text-amber-700" },
                            { name: "Mật ong rừng", sales: 24, revenue: "3.6tr", color: "bg-yellow-100 text-yellow-700" },
                            { name: "Hồng treo gió", sales: 18, revenue: "2.8tr", color: "bg-orange-100 text-orange-700" },
                            { name: "Gạo ST25", sales: 15, revenue: "1.5tr", color: "bg-green-100 text-green-700" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className={`h-10 w-10 rounded-lg flex items-center justify-center font-bold text-xs ${item.color}`}>
                                    #{i + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">{item.name}</p>
                                    <p className="text-xs text-muted-foreground">{item.sales} đơn hàng</p>
                                </div>
                                <div className="font-semibold text-sm">{item.revenue}</div>
                            </div>
                        ))}
                    </div>

                    <Button variant="ghost" className="w-full mt-4 text-xs text-primary hover:text-primary/80">
                        Xem tất cả sản phẩm
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const SellerProductManager = () => (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Quản lý nông sản</h2>
            <Button className="gap-2"><PlusCircle className="h-4 w-4" /> Đăng sản phẩm mới</Button>
        </div>

        <div className="bg-card border rounded-xl p-6">
            <h3 className="font-semibold mb-4 text-lg">Đăng sản phẩm & Xác minh nguồn gốc</h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Tên sản phẩm</label>
                    <input type="text" placeholder="Ví dụ: Cà phê Arabica Cầu Đất" className="w-full p-2 border rounded-md bg-background" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Khu vực canh tác</label>
                    <input type="text" placeholder="Đà Lạt, Lâm Đồng" className="w-full p-2 border rounded-md bg-background" />
                </div>
                <div className="col-span-2 space-y-2">
                    <label className="text-sm font-medium">Chứng nhận / Kiểm định (Nếu có)</label>
                    <div className="flex items-center gap-2 p-3 border rounded-md bg-green-50/50 border-green-100">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-green-800">Hệ thống sẽ xác minh qua VietGAP/GlobalGAP ID của bạn</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-card border rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
                <thead className="bg-muted/50 border-b">
                <tr>
                    <th className="p-4 font-medium">Sản phẩm</th>
                    <th className="p-4 font-medium">Giá</th>
                    <th className="p-4 font-medium">Trạng thái</th>
                    <th className="p-4 font-medium">QR Story</th>
                    <th className="p-4 font-medium">Hành động</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b">
                    <td className="p-4 font-medium">Cà phê Arabica</td>
                    <td className="p-4">280.000đ</td>
                    <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Đang bán</span></td>
                    <td className="p-4"><span className="text-blue-600 flex items-center gap-1 cursor-pointer hover:underline"><QrCode className="h-3 w-3"/> Đã tạo</span></td>
                    <td className="p-4"><Button variant="ghost" size="sm">Sửa</Button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export const SellerStoryBuilder = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerateQR = () => {
        if (!title) return;
        setIsGenerating(true);

        // Giả lập tạo link câu chuyện (Deep link hoặc Web URL)
        // Ví dụ: https://localeats.vn/story/ca-phe-cau-dat-123
        const storySlug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
        const storyLink = `https://localeats.vn/story/${storySlug}-${Date.now()}`;

        // API tạo QR Code (sử dụng dịch vụ qrserver như trang checkout)
        const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(storyLink)}`;

        // Giả lập delay mạng
        setTimeout(() => {
            setQrCodeUrl(qrApi);
            setIsGenerating(false);
        }, 1000);
    };

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Kể chuyện sản phẩm</h2>
                    <p className="text-muted-foreground">Tạo nội dung sẽ hiện ra khi khách hàng quét mã QR trên bao bì.</p>
                </div>

                <div className="bg-card border rounded-xl p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Chọn sản phẩm liên kết</label>
                        <select className="w-full p-2 border rounded-md bg-background">
                            <option>Cà phê Arabica Đà Lạt</option>
                            <option>Mật ong hoa rừng</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Tiêu đề câu chuyện <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            placeholder="Hành trình từ hạt cà phê đến tách Espresso"
                            className="w-full p-2 border rounded-md bg-background"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Nội dung câu chuyện</label>
                        <textarea
                            rows={6}
                            placeholder="Kể về quy trình canh tác, tâm huyết của bạn..."
                            className="w-full p-2 border rounded-md bg-background"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Hình ảnh/Video thực tế</label>
                        <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-accent/50 transition cursor-pointer">
                            <Camera className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                            <span className="text-sm text-muted-foreground">Tải lên ảnh nông trại hoặc video thu hoạch</span>
                        </div>
                    </div>

                    <Button
                        className="w-full"
                        onClick={handleGenerateQR}
                        disabled={isGenerating || !title}
                    >
                        {isGenerating ? 'Đang tạo mã...' : 'Tạo QR Code cho câu chuyện này'}
                    </Button>
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl border shadow-lg text-center flex flex-col items-center justify-center h-fit sticky top-4">
                <h3 className="font-bold text-lg mb-4">Mã QR Truy xuất nguồn gốc</h3>

                <div className="bg-white p-4 rounded-lg mb-4 border-2 border-dashed border-gray-200 min-h-[200px] min-w-[200px] flex items-center justify-center relative group">
                    {qrCodeUrl ? (
                        <div className="relative">
                            <img
                                src={qrCodeUrl}
                                alt="Product Story QR"
                                className="h-48 w-48 object-contain animate-in zoom-in duration-300"
                            />
                            <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                {/* Overlay effect */}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-muted-foreground">
                            <QrCode className="h-16 w-16 mx-auto mb-2 opacity-20" />
                            <span className="text-xs">Nhập tiêu đề để tạo mã</span>
                        </div>
                    )}
                </div>

                {qrCodeUrl && (
                    <div className="w-full space-y-3 animate-in fade-in slide-in-from-bottom-2">
                        <p className="text-sm text-gray-500">
                            Quét để xem: <span className="font-semibold text-primary">"{title}"</span>
                        </p>
                        <div className="flex gap-2 w-full">
                            <Button variant="outline" className="flex-1 gap-2 border-primary/20 hover:bg-primary/5 text-primary">
                                <Download className="h-4 w-4" /> SVG
                            </Button>
                            <Button variant="outline" className="flex-1 gap-2 border-primary/20 hover:bg-primary/5 text-primary">
                                <Printer className="h-4 w-4" /> In tem
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            *Mã này là duy nhất cho sản phẩm này
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export const SellerOrderManager = () => {
    const [filter, setFilter] = useState('all');

    const orders = [
        {
            id: '#LE8829',
            customer: { name: 'Nguyễn Văn A', phone: '0987654321' },
            items: 'Cà phê Arabica (x1), Rau cải (x2)...',
            total: '350.000đ',
            status: 'pending',
            date: '10:30, Hôm nay'
        },
        {
            id: '#LE8825',
            customer: { name: 'Trần Thị B', phone: '0912345678' },
            items: 'Mật ong rừng (x1)',
            total: '150.000đ',
            status: 'shipping',
            date: '14:20, Hôm qua'
        },
        {
            id: '#LE8801',
            customer: { name: 'Lê Văn C', phone: '0909090909' },
            items: 'Gạo ST25 (10kg)',
            total: '450.000đ',
            status: 'completed',
            date: '01/10/2023'
        }
    ];

    const getStatusBadge = (status: string) => {
        switch(status) {
            case 'pending':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Chờ xác nhận</span>;
            case 'shipping':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Đang giao hàng</span>;
            case 'completed':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Hoàn thành</span>;
            default:
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Khác</span>;
        }
    };

    const getActionBtn = (status: string) => {
        switch(status) {
            case 'pending':
                return <Button size="sm" variant="default" className="bg-orange-500 hover:bg-orange-600">Xác nhận</Button>;
            case 'shipping':
                return <Button size="sm" variant="outline">Chi tiết</Button>;
            default:
                return <Button size="sm" variant="ghost">Xem lại</Button>;
        }
    };

    return (
        <div className="space-y-6">
            {/* 1. Header & Quick Stats */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Quản lý Đơn hàng</h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" /> Xuất Excel
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                            <Clock className="h-5 w-5" />
                        </div>
                        <span className="text-2xl font-bold text-orange-700">5</span>
                    </div>
                    <p className="text-sm text-orange-600 font-medium">Chờ xác nhận</p>
                    <p className="text-xs text-orange-400 mt-1">Cần xử lý ngay</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <Package className="h-5 w-5" />
                        </div>
                        <span className="text-2xl font-bold text-blue-700">12</span>
                    </div>
                    <p className="text-sm text-blue-600 font-medium">Chờ lấy hàng</p>
                    <p className="text-xs text-blue-400 mt-1">Đã đóng gói xong</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                            <Truck className="h-5 w-5" />
                        </div>
                        <span className="text-2xl font-bold text-purple-700">8</span>
                    </div>
                    <p className="text-sm text-purple-600 font-medium">Đang giao</p>
                    <p className="text-xs text-purple-400 mt-1">Dự kiến đến hôm nay</p>
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                            <CheckSquare className="h-5 w-5" />
                        </div>
                        <span className="text-2xl font-bold text-green-700">145</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">Đã hoàn thành</p>
                    <p className="text-xs text-green-400 mt-1">Trong tháng này</p>
                </div>
            </div>

            {/* 2. Filters & Search */}
            <div className="flex flex-col md:flex-row justify-between gap-4 bg-card p-4 rounded-xl border shadow-sm">
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    {['all', 'pending', 'shipping', 'completed', 'cancelled'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                                filter === status
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                            }`}
                        >
                            {status === 'all' && 'Tất cả'}
                            {status === 'pending' && 'Chờ xử lý'}
                            {status === 'shipping' && 'Đang giao'}
                            {status === 'completed' && 'Hoàn thành'}
                            {status === 'cancelled' && 'Đã hủy'}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Tìm theo Mã ĐH, Tên KH..."
                            className="pl-9 pr-4 py-2 border rounded-lg w-full md:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* 3. Orders List Table */}
            <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 border-b text-muted-foreground">
                        <tr>
                            <th className="p-4 font-medium">Mã Đơn hàng</th>
                            <th className="p-4 font-medium">Khách hàng</th>
                            <th className="p-4 font-medium">Sản phẩm</th>
                            <th className="p-4 font-medium">Tổng tiền</th>
                            <th className="p-4 font-medium">Trạng thái</th>
                            <th className="p-4 font-medium">Ngày đặt</th>
                            <th className="p-4 font-medium text-right">Hành động</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y">
                        {orders
                            .filter(o => filter === 'all' || o.status === filter)
                            .map((order) => (
                                <tr key={order.id} className="hover:bg-muted/20 transition-colors">
                                    <td className="p-4 font-medium text-primary">{order.id}</td>
                                    <td className="p-4">
                                        <div className="font-medium">{order.customer.name}</div>
                                        <div className="text-xs text-muted-foreground">{order.customer.phone}</div>
                                    </td>
                                    <td className="p-4 text-muted-foreground">
                                        {order.items}
                                    </td>
                                    <td className="p-4 font-bold">{order.total}</td>
                                    <td className="p-4">
                                        {getStatusBadge(order.status)}
                                    </td>
                                    <td className="p-4 text-muted-foreground">{order.date}</td>
                                    <td className="p-4 text-right">
                                        {getActionBtn(order.status)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t flex justify-center">
                    <Button variant="ghost" size="sm" disabled>Trước</Button>
                    <div className="flex items-center gap-1 mx-2">
                        <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-primary text-primary-foreground">1</Button>
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0">2</Button>
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0">3</Button>
                    </div>
                    <Button variant="ghost" size="sm">Sau</Button>
                </div>
            </div>
        </div>
    );
};