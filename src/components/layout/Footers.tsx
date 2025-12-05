import { Link } from "react-router-dom";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footers() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12">
        {/* Make whole footer centered on mobile */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <img
                src="/public/favicon.png"
                alt="Nexus Velocity"
                className="h-10 w-10"
              />
              <span className="text-lg font-bold">Nexus Velocity</span>
            </div>

            <p className="text-sm text-muted-foreground max-w-xs">
              Leading IT solutions provider in Bangalore, delivering innovative
              technology services to businesses worldwide.
            </p>

            <div className="flex space-x-3 justify-center md:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>App Development</li>
              <li>Quality Assurance</li>
              <li>Cloud Solutions</li>
              <li>DevOps Services</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 80 1234 5678</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@nexusvelocity.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
