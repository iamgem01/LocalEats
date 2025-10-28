import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  region: string;
  farmer: string;
  groupBuyAvailable?: boolean;
  organic?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  region,
  farmer,
  groupBuyAvailable = false,
  organic = false,
}: ProductCardProps) {
  const handleAddToCart = () => {
    console.log(`Added product ${id} to cart`);
  };

  const handleViewDetails = () => {
    console.log(`Viewing product ${id} details`);
  };

  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300 hover:shadow-lg cursor-pointer">
      <div className="relative aspect-square overflow-hidden" onClick={handleViewDetails}>
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            <MapPin className="mr-1 h-3 w-3" />
            {region}
          </Badge>
          {organic && (
            <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground">
              Organic
            </Badge>
          )}
        </div>

        {/* Group Buy Indicator */}
        {groupBuyAvailable && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-secondary/90 backdrop-blur-sm text-secondary-foreground">
              <Users className="mr-1 h-3 w-3" />
              Mua chung
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4" onClick={handleViewDetails}>
        <h3 className="font-semibold text-lg mb-1 line-clamp-1" data-testid={`text-product-name-${id}`}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          Bởi {farmer}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
            {price.toLocaleString('vi-VN')}đ
          </span>
          <span className="text-sm text-muted-foreground">/kg</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleViewDetails}
          data-testid={`button-view-${id}`}
        >
          Xem câu chuyện
        </Button>
        <Button
          className="flex-1 gap-2"
          onClick={handleAddToCart}
          data-testid={`button-add-cart-${id}`}
        >
          <ShoppingCart className="h-4 w-4" />
          Thêm
        </Button>
      </CardFooter>
    </Card>
  );
}
