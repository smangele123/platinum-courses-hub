import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
    { name: "Apply", href: "/apply" },
  ];

  const whatsappMessage = "Hi! I'm interested in learning more about the courses at Platinum College.";
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1442e783-31bb-495e-a297-c76492198152.png" 
              alt="Platinum College of Progress" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-smooth ${
                  location.pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="whatsapp"
              size="sm"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button 
              variant="cta" 
              size="sm" 
              onClick={() => window.open("https://form.jotform.com/252143193569057", "_blank")}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-smooth ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="whatsapp"
                  size="sm"
                  onClick={() => {
                    window.open(whatsappUrl, "_blank");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button 
                  variant="cta" 
                  size="sm" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open("https://form.jotform.com/252143193569057", "_blank");
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;