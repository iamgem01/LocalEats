import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Lock, Eye, EyeOff, Store, ShoppingBag } from "lucide-react";
import { useState } from "react";
import riceTerraceImage from "@assets/generated_images/coverrr.png";

export default function Login() {
    const [, setLocation] = useLocation(); // Hook để chuyển trang
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // --- LOGIC ĐĂNG NHẬP GIẢ LẬP ---
        const { email, password } = formData;

        // 1. Check tài khoản Người Bán (Seller)
        if (email === "user01@gmail.com" && password === "123") {
            // Lưu trạng thái đăng nhập
            localStorage.setItem("userRole", "seller");
            localStorage.setItem("userName", "Nông Trại Anh Tuấn");

            // Chuyển hướng
            setLocation("/home");
            return;
        }

        // 2. Check tài khoản Người Mua (Buyer)
        // (Chấp nhận user02 hoặc bất kỳ email nào khác nếu đúng pass)
        if ((email === "user02@gmail.com" || role === 'buyer') && password === "123") {
            // Lưu trạng thái đăng nhập
            localStorage.setItem("userRole", "buyer");
            localStorage.setItem("userName", "Nguyễn Văn A");

            // Chuyển hướng
            setLocation("/home");
            return;
        }

        // 3. Nếu sai thông tin
        alert("Thông tin đăng nhập không đúng!\n\nGợi ý:\n- Seller: user01@gmail.com / 123\n- Buyer: user02@gmail.com / 123");
    };

    return (
        <div className="min-h-screen flex flex-col relative">
            <div className="absolute inset-0 z-0">
                <img
                    src={riceTerraceImage}
                    alt="Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />

                <main className="flex-1 flex items-center justify-center px-4 py-16">
                    <div className="w-full max-w-md space-y-6">
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold text-white font-serif drop-shadow-md">
                                {role === 'seller' ? 'Kênh Người Bán' : 'Chào mừng trở lại'}
                            </h1>
                            <p className="text-white/80 text-sm drop-shadow-sm">
                                {role === 'seller'
                                    ? 'Đăng nhập để quản lý đặc sản và đơn hàng của bạn'
                                    : 'Đăng nhập để tiếp tục trải nghiệm mua sắm đặc sản'
                                }
                            </p>
                        </div>

                        <Card className="w-full shadow-2xl border-none bg-white/95 backdrop-blur-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-2xl font-serif text-center text-primary">
                                    Đăng nhập
                                </CardTitle>

                                <div className="flex w-full bg-gray-100 p-1 rounded-lg mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setRole('buyer')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                            role === 'buyer'
                                                ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                                                : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                                        }`}
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        Người mua
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setRole('seller')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                            role === 'seller'
                                                ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                                                : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                                        }`}
                                    >
                                        <Store className="w-4 h-4" />
                                        Người bán
                                    </button>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4 pt-4">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input
                                                placeholder={role === 'seller' ? "Nhập email" : "Nhập email"}
                                                type="email"
                                                className="pl-10 bg-white"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-medium text-gray-700">
                                                Mật khẩu
                                            </label>
                                            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                                                Quên mật khẩu?
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input
                                                placeholder="Nhập mật khẩu"
                                                type={showPassword ? "text" : "password"}
                                                className="pl-10 pr-10 bg-white"
                                                value={formData.password}
                                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full mt-2"
                                        variant="default"
                                    >
                                        Đăng nhập
                                    </Button>
                                </form>


                            </CardContent>
                        </Card>
                    </div>
                </main>


            </div>
        </div>
    );
}