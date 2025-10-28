import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingBag, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Khám phá & Tìm hiểu",
      description: "Duyệt sản phẩm, xem video người làm, đọc câu chuyện về nguồn gốc",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: ShoppingBag,
      title: "Đặt hàng dễ dàng",
      description: "Chọn sản phẩm yêu thích, tham gia mua chung để tiết kiệm chi phí",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Truck,
      title: "Nhận hàng tươi ngon",
      description: "Đặc sản được giao tận nơi, trực tiếp từ người làm đến tay bạn",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Cách thức hoạt động
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chỉ với 3 bước đơn giản, bạn đã có thể thưởng thức đặc sản từ khắp miền Việt
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-border z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative z-10 hover-elevate transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${step.bgColor} mb-4 mt-4`}>
                    <Icon className={`h-8 w-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
