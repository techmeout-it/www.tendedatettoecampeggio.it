import { Mountain, Facebook, Instagram, Mail, MapPin, Users, BookOpen, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigation = {
    community: [
      { name: "Unisciti su Facebook", href: "#", icon: Facebook },
      { name: "Seguici su Instagram", href: "#", icon: Instagram },
      { name: "Newsletter", href: "#newsletter", icon: Mail },
    ],
    risorse: [
      { name: "Guide & Tutorial", href: "#guide", icon: BookOpen },
      { name: "Mappa Campeggi", href: "#mappa", icon: MapPin },
      { name: "Community Forum", href: "#community", icon: Users },
    ],
    partner: [
      { name: "Diventa Partner", href: "#partner", icon: Handshake },
      { name: "Offerte Esclusive", href: "#partner", icon: Handshake },
      { name: "Brand Sponsorizzati", href: "#partner", icon: Handshake },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold text-primary">TendaTetto</h3>
                  <p className="text-sm text-muted-foreground">Community Italia</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                La community italiana più grande per gli amanti delle tende da tetto e del campeggio. 
                Condividiamo passione, esperienze e avventure.
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Navigation Sections */}
            {Object.entries(navigation).map(([section, links]) => (
              <div key={section}>
                <h4 className="font-semibold text-foreground mb-4 capitalize">
                  {section === 'risorse' ? 'Risorse' : section}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <link.icon className="h-4 w-4 mr-2" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
                <p>&copy; 2024 TendaTetto Community. Tutti i diritti riservati.</p>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-primary transition-colors">Termini di Servizio</a>
                  <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-4 md:mt-0">
                <span>Fatto con ❤️ per la community italiana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;