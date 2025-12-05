import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Home() {
  const services = [
    {
      icon: Code2,
      title: "App Development",
      description:
        "Custom mobile and web applications built with cutting-edge technologies.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Comprehensive testing services to ensure flawless software delivery.",
    },
    {
      icon: Zap,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description:
        "Strategic technology guidance to accelerate your digital transformation.",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "150+", label: "Happy Clients" },
    { value: "200+", label: "Team Members" },
    { value: "15+", label: "Years Experience" },
  ];

  const benefits = [
    "Agile Development Methodology",
    "Dedicated Project Managers",
    "24/7 Technical Support",
    "Transparent Communication",
    "On-time Delivery Guarantee",
    "Competitive Pricing",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Transforming Ideas into
              <span
                className="block mt-2"
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Velocity Vision
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Nexus Velocity is your trusted IT partner in Bangalore,
              delivering innovative software solutions that drive business
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business objectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <CardHeader>
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose Nexus Velocity?
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine technical expertise with business acumen to deliver
                solutions that make a real impact on your bottom line.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm text-muted-foreground">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Success Rate</span>
                        <span className="font-medium">95%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "95%" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>On-time Delivery</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "92%" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Client Retention</span>
                        <span className="font-medium">88%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "88%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Project?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with
              innovative technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Contact Us Today</Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
