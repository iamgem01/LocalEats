import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingDown, Clock } from "lucide-react";

export default function GroupBuyBanner() {
  const handleJoinGroup = () => {
    console.log("Joining group buy");
  };

  return (
    <Card className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-secondary/20">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center">
              <Users className="h-8 w-8 text-secondary" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">
              Mua chung - Tiết kiệm vận chuyển
            </h3>
            <p className="text-muted-foreground mb-4">
              Giỏ hàng của bạn có 2 sản phẩm từ <span className="font-semibold text-foreground">Đà Lạt</span>. 
              Tham gia mua chung để tiết kiệm tới <span className="font-semibold text-secondary">40%</span> phí ship!
            </p>

            {/* Progress */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Tiến độ nhóm</span>
                  <span className="font-semibold">7/10 người</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full transition-all duration-300" style={{ width: '70%' }} />
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>2h 15p</span>
              </div>
            </div>

            {/* Savings */}
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="h-5 w-5 text-secondary" />
              <span className="text-sm">
                Bạn sẽ tiết kiệm <span className="font-bold text-secondary">35,000đ</span> khi nhóm đủ người
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button
              size="lg"
              variant="default"
              className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={handleJoinGroup}
              data-testid="button-join-group"
            >
              Tham gia ngay
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
