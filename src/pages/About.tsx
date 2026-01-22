import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
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
    { year: "2021", title: "La Nascita", description: "Fondazione del gruppo Facebook con i primi 100 appassionati" },
    { year: "2022", title: "Crescita Esplosiva", description: "Raggiunti 10.000 membri e primi eventi organizzati" },
    { year: "2023", title: "Community Consolidata", description: "25.000 membri, partnership con i principali brand" },
    { year: "2024", title: "Leader di Settore", description: "40.000+ membri, lancio del sito web ufficiale" },
  ];

  const team = [
    {
      name: "Marco Rossi",
      role: "Fondatore & Admin",
      description: "Appassionato di outdoor dal 2015, ha fondato la community per condividere la sua passione",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Sara Bianchi",
      role: "Content Manager",
      description: "Blogger di viaggi e campeggio, cura le guide e i contenuti della community",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Luca Verdi",
      role: "Community Manager",
      description: "Gestisce le interazioni quotidiane e organizza gli eventi della community",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200"
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
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Mountain className="h-12 w-12 text-primary mr-4" />
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
        <section className="py-16 bg-background">
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
                      <value.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
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

        {/* Team Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground">Il Nostro Team</h2>
                <p className="text-muted-foreground mt-2">Le persone dietro TendaTetto Community</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="p-6 text-center bg-card/60 backdrop-blur border-0 hover:shadow-elegant transition-all">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <Badge variant="secondary" className="mt-2 mb-3">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </Card>
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
