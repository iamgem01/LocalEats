import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
// Import hình nền
import riceTerraceImage from "@assets/generated_images/coverrr.png";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src={riceTerraceImage}
                    alt="Background"
                    className="h-full w-full object-cover"
                />
                {/* Lớp phủ màu đen mờ */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />

                <main className="flex-1 flex items-center justify-center px-4 py-16">
                    <div className="w-full max-w-md space-y-6">
                        {/* Text Header */}
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold text-white font-serif drop-shadow-md">
                                Tham gia LocalEats
                            </h1>
                            <p className="text-white/80 text-sm drop-shadow-sm">
                                Kết nối trực tiếp với đặc sản Đà Nẵng mà không hoài nghi về nguồn gốc
                            </p>
                        </div>

                        <Card className="w-full shadow-2xl border-none bg-white/95 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl font-serif text-center text-primary">
                                    Tạo tài khoản
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {/* Full name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Họ và tên</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                        <Input placeholder="Nguyễn Văn A" type="text" className="pl-10 bg-white" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                        <Input placeholder="email@example.com" type="email" className="pl-10 bg-white" />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Mật khẩu</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                        <Input
                                            placeholder="Tạo mật khẩu"
                                            type={showPassword ? "text" : "password"}
                                            className="pl-10 pr-10 bg-white"
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
                                    className="w-full mt-4"
                                    variant="default"
                                    data-testid="button-signup-submit"
                                >
                                    Đăng ký
                                </Button>

                                <div className="text-center text-sm mt-4 pt-4 border-t">
                                    <span className="text-muted-foreground">Đã có tài khoản? </span>
                                    <Link href="/login" className="text-primary font-medium hover:underline">
                                        Đăng nhập
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>

            </div>
        </div>
    );
}