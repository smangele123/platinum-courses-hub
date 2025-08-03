import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, GraduationCap, CheckCircle, Users, Award, Download, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroCyberSecurity from "@/assets/hero-cyber-security.jpg";

const CyberSecurity = () => {
  const whatsappMessage = "I want to enroll in the Cyber Security course. Please send me more information.";
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  const skillsLearned = [
    "Network security fundamentals",
    "Firewall configuration and management",
    "POPIA compliance and data protection",
    "Penetration testing basics",
    "Digital forensics investigation",
    "Threat assessment and analysis",
    "Security incident response",
    "Vulnerability assessment",
    "Risk management frameworks",
    "Security awareness training",
    "Cisco networking essentials",
    "CompTIA Security+ preparation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroCyberSecurity}
            alt="Cyber Security Course"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Become a <span className="text-primary">Cyber Security</span> Professional
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Protect organizations from digital threats with our comprehensive 10-month 
              cybersecurity program. Industry-recognized certifications and guaranteed internship.
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
                <p className="text-2xl font-bold text-primary">10 Months</p>
                <p className="text-muted-foreground">Full-time training</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tertiary mb-2">Monthly Fee</h3>
                <p className="text-2xl font-bold text-primary">R5,000</p>
                <p className="text-muted-foreground">Per month</p>
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
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-tertiary mb-8">Industry Certifications</h2>
              <div className="space-y-6">
                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Cisco Certification</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Preparation for Cisco networking certifications (CCNA Security pathway).
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">CompTIA Security+</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Industry-standard certification for cybersecurity professionals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Internship Program</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Hands-on experience with cybersecurity firms and IT departments.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tertiary mb-4">Career Opportunities</h2>
            <p className="text-lg text-muted-foreground">High-demand cybersecurity roles waiting for qualified professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tertiary mb-2">Security Analyst</h3>
                <p className="text-muted-foreground text-sm">Monitor and protect organizational security</p>
                <p className="text-primary font-semibold mt-2">R25,000 - R45,000/month</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tertiary mb-2">Penetration Tester</h3>
                <p className="text-muted-foreground text-sm">Test systems for vulnerabilities</p>
                <p className="text-primary font-semibold mt-2">R30,000 - R55,000/month</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tertiary mb-2">Security Consultant</h3>
                <p className="text-muted-foreground text-sm">Advise organizations on security practices</p>
                <p className="text-primary font-semibold mt-2">R35,000 - R65,000/month</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tertiary mb-2">Digital Forensics</h3>
                <p className="text-muted-foreground text-sm">Investigate cyber crimes and incidents</p>
                <p className="text-primary font-semibold mt-2">R28,000 - R50,000/month</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tertiary mb-2">Compliance Officer</h3>
                <p className="text-muted-foreground text-sm">Ensure POPIA and regulatory compliance</p>
                <p className="text-primary font-semibold mt-2">R25,000 - R45,000/month</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-tertiary mb-2">Network Security</h3>
                <p className="text-muted-foreground text-sm">Secure network infrastructure</p>
                <p className="text-primary font-semibold mt-2">R30,000 - R55,000/month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Secure Your Future in Cybersecurity
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            With cyber threats increasing daily, cybersecurity professionals are in higher demand than ever. 
            Start your journey today.
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
              Request Syllabus
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-tertiary"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CyberSecurity;