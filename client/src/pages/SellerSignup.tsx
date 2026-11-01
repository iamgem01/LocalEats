import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Lock, User, Store, MapPin, Phone, ShoppingBag } from "lucide-react";
import { useState } from "react";
// Import hình nền
import riceTerraceImage from "@assets/generated_images/img.png";

export default function SignupSeller() {
    const [showPassword, setShowPassword] = useState(false);
    const [, setLocation] = useLocation();

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src={riceTerraceImage}
                    alt="Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />

                <main className="flex-1 flex items-center justify-center px-4 py-16">
                    <div className="w-full max-w-lg space-y-6">
                        {/* Header Text */}
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold text-white font-serif drop-shadow-md">
                                Hợp tác cùng LocalEats
                            </h1>
                            <p className="text-white/80 text-sm drop-shadow-sm max-w-md mx-auto">
                                Đưa nông sản Việt tiếp cận hàng ngàn khách hàng. Quản lý đơn hàng, xây dựng thương hiệu và tăng doanh thu.
                            </p>
                        </div>

                        <Card className="w-full shadow-2xl border-none bg-white/95 backdrop-blur-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-2xl font-serif text-center text-primary">
                                    Đăng ký Đối tác
                                </CardTitle>

                                {/* --- ROLE SWITCHER TABS --- */}
                                <div className="flex w-full bg-gray-100 p-1 rounded-lg mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setLocation("/signup")}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-primary hover:bg-gray-50 transition-all"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        Người mua
                                    </button>
                                    <button
                                        type="button"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md bg-white text-primary shadow-sm ring-1 ring-black/5 transition-all"
                                    >
                                        <Store className="w-4 h-4" />
                                        Người bán
                                    </button>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4 pt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Farm/Shop Name */}
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Tên Hộ Sản xuất / Hộ kinh doanh</label>
                                        <div className="relative">
                                            <Store className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input placeholder="Ví dụ: Cơ sở A Tâm" type="text" className="pl-10 bg-white" />
                                        </div>
                                    </div>

                                    {/* Representative Name */}
                                    <div className="col-span-2 md:col-span-1 space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Người đại diện</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input placeholder="Họ và tên" type="text" className="pl-10 bg-white" />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="col-span-2 md:col-span-1 space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Số điện thoại</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input placeholder="098..." type="tel" className="pl-10 bg-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Địa chỉ sản xuất</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                        <Input placeholder="Thôn, Xã, Huyện, Tỉnh..." type="text" className="pl-10 bg-white" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email đăng nhập</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                        <Input placeholder="partner@example.com" type="email" className="pl-10 bg-white" />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Mật khẩu</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                        <Input
                                            placeholder="Tạo mật khẩu bảo mật"
                                            type="password"
                                            className="pl-10 pr-10 bg-white"
                                        />
                                    </div>
                                </div>

                                <Button
                                    className="w-full mt-6 h-12 text-base"
                                    variant="default"
                                    data-testid="button-seller-signup-submit"
                                >
                                    Đăng ký Gian hàng
                                </Button>

                                <div className="text-center text-sm mt-4 pt-4 border-t">
                                    <span className="text-muted-foreground">Đã có tài khoản đối tác? </span>
                                    <Link href="/login" className="text-primary font-medium hover:underline">
                                        Đăng nhập
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}