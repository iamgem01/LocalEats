import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RegionCardProps {
  name: string;
  image: string;
  productCount: number;
  description: string;
}

export default function RegionCard({
  name,
  image,
  productCount,
  description,
}: RegionCardProps) {
  const handleExplore = () => {
    console.log(`Exploring region: ${name}`);
  };

  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden" onClick={handleExplore}>
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold font-serif mb-2">
            {name}
          </h3>
          <p className="text-sm text-white/90 mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {productCount}+ sản phẩm
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white hover:bg-white/20 gap-1"
              onClick={handleExplore}
              data-testid={`button-explore-${name.toLowerCase()}`}
            >
              Khám phá
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
