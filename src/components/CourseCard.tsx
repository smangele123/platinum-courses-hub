import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, GraduationCap, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  fee: string;
  certification: string;
  image?: string;
  href: string;
  whatsappMessage: string;
}

const CourseCard = ({
  title,
  description,
  duration,
  fee,
  certification,
  image,
  href,
  whatsappMessage,
}: CourseCardProps) => {
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="card-shadow hover:shadow-lg transition-smooth group">
      {image && (
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl text-tertiary group-hover:text-primary transition-smooth">
          {title}
        </CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-medium">Duration:</span>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="font-medium">Fee:</span>
            <span>{fee}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="font-medium">Certification:</span>
            <span>{certification}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2">
        <Button variant="default" className="flex-1" asChild>
          <Link to={href}>Learn More</Link>
        </Button>
        <Button
          variant="whatsapp"
          size="sm"
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;