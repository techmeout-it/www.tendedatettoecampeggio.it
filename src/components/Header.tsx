import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain, MapPin, BookOpen, Users, Handshake, Info, Calendar } from "lucide-react";
import logoTende from "@/assets/logo_tende.jpg";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: isHomePage ? "#" : "/", icon: Mountain, isRoute: !isHomePage },
    { name: t('nav.blog'), href: "/guide", icon: BookOpen, isRoute: true },
    // { name: "Campeggi", href: "/campeggi", icon: MapPin, isRoute: true }, // TODO: Da riattivare in futuro
    { name: t('nav.community'), href: isHomePage ? "#community" : "/#community", icon: Users, isRoute: false },
    { name: t('nav.events'), href: "/eventi", icon: Calendar, isRoute: true },
    { name: t('nav.partner'), href: isHomePage ? "#partner" : "/#partner", icon: Handshake, isRoute: false },
    { name: t('nav.about'), href: "/chi-siamo", icon: Info, isRoute: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" aria-label="Torna alla homepage">
            <img src={logoTende} alt="Tende da Tetto Community" loading="eager" className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full object-contain bg-white p-1" />
            <div>
              <h1 className="text-2xl font-bold text-foreground leading-tight">Tende da Tetto</h1>
              <p className="text-base font-semibold text-foreground">e Campeggio</p>
              <p className="text-xs text-muted-foreground">Community Italiana</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Navigazione principale">
            {navigation.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-1 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              )
            ))}
          </nav>

          {/* CTA Button & Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90">
                {t('nav.join')}
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Apri menu di navigazione" aria-expanded={isOpen}>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  item.isRoute ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  )
                ))}
                <div className="pt-4 px-4 space-y-4">
                  <div className="flex justify-center">
                    <LanguageSelector />
                  </div>
                  <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90">
                      {t('nav.join')}
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;