import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappMessage = "Hi! I'm interested in learning more about the courses at Platinum College.";
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-tertiary text-tertiary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p>10 Robert Sobukwe Road</p>
                  <p>Cape Town, South Africa</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p>021 023 0653</p>
                  <p>073 918 3054</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p>platinumcollege2@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <div className="space-y-2">
              <p className="hover:text-primary transition-smooth cursor-pointer">Home-Based Care (6 Months)</p>
              <p className="hover:text-primary transition-smooth cursor-pointer">Home-Based Care (18 Months)</p>
              <p className="hover:text-primary transition-smooth cursor-pointer">Web Programming with AWS</p>
              <p className="hover:text-primary transition-smooth cursor-pointer">Cyber Security</p>
              <p className="hover:text-primary transition-smooth cursor-pointer">Grade 10-12 Rewrites</p>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ready to Start?</h3>
            <p className="text-muted-foreground mb-6">
              Take the first step towards your new career. Contact us today for more information about our courses.
            </p>
            <div className="space-y-3">
              <Button
                variant="whatsapp"
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="w-full flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
              <Button variant="cta" className="w-full">
                Apply Online
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Platinum College of Progress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;