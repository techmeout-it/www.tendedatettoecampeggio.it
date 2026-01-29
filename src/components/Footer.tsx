import { Facebook, Instagram, Mail, MapPin, Users, BookOpen, Handshake, Info, Rss, Calendar, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoTende from "@/assets/logo_tende.jpg";

const Footer = () => {
  const navigation = {
    community: [
      { name: "Unisciti su Facebook", href: "https://www.facebook.com/groups/375926353544064", icon: Facebook, external: true },
      { name: "Seguici su Instagram", href: "https://www.instagram.com/tende_da_tetto_e_campeggio/", icon: Instagram, external: true },
      { name: "Newsletter", href: "/coming-soon", icon: Mail, external: false },
      { name: "RSS Feed", href: "/api/rss.xml", icon: Rss, external: true },
      { name: "Eventi e Raduni", href: "/eventi", icon: Calendar, external: false },
      { name: "Chi Siamo", href: "/chi-siamo", icon: Info, external: false },
    ],
    risorse: [
      { name: "Guide & Tutorial", href: "/guide", icon: BookOpen, external: false },
      { name: "Domande Frequenti", href: "/faq", icon: HelpCircle, external: false },
    ],
    partner: [
      { name: "Diventa Partner", href: "/contatti", icon: Handshake, external: false },
      { name: "Offerte Esclusive", href: "/coming-soon", icon: Handshake, external: false },
      { name: "Brand Sponsorizzati", href: "/coming-soon", icon: Handshake, external: false },
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
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <img src={logoTende} alt="Tende da Tetto Community" loading="lazy" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Tende da Tetto</h3>
                  <p className="text-sm text-muted-foreground">Community Italia</p>
                </div>
              </Link>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                La community italiana più grande per gli amanti delle tende da tetto e del campeggio. 
                Condividiamo passione, esperienze e avventure.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer" aria-label="Seguici su Facebook">
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Facebook className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/tende_da_tetto_e_campeggio/" target="_blank" rel="noopener noreferrer" aria-label="Seguici su Instagram">
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </a>
                <Link to="/contatti" aria-label="Contattaci via email">
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
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
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                        >
                          <link.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                          {link.name}
                        </a>
                      ) : link.href.startsWith('#') ? (
                        <a
                          href={link.href}
                          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                        >
                          <link.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                        >
                          <link.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                          {link.name}
                        </Link>
                      )}
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
                <p>&copy; 2026 TendaTetto Community. Tutti i diritti riservati.</p>
                <div className="flex space-x-6">
                  <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                  <Link to="/termini" className="hover:text-primary transition-colors">Termini di Servizio</Link>
                  <Link to="/cookie" className="hover:text-primary transition-colors">Cookie Policy</Link>
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