import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, Mountain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate subscription
    setIsSubscribed(true);
    toast({
      title: "Iscrizione completata!",
      description: "Riceverai presto la prima newsletter con le migliori novità della community.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur shadow-elegant">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Resta Aggiornato
                </h3>
                <p id="newsletter-description" className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Ricevi le migliori guide, le nuove destinazioni e le offerte esclusive dei nostri partner direttamente nella tua email
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" aria-label="Iscrizione newsletter">
                  <label htmlFor="newsletter-email" className="sr-only">Indirizzo email</label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="La tua email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-primary/20 focus:border-primary"
                    required
                    aria-required="true"
                    aria-describedby="newsletter-description"
                  />
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant transition-all duration-300"
                  >
                    Iscriviti
                  </Button>
                </form>
              ) : (
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Benvenuto nella community!
                  </h4>
                  <p className="text-muted-foreground">
                    Controlla la tua email per confermare l'iscrizione
                  </p>
                </div>
              )}

              <div className="mt-8 pt-8 border-t border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Mountain className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Guide Esclusive</h4>
                    <p className="text-sm text-muted-foreground">Tips e trucchi dalla community</p>
                  </div>
                  <div className="text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Newsletter Settimanale</h4>
                    <p className="text-sm text-muted-foreground">Le novità ogni venerdì</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Offerte Partner</h4>
                    <p className="text-sm text-muted-foreground">Sconti esclusivi riservati</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;