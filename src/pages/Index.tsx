import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CourseCard from "@/components/CourseCard";
import { CheckCircle, Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroCollege from "@/assets/hero-college.jpg";
import heroHomeCare from "@/assets/hero-home-care.jpg";
import heroWebProgramming from "@/assets/hero-web-programming.jpg";
import heroCyberSecurity from "@/assets/hero-cyber-security.jpg";
import heroGradeRewrites from "@/assets/hero-grade-rewrites.jpg";

const Index = () => {
  const courses = [
    {
      title: "Home-Based Care",
      description: "Professional caregiver training with internship support and job placement assistance.",
      duration: "6 or 18 months",
      fee: "From R2,500/month",
      certification: "Certificate of Completion",
      image: heroHomeCare,
      href: "/courses/home-based-care",
      whatsappMessage: "I'm interested in the Home-Based Care course. Please send me more information."
    },
    {
      title: "Web Programming with AWS",
      description: "Learn modern web development with AWS cloud hosting and deployment.",
      duration: "10 months (includes internship)",
      fee: "R5,000/month",
      certification: "AWS Certified Pathway",
      image: heroWebProgramming,
      href: "/courses/web-programming",
      whatsappMessage: "I want to learn more about the Web Programming with AWS course."
    },
    {
      title: "Cyber Security",
      description: "Professional cybersecurity training with industry-recognized certifications.",
      duration: "10 months",
      fee: "R5,000/month",
      certification: "Cisco & CompTIA Pathway",
      image: heroCyberSecurity,
      href: "/courses/cyber-security",
      whatsappMessage: "Please send me details about the Cyber Security course."
    },
    {
      title: "Grade 10-12 Rewrites",
      description: "Complete your matric with our comprehensive rewrite program.",
      duration: "Flexible",
      fee: "R800/subject/month",
      certification: "Matric Certificate",
      image: heroGradeRewrites,
      href: "/courses/grade-rewrites",
      whatsappMessage: "I need information about the Grade 10-12 rewrite program."
    }
  ];

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognised Certification",
      description: "All our courses lead to industry-recognised qualifications."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Internship Support",
      description: "We provide internship opportunities and job placement assistance."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Job-Ready Skills",
      description: "Learn practical skills that employers are looking for in today's market."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Affordable Fees",
      description: "Quality education at competitive rates with flexible payment options."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - More Realistic */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted/20 to-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary mb-6">
              We Prepare You for{" "}
              <span className="text-primary">Job-Ready Careers</span>{" "}
              in Just 6–18 Months
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your future with professional skills training at Platinum College of Progress. 
              Located in Cape Town, we offer affordable courses with internship support and recognised certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/courses">View All Courses</Link>
              </Button>
              <Button variant="secondary" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Graduates Placed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Job Placement Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Industry Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-tertiary mb-4">
              Why Choose Platinum College?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to providing quality education that prepares you for real career opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-tertiary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-tertiary mb-4">
              Our Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our range of professional courses designed to get you job-ready quickly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="xl" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your New Career?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't wait – spaces are limited. Contact us today to secure your spot in our next intake.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="tertiary" size="xl" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-tertiary"
                onClick={() => window.open("https://wa.me/27739183054?text=Hi! I'm interested in learning more about the courses at Platinum College.", "_blank")}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
