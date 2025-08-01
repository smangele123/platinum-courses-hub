import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, GraduationCap, CheckCircle, Users, Award, Download } from "lucide-react";
import { Link } from "react-router-dom";
import heroWebProgramming from "@/assets/hero-web-programming.jpg";

const WebProgramming = () => {
  const whatsappMessage = "I want to enroll in the Web Programming with AWS course. Please send me more information.";
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  const skillsLearned = [
    "HTML5 & CSS3 fundamentals",
    "JavaScript programming (ES6+)",
    "Responsive web design principles",
    "AWS S3 for web hosting",
    "AWS EC2 server management",
    "AWS IAM security configuration",
    "AWS Lambda serverless functions",
    "Git version control & GitHub",
    "AWS Amplify deployment",
    "Database integration",
    "API development basics",
    "Project portfolio development"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroWebProgramming}
            alt="Web Programming with AWS Course"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Master <span className="text-primary">Web Development</span> with AWS Cloud
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Learn modern web programming with Amazon Web Services. 10-month comprehensive program 
              including internship placement to launch your tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/apply">Apply Now</Link>
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
                <p className="text-muted-foreground">Includes internship</p>
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
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Included */}
            <div>
              <h2 className="text-3xl font-bold text-tertiary mb-8">What's Included</h2>
              <div className="space-y-6">
                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Guaranteed Internship</h3>
                    </div>
                    <p className="text-muted-foreground">
                      2-month internship placement with tech companies to gain real-world experience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">AWS Certification Pathway</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Preparation for AWS Cloud Practitioner and Developer Associate certifications.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Portfolio Development</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Build 5+ professional projects for your portfolio including deployed web applications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tertiary mb-4">Course Structure</h2>
            <p className="text-lg text-muted-foreground">Structured learning path from basics to advanced deployment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-tertiary">Months 1-2</CardTitle>
                <p className="text-primary font-semibold">Web Fundamentals</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• HTML5 & CSS3</li>
                  <li>• JavaScript basics</li>
                  <li>• Responsive design</li>
                  <li>• Git version control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-tertiary">Months 3-5</CardTitle>
                <p className="text-primary font-semibold">Advanced JavaScript</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• ES6+ features</li>
                  <li>• DOM manipulation</li>
                  <li>• APIs & AJAX</li>
                  <li>• Modern frameworks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-tertiary">Months 6-8</CardTitle>
                <p className="text-primary font-semibold">AWS Cloud Services</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• AWS S3 hosting</li>
                  <li>• EC2 servers</li>
                  <li>• Lambda functions</li>
                  <li>• Amplify deployment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-tertiary">Months 9-10</CardTitle>
                <p className="text-primary font-semibold">Internship</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Real projects</li>
                  <li>• Industry experience</li>
                  <li>• Professional mentorship</li>
                  <li>• Job placement prep</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Launch Your Tech Career Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the growing tech industry with skills that are in high demand. Our graduates work at top companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="tertiary" size="xl" asChild>
              <Link to="/apply">Apply Now</Link>
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
              Download Syllabus
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default WebProgramming;