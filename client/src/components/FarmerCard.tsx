import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Package } from "lucide-react";

interface FarmerCardProps {
  id: number;
  name: string;
  photo: string;
  location: string;
  specialty: string;
  productCount: number;
  bio: string;
}

export default function FarmerCard({
  id,
  name,
  photo,
  location,
  specialty,
  productCount,
  bio,
}: FarmerCardProps) {
  const handleViewProfile = () => {
    console.log(`Viewing farmer ${id} profile`);
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Photo */}
          <div className="relative mb-4">
            <div className="h-24 w-24 rounded-full overflow-hidden ring-4 ring-primary/20">
              <img
                src={photo}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1.5">
              <Package className="h-3 w-3" />
            </div>
          </div>

          {/* Info */}
          <h3 className="font-semibold text-lg mb-1" data-testid={`text-farmer-name-${id}`}>
            {name}
          </h3>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>

          <Badge variant="secondary" className="mb-3">
            {specialty}
          </Badge>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {bio}
          </p>

          <div className="text-sm font-medium text-foreground mb-4">
            <span className="text-primary font-bold">{productCount}</span> sản phẩm
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={handleViewProfile}
            data-testid={`button-view-farmer-${id}`}
          >
            Gặp gỡ người làm
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
