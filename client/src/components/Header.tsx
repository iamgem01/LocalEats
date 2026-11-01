import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

export default function Header() {
    const [location] = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // [Inference] Sử dụng hook global từ context thay vì state cục bộ để đồng bộ ngôn ngữ toàn trang
    const { language, toggleLanguage } = useLanguage();

    // todo: remove mock functionality
    const cartCount = 3;

    const navigation = [
        { name: language === "vi" ? "Trang chủ" : "Home", href: "/" },
        { name: language === "vi" ? "Sản phẩm" : "Products", href: "/products" },
        { name: language === "vi" ? "Người làm" : "Farmers", href: "/farmers" },
        { name: language === "vi" ? "Về chúng tôi" : "About", href: "/about" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2 transition-all cursor-pointer">
                            <div className="text-2xl font-bold font-serif text-primary">LocalEats</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navigation.map((item) => (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant={location === item.href ? "secondary" : "ghost"}
                                    data-testid={`link-${item.href.slice(1) || "home"}`}
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </nav>

                    {/* Search Bar - Desktop */}
                    <div className="hidden lg:flex flex-1 max-w-md">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder={language === "vi" ? "Tìm đặc sản..." : "Search products..."}
                                className="pl-9"
                                data-testid="input-search"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        {/* Login Button - Hidden on mobile to save space */}
                        <div className="hidden sm:block">
                            <Link href="/login">
                                <Button variant="outline" data-testid="button-login" className="mr-2">
                                    {language === "vi" ? "Đăng nhập" : "Login"}
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button variant="default" data-testid="button-signup">
                                    {language === "vi" ? "Đăng ký" : "Sign up"}
                                </Button>
                            </Link>
                        </div>

                        {/* Language Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleLanguage}
                            data-testid="button-language-toggle"
                            className="relative"
                        >
                            <Globe className="h-5 w-5" />
                            <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-primary text-white rounded px-0.5 leading-tight">
                    {language.toUpperCase()}
                </span>
                        </Button>

                        {/* Cart Button */}
                        <Link href="/cart">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative"
                                data-testid="button-cart"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                      {cartCount}
                    </span>
                                )}
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            data-testid="button-mobile-menu"
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="mt-3 lg:hidden">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder={language === "vi" ? "Tìm đặc sản..." : "Search products..."}
                            className="pl-9"
                            data-testid="input-search-mobile"
                        />
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className="mt-4 flex flex-col gap-2 md:hidden border-t pt-4">
                        {navigation.map((item) => (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant={location === item.href ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-testid={`link-mobile-${item.href.slice(1) || "home"}`}
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                        {/* Mobile Auth Buttons */}
                        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t sm:hidden">
                            <Link href="/login">
                                <Button variant="outline" className="w-full">
                                    {language === "vi" ? "Đăng nhập" : "Login"}
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button variant="default" className="w-full">
                                    {language === "vi" ? "Đăng ký" : "Sign up"}
                                </Button>
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}