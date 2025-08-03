import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    grade: "",
    startDate: "",
    message: ""
  });

  const courses = [
    "Home-Based Care (6 Months)",
    "Home-Based Care (18 Months)",
    "Web Programming with AWS",
    "Cyber Security",
    "Grade 10-12 Rewrites"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `New Application from ${formData.fullName}
Course: ${formData.course}
Email: ${formData.email}
Phone: ${formData.phone}
Last Grade Passed: ${formData.grade}
Preferred Start Date: ${formData.startDate}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Application Submitted!",
      description: "Your application has been sent via WhatsApp. We'll contact you soon.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      grade: "",
      startDate: "",
      message: ""
    });
  };

  const whatsappMessage = "Hi! I'd like to apply for a course at Platinum College.";
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Apply Now
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ready to start your new career? Contact us directly for immediate assistance.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Info */}
            <div className="lg:col-span-2">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-tertiary">Ready to Apply?</CardTitle>
                  <p className="text-muted-foreground">
                    We're here to help you take the next step in your career. Contact us using any of the methods below.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <h3 className="text-xl font-semibold text-tertiary mb-4">Application Form Coming Soon</h3>
                    <p className="text-muted-foreground mb-6">
                      We're setting up a streamlined application process. For now, please contact us directly and we'll guide you through the enrollment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-tertiary">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="whatsapp"
                    className="w-full"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Application
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.location.href = "tel:0210230653"}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call: 021 023 0653
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.location.href = "mailto:platinumcollege2@gmail.com"}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Application
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-tertiary">Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                      <p>Submit your application form</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                      <p>We'll contact you within 24 hours</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                      <p>Schedule an interview or assessment</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                      <p>Complete enrollment and start your course</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Apply;