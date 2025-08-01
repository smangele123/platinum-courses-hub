import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroHomeCare from "@/assets/hero-home-care.jpg";
import heroWebProgramming from "@/assets/hero-web-programming.jpg";
import heroCyberSecurity from "@/assets/hero-cyber-security.jpg";
import heroGradeRewrites from "@/assets/hero-grade-rewrites.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Home-Based Care (6 Months)",
      description: "Quick entry into healthcare caregiving with essential skills training.",
      duration: "6 months",
      fee: "R2,500/month",
      certification: "Certificate of Completion",
      image: heroHomeCare,
      href: "/courses/home-based-care/6-month",
      whatsappMessage: "I'm interested in the 6-month Home-Based Care course. Please send me more information."
    },
    {
      title: "Home-Based Care (18 Months)",
      description: "Comprehensive caregiver training with QTCO certification for better career prospects.",
      duration: "18 months",
      fee: "R2,500/month",
      certification: "QTCO Certificate",
      image: heroHomeCare,
      href: "/courses/home-based-care/18-month",
      whatsappMessage: "I want to learn about the 18-month QTCO Home-Based Care course."
    },
    {
      title: "Web Programming with AWS",
      description: "Master modern web development with cloud deployment on Amazon Web Services.",
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
      description: "Complete your matric with our comprehensive rewrite program. Flexible scheduling.",
      duration: "Flexible",
      fee: "R800/subject/month",
      certification: "Matric Certificate",
      image: heroGradeRewrites,
      href: "/courses/grade-rewrites",
      whatsappMessage: "I need information about the Grade 10-12 rewrite program."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional Skills Training
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Choose from our range of accredited courses designed to get you job-ready quickly. 
            All courses include internship support and job placement assistance.
          </p>
          <Button variant="tertiary" size="xl" asChild>
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-tertiary mb-4">
              Available Courses
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional training programs with guaranteed internship opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-tertiary mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our education consultants are here to help you choose the right course for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button 
              variant="whatsapp" 
              size="xl"
              onClick={() => window.open("https://wa.me/27739183054?text=I need help choosing the right course for my career goals.", "_blank")}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Courses;