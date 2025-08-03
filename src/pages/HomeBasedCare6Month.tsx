import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, GraduationCap, CheckCircle, Users, Award, Download } from "lucide-react";
import { Link } from "react-router-dom";
import heroHomeCare from "@/assets/hero-home-care.jpg";

const HomeBasedCare6Month = () => {
  const whatsappMessage = "I want to enroll in the 6-month Home-Based Care course. Please send me more information.";
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  const skillsLearned = [
    "Personal hygiene and grooming assistance",
    "Mobility support and safe transfer techniques",
    "Infection control and prevention",
    "Emotional support and communication",
    "Basic medical monitoring",
    "CPR and first aid techniques",
    "Medication management basics",
    "Nutrition and meal preparation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroHomeCare}
            alt="Home-Based Care Course"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Become a <span className="text-primary">Caregiver</span> in Just 6 Months
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Fast-track your entry into the healthcare industry with our comprehensive 
              6-month Home-Based Care course. Get job-ready skills with guaranteed internship support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => window.open("https://form.jotform.com/252143193569057", "_blank")}
              >
                Apply Now
              </Button>
              <Button 
                variant="whatsapp" 
                size="xl"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tertiary mb-2">Duration</h3>
                <p className="text-2xl font-bold text-primary">6 Months</p>
                <p className="text-muted-foreground">Full-time training</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tertiary mb-2">Monthly Fee</h3>
                <p className="text-2xl font-bold text-primary">R2,500</p>
                <p className="text-muted-foreground">+ R1,500 registration</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tertiary mb-2">Entry Requirement</h3>
                <p className="text-2xl font-bold text-primary">Grade 10</p>
                <p className="text-muted-foreground">Minimum requirement</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What You'll Learn */}
            <div>
              <h2 className="text-3xl font-bold text-tertiary mb-8">What You'll Learn</h2>
              <div className="space-y-4">
                {skillsLearned.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Included */}
            <div>
              <h2 className="text-3xl font-bold text-tertiary mb-8">Support Included</h2>
              <div className="space-y-6">
                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Internship Placement</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Guaranteed internship opportunities with healthcare facilities and home care agencies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Job Placement Support</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Career guidance and job placement assistance to help you find employment after graduation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Certificate of Completion</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Receive a recognized certificate upon successful completion of the course.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Comparison */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tertiary mb-4">Compare Our Home-Based Care Options</h2>
            <p className="text-lg text-muted-foreground">Choose the program that best fits your career goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-shadow border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-tertiary">6-Month Course</CardTitle>
                <p className="text-muted-foreground">Quick entry into caregiving</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">6 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Qualification:</span>
                  <span className="font-semibold">Certificate of Completion</span>
                </div>
                <div className="flex justify-between">
                  <span>Career Focus:</span>
                  <span className="font-semibold">Basic caregiving</span>
                </div>
                <div className="flex justify-between">
                  <span>Job Market:</span>
                  <span className="font-semibold">Immediate entry</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-tertiary">18-Month Course</CardTitle>
                <p className="text-muted-foreground">Advanced caregiver training</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">18 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Qualification:</span>
                  <span className="font-semibold">QTCO Certificate</span>
                </div>
                <div className="flex justify-between">
                  <span>Career Focus:</span>
                  <span className="font-semibold">Advanced care & leadership</span>
                </div>
                <div className="flex justify-between">
                  <span>Job Market:</span>
                  <span className="font-semibold">Higher positions</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/courses/home-based-care/18-month">View 18-Month Course</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Your Healthcare Career Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don't wait – our next intake starts soon. Secure your spot in this high-demand field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="tertiary" 
              size="xl" 
              onClick={() => window.open("https://form.jotform.com/252143193569057", "_blank")}
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-tertiary"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Get Course Info
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-tertiary"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Flyer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HomeBasedCare6Month;