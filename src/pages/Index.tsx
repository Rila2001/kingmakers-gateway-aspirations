import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Users, 
  BookOpen, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Star,
  CheckCircle,
  Target,
  TrendingUp,
  Clock,
  Shield,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const courses = [
    { name: "IBPS PO/Clerk", duration: "6 Months", mode: "Online + Offline" },
    { name: "SBI PO/Clerk", duration: "5 Months", mode: "Online + Offline" },
    { name: "RBI Grade A/B", duration: "8 Months", mode: "Online + Offline" },
    { name: "NABARD Grade A/B", duration: "6 Months", mode: "Online + Offline" },
    { name: "SSC CGL/CHSL", duration: "4 Months", mode: "Online + Offline" },
    { name: "Insurance Exams", duration: "3 Months", mode: "Online + Offline" },
    { name: "RRB PO/Clerk", duration: "5 Months", mode: "Online + Offline" },
    { name: "TNPSC Group 1/2", duration: "12 Months", mode: "Online + Offline" }
  ];

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Mentors",
      description: "Learn from experienced banking professionals with 10+ years in the industry"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Hybrid Learning",
      description: "Flexible online and offline classes to suit your schedule and learning style"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Updated Curriculum",
      description: "Latest syllabus and current affairs updated daily for competitive edge"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Daily Mock Tests",
      description: "Regular practice tests with detailed analysis and performance tracking"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Individual Mentoring",
      description: "Personalized guidance and doubt clearing sessions with dedicated mentors"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Mock Interviews",
      description: "Real-time interview preparation with industry experts and HR panels"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "SBI PO 2024",
      photo: "👩‍💼",
      quote: "Kingmakers transformed my preparation strategy. The personalized mentoring and daily tests were game-changers!",
      rank: "All India Rank 12"
    },
    {
      name: "Raj Kumar",
      position: "IBPS PO 2024",
      photo: "👨‍💼",
      quote: "The hybrid learning approach helped me balance my job and exam preparation perfectly. Highly recommended!",
      rank: "All India Rank 8"
    },
    {
      name: "Meera Patel",
      position: "RBI Grade A 2024",
      photo: "👩‍🎓",
      quote: "The current affairs sessions and mock interviews gave me the confidence to crack the toughest banking exam.",
      rank: "All India Rank 15"
    }
  ];

  const branches = [
    { city: "Chennai", address: "Anna Nagar, T.Nagar, Velachery", contact: "+91 98765 43210" },
    { city: "Madurai", address: "SS Colony, KK Nagar", contact: "+91 98765 43211" },
    { city: "Trichy", address: "Cantonment, Thillai Nagar", contact: "+91 98765 43212" },
    { city: "Salem", address: "Junction, New Fairlands", contact: "+91 98765 43213" },
    { city: "Coimbatore", address: "RS Puram, Gandhipuram", contact: "+91 98765 43214" },
    { city: "Tirunelveli", address: "Town, Palayamkottai", contact: "+91 98765 43215" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Trophy className="h-4 w-4 mr-2" />
                  1000+ Successful Selections Since 2015
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Your Gateway to 
                  <span className="text-cta-orange"> Banking Success</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Transform your career with South India's most trusted coaching institute. 
                  Guaranteed results through proven teaching methods and personalized mentoring.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="cta" className="group">
                  Join Now
                  <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button size="xl" variant="cta-outline" className="group">
                  Free Demo Class
                  <Clock className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-white/80">Selections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-white/80">Branches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">9</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional banking coaching classroom"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">About Kingmakers School of Banking</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in 2015 with a mission to transform lives through educational excellence, 
                Kingmakers has become South India's premier coaching institute for Banking, SSC, 
                and Government exam preparation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower students with comprehensive knowledge, strategic preparation, 
                    and unwavering support to achieve their dream government jobs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-8 text-center">
                  <Trophy className="h-12 w-12 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Our Achievement</h3>
                  <p className="text-muted-foreground">
                    Over 1000 successful selections in prestigious banking and government 
                    positions, making us the most trusted name in exam preparation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Courses Offered</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed for success in Banking, SSC, and Government examinations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-card shadow-card border-0 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{course.name}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {course.mode}
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Kingmakers?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes us the preferred choice for thousands of successful candidates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful students who achieved their dreams with Kingmakers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card shadow-elegant border-0">
              <CardContent className="p-12">
                <div className="text-center space-y-6">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-cta-orange text-cta-orange" />
                    ))}
                  </div>
                  
                  <div className="text-6xl mb-4">{testimonials[activeTestimonial].photo}</div>
                  
                  <blockquote className="text-2xl text-foreground font-medium leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-semibold text-lg text-foreground">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonials[activeTestimonial].position}
                    </div>
                    <Badge variant="outline" className="border-success text-success">
                      {testimonials[activeTestimonial].rank}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Branch Information Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Branches</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find a Kingmakers center near you across South India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <Card key={index} className="bg-card shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{branch.city}</h3>
                    </div>
                    <p className="text-muted-foreground">{branch.address}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="font-medium">{branch.contact}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Ready to Start Your Success Journey?</h2>
            <p className="text-xl text-white/90">
              Join thousands of successful candidates who chose Kingmakers for their exam preparation. 
              Take the first step towards your dream government job today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="cta" className="group">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to a Mentor
              </Button>
              <Button size="xl" variant="cta-outline" className="group">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 98765 43210
              </Button>
            </div>
            
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/80 mb-4">Or reach us at:</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>info@kingmakersbanking.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp: +91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kingmakers School of Banking</h3>
              <p className="text-white/80 mb-4">
                South India's premier coaching institute for Banking, SSC, and Government exam preparation.
              </p>
              <div className="text-white/80">
                <p>Founded: 2015</p>
                <p>Selections: 1000+</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branches</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">IBPS PO/Clerk</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SBI PO/Clerk</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SSC CGL/CHSL</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RBI Grade A/B</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/80">
                <p>📞 +91 98765 43210</p>
                <p>📧 info@kingmakersbanking.com</p>
                <p>📍 Multiple locations across South India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>&copy; 2024 Kingmakers School of Banking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;