import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Lock, User } from "lucide-react";

export default function Signup() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center px-4 py-16">
                <Card className="w-full max-w-md shadow-lg border">
                    <CardHeader>
                        <CardTitle className="text-2xl font-serif text-center">
                            Tạo tài khoản
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {/* Full name */}
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input placeholder="Họ và tên" type="text" className="pl-10" />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input placeholder="Email" type="email" className="pl-10" />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input placeholder="Mật khẩu" type="password" className="pl-10" />
                        </div>

                        <Button
                            className="w-full mt-2"
                            variant="default"
                            data-testid="button-signup-submit"
                        >
                            Đăng ký
                        </Button>

                        <div className="text-center text-sm mt-4">
                            Đã có tài khoản?{" "}
                            <Link href="/login" className="text-primary underline">
                                Đăng nhập
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </main>

            <Footer />
        </div>
    );
}
