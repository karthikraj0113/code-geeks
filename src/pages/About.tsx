import { Target, Eye, Award, Users2, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Client First",
      description:
        "Your success is our priority. We build lasting relationships based on trust and results.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering the highest quality in every project, every time.",
    },
    {
      icon: Users2,
      title: "Collaboration",
      description:
        "Working together as one team with our clients to achieve shared goals.",
    },
  ];

  const expertise = [
    "React & Angular",
    "Node.js & Python",
    "Mobile Development",
    "Cloud (AWS, Azure)",
    "DevOps & CI/CD",
    "Quality Assurance",
    "UI/UX Design",
    "Microservices",
    "Database Design",
    "AI & Machine Learning",
    "Blockchain",
    "IoT Solutions",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About <span className="text-primary">Nexus Velocity</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empowering businesses through technology innovation since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="space-y-6 items-center md:items-start flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>

            <div className="space-y-4 text-muted-foreground max-w-xl">
              <p>
                Founded in 2008 in the heart of Bangalore's tech corridor, Nexus
                Velocity began with a simple mission: to help businesses
                leverage technology to achieve extraordinary results.
              </p>
              <p>
                What started as a small team of passionate developers has grown
                into a full-service IT solutions provider with over 200
                professionals serving clients across India and globally.
              </p>
              <p>
                Today, we're proud to be recognized as one of Bangalore's
                leading IT service companies, known for our technical
                excellence, innovative approach, and unwavering commitment to
                client success.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 place-items-center md:place-items-start">
            {[
              ["15+", "Years in Business"],
              ["500+", "Projects Completed"],
              ["150+", "Active Clients"],
              ["200+", "Team Members"],
            ].map(([num, label], i) => (
              <Card key={i} className="border-2 w-full">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">{num}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-center md:text-left">
            {[
              {
                title: "Our Mission",
                icon: Target,
                text: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.",
              },
              {
                title: "Our Vision",
                icon: Eye,
                text: "To be the most trusted IT partner for businesses worldwide, recognized for excellence and innovation.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-2 hover:border-primary/50 transition-all h-full"
              >
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto md:mx-0 mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Card
              key={i}
              className="border-2 hover:border-primary/50 transition-all h-full flex flex-col"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto md:mx-0 mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{v.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{v.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Deep technical knowledge across the modern tech stack
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {expertise.map((tech, i) => (
                <Card
                  key={i}
                  className="border-2 hover:border-primary/50 transition-all min-h-[70px] flex items-center justify-center"
                >
                  <CardContent className="text-center p-4">
                    <span className="font-medium text-sm">{tech}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
