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
            Take the first step towards your new career. Complete the application form below 
            or contact us directly for immediate assistance.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-tertiary">Application Form</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll send your application via WhatsApp for quick processing.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="073 123 4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="course">Course of Interest *</Label>
                        <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course} value={course}>
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="grade">Last Grade Passed</Label>
                        <Select value={formData.grade} onValueChange={(value) => setFormData({...formData, grade: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="grade-9">Grade 9</SelectItem>
                            <SelectItem value="grade-10">Grade 10</SelectItem>
                            <SelectItem value="grade-11">Grade 11</SelectItem>
                            <SelectItem value="grade-12">Grade 12 / Matric</SelectItem>
                            <SelectItem value="higher">Higher Education</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="startDate">Preferred Start Date</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your career goals or any questions you have..."
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Submit Application
                    </Button>
                  </form>
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