import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, GraduationCap, CheckCircle, BookOpen, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroGradeRewrites from "@/assets/hero-grade-rewrites.jpg";

const GradeRewrites = () => {
  const whatsappMessage = "I want to enroll for Grade 10-12 rewrites. Please send me more information.";
  const whatsappUrl = `https://wa.me/27739183054?text=${encodeURIComponent(whatsappMessage)}`;

  const subjects = [
    "Mathematics",
    "English Home Language",
    "English First Additional Language",
    "Afrikaans Home Language", 
    "Afrikaans First Additional Language",
    "Physical Sciences",
    "Life Sciences",
    "Accounting",
    "Business Studies",
    "Economics",
    "Geography",
    "History",
    "Life Orientation",
    "Mathematical Literacy"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroGradeRewrites}
            alt="Grade 10-12 Rewrites"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete Your <span className="text-primary">Matric</span> with Confidence
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your Grade 10, 11, or 12 certificate with our flexible rewrite program. 
              Weekend and weekday classes available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/apply">Enroll Now</Link>
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
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tertiary mb-2">Fee Per Subject</h3>
                <p className="text-2xl font-bold text-primary">R800</p>
                <p className="text-muted-foreground">Per month</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tertiary mb-2">Duration</h3>
                <p className="text-2xl font-bold text-primary">Flexible</p>
                <p className="text-muted-foreground">Your pace</p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tertiary mb-2">Entry Requirement</h3>
                <p className="text-2xl font-bold text-primary">Grade 9+</p>
                <p className="text-muted-foreground">Or failed Matric</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Available Subjects */}
            <div>
              <h2 className="text-3xl font-bold text-tertiary mb-8">Available Subjects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-foreground text-sm">{subject}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-tertiary">
                  <strong>Note:</strong> You can choose any combination of subjects based on your needs. 
                  Minimum 4 subjects required for Matric certificate.
                </p>
              </div>
            </div>

            {/* Class Schedule & Support */}
            <div>
              <h2 className="text-3xl font-bold text-tertiary mb-8">Class Schedule & Support</h2>
              <div className="space-y-6">
                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Flexible Scheduling</h3>
                    </div>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Weekday classes: Mon-Fri (afternoon)</li>
                      <li>• Weekend classes: Saturday mornings</li>
                      <li>• Evening classes: Mon-Thu (6pm-8pm)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Study Support</h3>
                    </div>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Comprehensive revision notes</li>
                      <li>• Regular mock examinations</li>
                      <li>• Individual tutoring sessions</li>
                      <li>• Exam preparation workshops</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold text-tertiary">Success Rate</h3>
                    </div>
                    <p className="text-muted-foreground">
                      85% of our students pass their rewrites on the first attempt. 
                      We provide continuous support until you succeed.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Options */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tertiary mb-4">Choose Your Grade Level</h2>
            <p className="text-lg text-muted-foreground">We offer rewrite programs for all high school grades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Grade 10</CardTitle>
                <p className="text-muted-foreground">Foundation level</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Subjects available:</span>
                  <span className="font-semibold">14 options</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">6-12 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee per subject:</span>
                  <span className="font-semibold">R800/month</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Grade 11</CardTitle>
                <p className="text-muted-foreground">Advanced preparation</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Subjects available:</span>
                  <span className="font-semibold">14 options</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">6-12 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee per subject:</span>
                  <span className="font-semibold">R800/month</span>
                </div>
                <Button variant="default" className="w-full mt-4">
                  Most Popular
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Grade 12</CardTitle>
                <p className="text-muted-foreground">Matric completion</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Subjects available:</span>
                  <span className="font-semibold">14 options</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">8-12 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee per subject:</span>
                  <span className="font-semibold">R800/month</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Don't Let Your Dreams Wait
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your Matric certificate opens doors to better career opportunities and further education. 
            Start your rewrite journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="tertiary" size="xl" asChild>
              <Link to="/apply">Enroll for Rewrites</Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-tertiary"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Get Subject Info
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default GradeRewrites;