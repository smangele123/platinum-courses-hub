import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappMessage = "Hi! I'm interested in learning more about the courses at Platinum College.";
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="whatsapp-float">
      <Button
        variant="whatsapp"
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl"
        onClick={() => window.open(whatsappUrl, "_blank")}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;