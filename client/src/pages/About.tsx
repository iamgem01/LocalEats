import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Award, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Vietnamese_rice_terraces_farmer_fb8b00e8.png";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Tận tâm",
      description: "Cam kết mang đến sản phẩm chất lượng cao nhất, được chọn lọc kỹ càng từ những người làm tận tâm nhất.",
    },
    {
      icon: Users,
      title: "Kết nối",
      description: "Xây dựng cầu nối trực tiếp giữa người tiêu dùng và người làm, loại bỏ các khâu trung gian không cần thiết.",
    },
    {
      icon: Target,
      title: "Minh bạch",
      description: "Đảm bảo nguồn gốc rõ ràng cho mọi sản phẩm. Khách hàng có quyền biết sản phẩm đến từ đâu.",
    },
    {
      icon: Award,
      title: "Chất lượng",
      description: "Chỉ hợp tác với những người làm uy tín, sản phẩm được kiểm tra nghiêm ngặt trước khi đến tay khách hàng.",
    },
  ];

  const team = [
    {
      name: "Nguyễn Văn A",
      role: "Người sáng lập",
      bio: "15 năm kinh nghiệm trong lĩnh vực nông nghiệp và phát triển nông thôn",
    },
    {
      name: "Trần Thị B",
      role: "Giám đốc Vận hành",
      bio: "Chuyên gia về chuỗi cung ứng và logistics, đảm bảo sản phẩm tươi ngon nhất",
    },
    {
      name: "Lê Văn C",
      role: "Trưởng phòng Chất lượng",
      bio: "Kỹ sư nông nghiệp, đảm bảo tiêu chuẩn an toàn thực phẩm",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Khởi đầu",
      description: "LocalEats được thành lập với sứ mệnh kết nối đặc sản Việt",
    },
    {
      year: "2021",
      title: "Mở rộng",
      description: "Hợp tác với 100+ nông hộ trên 20 tỉnh thành",
    },
    {
      year: "2023",
      title: "Phát triển",
      description: "Ra mắt tính năng mua chung, giúp khách hàng tiết kiệm chi phí",
    },
    {
      year: "2025",
      title: "Hiện tại",
      description: "500+ người làm, 1,200+ sản phẩm, 5,000+ khách hàng hài lòng",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Vietnamese farming"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6">
                Về LocalEats
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Chúng tôi tin rằng mỗi sản phẩm đặc sản đều có một câu chuyện đáng kể. 
                LocalEats ra đời để kết nối những câu chuyện ấy với bạn.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                  Sứ mệnh
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Kết nối trực tiếp người tiêu dùng với người nông dân, nghệ nhân địa phương, 
                  mang đến sản phẩm chất lượng cao với nguồn gốc rõ ràng và giá cả công bằng.
                </p>
                <p className="text-lg text-muted-foreground">
                  Chúng tôi tin rằng khi bạn hiểu rõ nguồn gốc sản phẩm và con người đằng sau nó, 
                  bạn sẽ trân trọng hơn những gì mình tiêu dùng.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                  Tầm nhìn
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Trở thành nền tảng hàng đầu Việt Nam trong việc kết nối đặc sản địa phương 
                  với người tiêu dùng, góp phần phát triển kinh tế nông thôn bền vững.
                </p>
                <p className="text-lg text-muted-foreground">
                  Trong 5 năm tới, chúng tôi hướng đến việc hợp tác với 5,000+ nông hộ 
                  trên toàn quốc và phục vụ 100,000+ gia đình Việt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Giá trị cốt lõi
              </h2>
              <p className="text-lg text-muted-foreground">
                Những nguyên tắc định hướng mọi hoạt động của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover-elevate transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Hành trình phát triển
              </h2>
              <p className="text-lg text-muted-foreground">
                Từ ý tưởng ban đầu đến hiện tại
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex gap-6 items-start hover-elevate p-6 rounded-lg transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Đội ngũ của chúng tôi
              </h2>
              <p className="text-lg text-muted-foreground">
                Những người đam mê kết nối và phát triển nông nghiệp Việt
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-primary">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Cùng tạo nên sự khác biệt
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Mỗi lần mua sắm tại LocalEats, bạn không chỉ nhận được sản phẩm chất lượng 
              mà còn góp phần hỗ trợ trực tiếp người nông dân, nghệ nhân địa phương.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                data-testid="button-start-shopping"
              >
                Bắt đầu mua sắm
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 hover:bg-white/20 text-primary-foreground border-primary-foreground/30"
                data-testid="button-contact"
              >
                Liên hệ với chúng tôi
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
