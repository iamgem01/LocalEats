import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/Vietnamese_rice_terraces_farmer_fb8b00e8.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vietnamese farmers in rice terraces"
          className="h-full w-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-white">
              Nền tảng kết nối đặc sản Việt
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
            Xem Tận Mắt,{" "}
            <span className="text-primary">Mua Tận Gốc</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Kết nối bạn trực tiếp với người nông dân, nghệ nhân. Mỗi sản phẩm đều có câu chuyện, 
            mỗi hương vị đều chân thật.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              variant="default"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground border border-primary-border backdrop-blur-sm"
              data-testid="button-explore-products"
            >
              Khám phá đặc sản
              <ArrowRight className="h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md"
              data-testid="button-watch-story"
            >
              <Play className="h-5 w-5" />
              Xem câu chuyện
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2 text-white/80">
              <div className="h-8 w-px bg-white/30" />
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Nông hộ</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="h-8 w-px bg-white/30" />
              <div>
                <div className="text-2xl font-bold text-white">1,200+</div>
                <div className="text-sm">Sản phẩm</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="h-8 w-px bg-white/30" />
              <div>
                <div className="text-2xl font-bold text-white">5,000+</div>
                <div className="text-sm">Khách hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
