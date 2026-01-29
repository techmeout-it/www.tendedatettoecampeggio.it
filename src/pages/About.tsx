import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { OrganizationSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  Users, 
  Calendar, 
  Heart, 
  Target, 
  Award,
  Facebook,
  Instagram,
  Mail
} from "lucide-react";

const About = () => {
  const milestones = [
    { 
      year: "2026", 
      title: "Un Nuovo Capitolo", 
      description: "Il 2026 si apre come un anno ricco di novità e nuove energie. Il lancio di questo sito segna un passo importante per la community, che ora ha una casa digitale tutta sua dove ritrovarsi, informarsi e condividere esperienze. All'orizzonte ci sono nuove avventure, raduni sempre più coinvolgenti e collaborazioni che porteranno valore a tutti gli iscritti. La voglia di crescere insieme non si ferma e questo sarà l'anno in cui molte idee prenderanno finalmente forma, continuando a rafforzare lo spirito che da sempre contraddistingue la nostra grande famiglia." 
    },
    { 
      year: "2025", 
      title: "La Festa Continua", 
      description: "La community è più viva che mai: i canali social sono attivi e rappresentano un punto di riferimento per tanti appassionati. Il confronto in un clima di amicizia rimane il valore centrale, sia online che durante gli eventi. La famiglia degli amministratori si allarga con Fe di Busto e Igor, che portano nuove idee per far crescere ancora di più il mondo delle tende da tetto e del campeggio. Sempre più aziende credono nella forza del gruppo e propongono vantaggi dedicati agli iscritti." 
    },
    { 
      year: "2024", 
      title: "Leader di Settore", 
      description: "I numeri parlano chiaro: la community è la più grande e attiva, sia online che dal vivo. Per chi vuole avvicinarsi al mondo delle tende da tetto, iscriversi al gruppo e partecipare a un evento diventa quasi un passaggio naturale. Oltre alle discussioni e ai contenuti di ispirazione, arrivano anche i primi vantaggi esclusivi come sconti e promozioni." 
    },
    { 
      year: "2023", 
      title: "Community Consolidata", 
      description: "La crescita continua e il gruppo diventa un punto di riferimento per chi possiede una tenda da tetto, per chi sta pensando di acquistarla e anche per chi viaggia con altri mezzi. Si parla di viaggi, camperizzazioni, esperienze e dubbi, trovando nei post e nei commenti risposte utili e concrete. Gli eventi, sempre più numerosi, confermano quanto la forza della community online si trasformi in realtà." 
    },
    { 
      year: "2022", 
      title: "Crescita Esplosiva", 
      description: "Il gruppo cresce in modo esponenziale, spinto dal desiderio di sempre più persone di vivere la libertà all'aria aperta. Dai campeggiatori esperti ai neofiti, tantissimi nuovi membri trovano un ambiente positivo, costruttivo e ricco di confronto. Lo stesso spirito si riflette negli eventi, sempre molto partecipati." 
    },
    { 
      year: "2021", 
      title: "La Nascita", 
      description: "L'idea prende forma quando Piero, durante la ricerca della sua prima tenda da tetto, decide di creare un gruppo dedicato. Le prime iscrizioni arrivano subito e, dopo qualche mese, Natalia si offre di dare una mano nella gestione. Da lì in poi la storia decolla: il primo raduno supera i 50 mezzi e le prime connessioni, nate online, diventano incontri reali." 
    },
  ];

  const values = [
    { icon: Heart, title: "Passione", description: "Amiamo l'avventura e la vita all'aria aperta" },
    { icon: Users, title: "Community", description: "Insieme siamo più forti, condividiamo esperienze" },
    { icon: Target, title: "Qualità", description: "Solo contenuti verificati e consigli affidabili" },
    { icon: Award, title: "Rispetto", description: "Per la natura, per gli altri, per le regole" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Chi Siamo - Community Italiana Tende da Tetto e Campeggio"
        description="Scopri la community più grande in Italia dedicata alle tende da tetto e al campeggio. Dal 2021 uniamo appassionati di tutta Italia per condividere esperienze, consigli e avventure indimenticabili."
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/chi-siamo` : ''}
        keywords="community tende da tetto, community campeggio, campeggio italia, roof tent community, chi siamo"
        ogType="website"
      />
      <OrganizationSchema />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background" aria-label="Chi siamo - Introduzione">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Mountain className="h-12 w-12 text-primary mr-4" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Chi Siamo
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Siamo la più grande community italiana dedicata alle tende da tetto 
                e al campeggio. Dal 2021 uniamo appassionati di tutta Italia 
                per condividere esperienze, consigli e avventure indimenticabili.
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Mail className="h-5 w-5 mr-2" />
                  Contattaci
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background" aria-label="Missione della community">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    La Nostra Missione
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Vogliamo essere il punto di riferimento per tutti gli italiani 
                    che amano viaggiare con la tenda da tetto. Crediamo che il campeggio 
                    sia molto più di un modo di viaggiare: è uno stile di vita che 
                    ci connette con la natura e con altre persone che condividono 
                    la nostra stessa passione.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Attraverso guide pratiche, recensioni oneste, una mappa dei 
                    migliori campeggi e una community attiva, aiutiamo i nostri 
                    membri a vivere esperienze di campeggio sempre migliori.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <Card key={index} className="p-6 text-center bg-card/60 backdrop-blur border-0 hover:shadow-elegant transition-all">
                      <value.icon className="h-10 w-10 text-primary mx-auto mb-3" aria-hidden="true" />
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-secondary/20" aria-label="Il nostro team">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" aria-hidden="true" />
                <h2 className="text-3xl font-bold text-foreground">Il Team di Tende da Tetto</h2>
                <p className="text-muted-foreground mt-2">Le persone che rendono possibile questa community</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Piero</h3>
                  <p className="text-muted-foreground">Campeggiatore da sempre, appassionato e con una profonda conoscenza tecnica del settore.</p>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Natalia</h3>
                  <p className="text-muted-foreground">Campeggiatrice attiva con auto berline, vanta una grande esperienza nell'equipaggiamento outdoor e nella camperizzazione.</p>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Andrea</h3>
                  <p className="text-muted-foreground">Campeggiatore in tenda da tetto e motociclista con tenda a terra, ha all'attivo numerosi viaggi in tutta Europa fino a Capo Nord.</p>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Igor</h3>
                  <p className="text-muted-foreground">Campeggiatore e survivalista, porta con sé un'importante esperienza personale e professionale nel settore commerciale.</p>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all md:col-span-2">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Andrea e Luca</h3>
                  <p className="text-muted-foreground">La community può contare sul lavoro dei webmaster Andrea e Luca, che si occupano della gestione tecnica del sito e dello sviluppo degli strumenti digitali dedicati al gruppo. Oltre alle competenze informatiche, condividono una forte passione per l'outdoor e sono esperti viaggiatori: proprio questa combinazione di esperienza sul campo e abilità tecniche li porta a supportare realtà come Tende da Tetto, contribuendo alla crescita e all'evoluzione della community.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background" aria-label="Timeline - La nostra storia">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" aria-hidden="true" />
                <h2 className="text-3xl font-bold text-foreground">La Nostra Storia</h2>
              </div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                        {milestone.year}
                      </Badge>
                    </div>
                    <Card className="flex-1 p-6 bg-card/60 backdrop-blur border-0">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Unisciti a Noi!
              </h2>
              <p className="text-muted-foreground mb-8">
                Entra a far parte della community e inizia a condividere le tue avventure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#1877F2] to-[#42A5F5]">
                    <Facebook className="h-5 w-5 mr-2" />
                    Gruppo Facebook
                  </Button>
                </a>
                <a href="https://www.instagram.com/tende_da_tetto_e_campeggio/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#E4405F] text-[#E4405F] hover:bg-[#E4405F] hover:text-white">
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </Button>
                </a>
                <Link to="/contatti">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Mail className="h-5 w-5 mr-2" />
                    Contattaci
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
