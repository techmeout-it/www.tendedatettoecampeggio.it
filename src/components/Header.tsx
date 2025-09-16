import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain, MapPin, BookOpen, Users, Handshake } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#", icon: Mountain },
    { name: "Guide", href: "#guide", icon: BookOpen },
    { name: "Mappa Campeggi", href: "#mappa", icon: MapPin },
    { name: "Community", href: "#community", icon: Users },
    { name: "Partner", href: "#partner", icon: Handshake },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">TendaTetto</h1>
              <p className="text-xs text-muted-foreground">Community Italia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70">
              Unisciti alla Community
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
                <div className="pt-4 px-4">
                  <Button className="w-full bg-gradient-to-r from-accent to-accent/80">
                    Unisciti alla Community
                  </Button>
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