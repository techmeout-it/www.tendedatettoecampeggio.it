import { Facebook, Instagram, Mail, MapPin, Users, BookOpen, Handshake, Info, Calendar, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoTende from "@/assets/logo_tende.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const navigation = {
    community: [
      { name: t('footer.joinFacebook'), href: "https://www.facebook.com/groups/375926353544064", icon: Facebook, external: true },
      { name: t('footer.followInstagram'), href: "https://www.instagram.com/tende_da_tetto_e_campeggio/", icon: Instagram, external: true },
      { name: t('footer.newsletter'), href: "/coming-soon", icon: Mail, external: false },
      { name: t('footer.eventsLink'), href: "/eventi", icon: Calendar, external: false },
      { name: t('footer.aboutUs'), href: "/chi-siamo", icon: Info, external: false },
    ],
    risorse: [
      { name: t('footer.guides'), href: "/guide", icon: BookOpen, external: false },
      { name: t('footer.faq'), href: "/faq", icon: HelpCircle, external: false },
    ],
    partner: [
      { name: t('footer.becomePartner'), href: "/contatti", icon: Handshake, external: false },
      { name: t('footer.exclusiveOffers'), href: "/#partner", icon: Handshake, external: false },
      { name: t('footer.sponsoredBrands'), href: "/#partner", icon: Handshake, external: false },
    ],
  };

  return (
    <>
    <footer className="bg-primary/10 border-t border-primary/20">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-3">
                <img src={logoTende} alt="Tende da Tetto Community" loading="lazy" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-contain bg-white p-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Tende da Tetto</h3>
                  <p className="text-sm font-semibold text-foreground">e Campeggio</p>
                  <p className="text-xs text-muted-foreground">Community Italia</p>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {t('footer.description')}
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
                  {section === 'risorse' ? t('footer.resources') : section === 'partner' ? t('footer.partner') : t('footer.community')}
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
                      ) : link.href.includes('#') ? (
                        <Link
                          to={link.href}
                          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => {
                            const hash = link.href.split('#')[1];
                            if (hash) {
                              // Se l'elemento esiste nella pagina corrente, scrolla direttamente
                              const element = document.getElementById(hash);
                              if (element) {
                                setTimeout(() => {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                              }
                            }
                          }}
                        >
                          <link.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                          {link.name}
                        </Link>
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
          <div className="pt-6 border-t border-primary/20">
            <div className="flex flex-col items-center space-y-2">
              {/* Copyright e P.IVA sulla stessa riga */}
              <p className="text-sm text-muted-foreground text-center">
                &copy; 2026 Tende da Tetto e Campeggio. {t('footer.rights')} <span className="mx-2">|</span> <span className="font-medium">P.IVA: 04139200242</span>
              </p>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="https://www.iubenda.com/privacy-policy/42273347" className="iubenda-white iubenda-noiframe iubenda-embed text-muted-foreground hover:text-primary transition-colors" title="Privacy Policy">{t('footer.privacy')}</a>
                <span className="text-muted-foreground/50">•</span>
                <Link to="/termini" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
                <span className="text-muted-foreground/50">•</span>
                <a href="https://www.iubenda.com/privacy-policy/42273347/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed text-muted-foreground hover:text-primary transition-colors" title="Cookie Policy">{t('footer.cookies')}</a>
              </div>
              
              {/* Credits */}
              <p className="text-xs text-muted-foreground/70 pt-2">
                Realizzato con il ❤️ per la Community Italiana da{' '}
                <span className="font-medium">🔥R-Fyah DEV</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* Luca Berton Network */}
    <div className="bg-muted/30 border-t border-border/50 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground/60">
          {[
            { name: 'Luca Berton', href: 'https://lucaberton.com/', title: 'AI & Cloud Advisor' },
            { name: 'Ansible Pilot', href: 'https://www.ansiblepilot.com/', title: '772+ Ansible Tutorials' },
            { name: 'Ansible by Example', href: 'https://www.ansiblebyexample.com/', title: 'Ansible Books & Resources' },
            { name: 'Open Empower', href: 'https://www.openempower.com/', title: 'AI Platform Engineering Consultancy' },
            { name: 'K8s Recipes', href: 'https://kubernetes.recipes/', title: 'Kubernetes Recipe Book' },
            { name: 'Terraform Pilot', href: 'https://www.terraformpilot.com/', title: 'Terraform Automation Mastery' },
            { name: 'CopyPasteLearn', href: 'https://www.copypastelearn.com/', title: 'Learn IT by Doing' },
            { name: 'ProteinLens', href: 'https://www.proteinlens.com/', title: 'AI Macro Nutrition Tracker' },
            { name: 'TechMeOut', href: 'https://www.techmeout.it/', title: 'TechMeOut — Sviluppo Web Professionale' },
          ].map((site, i, arr) => (
            <span key={site.name} className="inline-flex items-center">
              <a
                href={site.href}
                title={site.title}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-primary transition-colors ${
                  site.href === 'https://www.techmeout.it/' ? 'text-primary font-medium' : ''
                }`}
              >
                {site.name}
              </a>
              {i < arr.length - 1 && <span className="ml-4 text-muted-foreground/30">·</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  </>;
};

export default Footer;