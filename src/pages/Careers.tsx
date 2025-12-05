import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Trophy,
  Zap,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "Flexible working hours and remote work options to help you maintain a healthy balance.",
    },
    {
      icon: Trophy,
      title: "Growth Opportunities",
      description:
        "Clear career progression paths with regular training and skill development programs.",
    },
    {
      icon: Zap,
      title: "Innovative Projects",
      description:
        "Work on cutting-edge technologies and challenging projects for global clients.",
    },
    {
      icon: Users,
      title: "Great Culture",
      description:
        "Collaborative environment with talented colleagues and supportive leadership.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "5+ years",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      location: "Bangalore",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Selenium", "Java", "API Testing", "CI/CD"],
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Bangalore / Remote",
      type: "Full-time",
      experience: "4+ years",
      skills: ["React Native", "iOS", "Android", "Flutter"],
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Bangalore",
      type: "Full-time",
      experience: "3+ years",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Bangalore",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      title: "Project Manager",
      department: "Management",
      location: "Bangalore",
      type: "Full-time",
      experience: "6+ years",
      skills: ["Agile", "Scrum", "Stakeholder Management", "JIRA"],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Join Our <span className="text-primary">Team</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Build your career with one of Bangalore's leading IT service
              companies.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Why Work With Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in creating an environment where people thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore exciting opportunities to grow your career
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {openPositions.map((position, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all"
            >
              <CardContent className="p-6 space-y-4">
                {/* FIX: Mobile-safe vertical layout */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-semibold">{position.title}</h3>

                    {/* FIX: Wrapped metadata cleanly */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4" /> {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4" /> {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4" /> {position.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{position.experience}</Badge>
                      {position.skills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                      {position.skills.length > 3 && (
                        <Badge variant="outline">
                          +{position.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* FIX: Button stays visible on mobile */}
                  <div className="sm:self-center">
                    <Button asChild size="lg">
                      <Link to="/contact">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 max-w-4xl mx-auto">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-muted-foreground">
              Send us your resume anyway! We may have upcoming opportunities.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Send Your Resume</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
