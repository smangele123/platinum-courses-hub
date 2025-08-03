import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";

const Contact = () => {
  const whatsappMessage = "Hi! I'm interested in learning more about the courses at Platinum College.";
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ready to start your journey? Contact us today for more information about our courses 
            and enrollment process.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Details */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-tertiary">
                  <MapPin className="w-6 h-6 text-primary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  <strong>10 Robert Sobukwe Road</strong><br />
                  Cape Town, South Africa
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://maps.google.com?q=10+Robert+Sobukwe+Road+Cape+Town", "_blank")}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-tertiary">
                  <Phone className="w-6 h-6 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p><strong>Office:</strong> 021 023 0653</p>
                  <p><strong>Mobile:</strong> 073 918 3054</p>
                </div>
                <Button 
                  variant="whatsapp" 
                  className="w-full"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-tertiary">
                  <Mail className="w-6 h-6 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  <strong>platinumcollege2@gmail.com</strong>
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = "mailto:platinumcollege2@gmail.com"}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Operating Hours */}
          <Card className="card-shadow mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-tertiary">
                <Clock className="w-6 h-6 text-primary" />
                Operating Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-tertiary mb-3">Office Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-tertiary mb-3">Class Schedule</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Weekday Classes</span>
                      <span className="font-medium">Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekend Classes</span>
                      <span className="font-medium">Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Evening Classes</span>
                      <span className="font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1234567890!2d18.4233!3d-33.9258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzMzLjAiUyAxOMKwMjUnMjQuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Platinum College of Progress Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-tertiary mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait – spaces fill up quickly. Apply now to secure your spot in our next intake.
          </p>
          <Button variant="cta" size="xl" onClick={() => window.open("https://form.jotform.com/252143193569057", "_blank")}>
            Apply Online Now
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;