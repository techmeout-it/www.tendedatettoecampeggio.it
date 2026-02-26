import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Facebook,
  Instagram
} from "lucide-react";

const Contact = () => {
  const contactOptions = [
    {
      icon: Facebook,
      title: "Gruppo Facebook",
      description: "Unisciti alla community e interagisci con oltre 40.000 membri",
      link: "https://www.facebook.com/groups/375926353544064",
      buttonText: "Vai al Gruppo",
      color: "from-[#1877F2] to-[#42A5F5]"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Seguici per foto, storie e aggiornamenti quotidiani",
      link: "https://www.instagram.com/tende_da_tetto_e_campeggio/",
      buttonText: "Seguici",
      color: "from-[#E4405F] to-[#F56040]"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contatti - Tende da Tetto e Campeggio"
        description="Contattaci per domande, suggerimenti o proposte di partnership. Rispondiamo rapidamente a tutti i messaggi."
        canonicalUrl={`${SITE_URL}/contatti`}
        keywords="contatti, email, partnership, assistenza"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: SITE_URL },
        { name: 'Contatti', url: `${SITE_URL}/contatti` }
      ]} />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background" aria-label="Sezione contatti">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Mail className="h-12 w-12 text-primary mr-4" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Contattaci
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Hai domande, suggerimenti o vuoi collaborare con noi? 
                Siamo sempre felici di ascoltarti!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Email Contact Card */}
              <Card className="p-8 bg-card/60 backdrop-blur border-0 mb-8">
                <div className="text-center">
                  <div className="p-4 rounded-full bg-primary/10 inline-block mb-6">
                    <Mail className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Scrivici una mail
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Per qualsiasi domanda, proposta di partnership o segnalazione, 
                    contattaci direttamente via email
                  </p>
                  <a href="mailto:info@tendedatettoecampeggio.it">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant transition-all duration-300">
                      <Mail className="h-5 w-5 mr-2" />
                      info@tendedatettoecampeggio.it
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Social Options */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {contactOptions.map((option, index) => (
                  <Card key={index} className="p-6 bg-card/60 backdrop-blur border-0 hover:shadow-elegant transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color}`}>
                        <option.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {option.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {option.description}
                        </p>
                        <a href={option.link} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className={`bg-gradient-to-r ${option.color}`}>
                            {option.buttonText}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* FAQ Teaser */}
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Hai una domanda frequente? Probabilmente la risposta è già nel nostro gruppo Facebook!
                </p>
                <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Facebook className="h-4 w-4 mr-2" />
                    Cerca nel Gruppo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
