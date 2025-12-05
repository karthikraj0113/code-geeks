import {
  Code2,
  TestTube,
  Cloud,
  Settings,
  Smartphone,
  Globe,
  Database,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom App Development",
      description:
        "End-to-end application development services for web and mobile platforms using modern frameworks and technologies.",
      features: [
        "Web Application Development",
        "Enterprise Software Solutions",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: [
        "iOS App Development",
        "Android App Development",
        "React Native & Flutter",
        "Mobile App Maintenance",
      ],
    },
    {
      icon: TestTube,
      title: "Quality Assurance & Testing",
      description:
        "Comprehensive testing services to ensure your software is reliable, secure, and performs flawlessly.",
      features: [
        "Manual & Automated Testing",
        "Performance Testing",
        "Security Testing",
        "Test Strategy & Planning",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Cloud consulting, migration, and management services to help you leverage the full potential of cloud computing.",
      features: [
        "Cloud Migration Services",
        "AWS & Azure Solutions",
        "Cloud Infrastructure Design",
        "Managed Cloud Services",
      ],
    },
    {
      icon: Settings,
      title: "DevOps Services",
      description:
        "Streamline your development and operations with our expert DevOps consulting and implementation services.",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Logging",
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "CMS Development",
        "Website Maintenance",
      ],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description:
        "Database design, optimization, and management services for optimal data storage and retrieval.",
      features: [
        "Database Architecture",
        "SQL & NoSQL Solutions",
        "Database Migration",
        "Performance Tuning",
      ],
    },
    {
      icon: Shield,
      title: "IT Consulting",
      description:
        "Strategic technology guidance to help you make informed decisions and achieve your business objectives.",
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "Architecture Review",
        "Technical Audits",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your business needs, challenges, and goals.",
    },
    {
      step: "02",
      title: "Planning",
      description: "Creating detailed project plan and technical architecture.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Building your solution with agile methodology and best practices.",
    },
    {
      step: "04",
      title: "Testing",
      description: "Rigorous testing to ensure quality and performance.",
    },
    {
      step: "05",
      title: "Deployment",
      description:
        "Smooth deployment with minimal disruption to your operations.",
    },
    {
      step: "06",
      title: "Support",
      description:
        "Ongoing maintenance and support to ensure continued success.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            {/* FIX → Primary color */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our <span className="text-primary">Services</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive IT solutions designed to accelerate your digital
              transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base pt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="text-4xl font-bold text-primary/20">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technologies We Work With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging the latest and most reliable technologies
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "React",
            "Angular",
            "Vue.js",
            "Node.js",
            "Python",
            "Java",
            "React Native",
            "Flutter",
            "iOS",
            "Android",
            "AWS",
            "Azure",
            "Docker",
            "Kubernetes",
            "Jenkins",
            "MongoDB",
            "PostgreSQL",
            "MySQL",
          ].map((tech, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-md"
            >
              <CardContent className="p-4 text-center">
                <span className="font-medium">{tech}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss your project requirements and how we can help
                bring your vision to life.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
