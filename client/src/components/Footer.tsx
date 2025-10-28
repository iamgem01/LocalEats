import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { SiZalo } from "react-icons/si";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription submitted");
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">LocalEats</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Kết nối đặc sản địa phương với người tiêu dùng. Mỗi sản phẩm đều có câu chuyện, 
              mỗi hương vị đều chân thật.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" data-testid="button-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-zalo">
                <SiZalo className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Sản phẩm
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/farmers">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Người làm
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Về chúng tôi
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Cách thức hoạt động
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Đường Hùng Vương, Đà Nẵng</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>0236 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@localeats.vn</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Nhận tin mới</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Đăng ký để nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Email của bạn"
                required
                data-testid="input-newsletter-email"
              />
              <Button type="submit" data-testid="button-subscribe">
                Đăng ký
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 LocalEats. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy">
                <a className="hover:text-foreground transition-colors">
                  Chính sách bảo mật
                </a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-foreground transition-colors">
                  Điều khoản sử dụng
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
