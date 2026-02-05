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
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const milestones = [
    { 
      year: "2026", 
      title: t('about.milestone2026Title'), 
      description: t('about.milestone2026Desc')
    },
    { 
      year: "2025", 
      title: t('about.milestone2025Title'), 
      description: t('about.milestone2025Desc')
    },
    { 
      year: "2024", 
      title: t('about.milestone2024Title'), 
      description: t('about.milestone2024Desc')
    },
    { 
      year: "2023", 
      title: t('about.milestone2023Title'), 
      description: t('about.milestone2023Desc')
    },
    { 
      year: "2022", 
      title: t('about.milestone2022Title'), 
      description: t('about.milestone2022Desc')
    },
    { 
      year: "2021", 
      title: t('about.milestone2021Title'), 
      description: t('about.milestone2021Desc')
    },
  ];

  const values = [
    { icon: Heart, title: t('about.valuePassion'), description: t('about.valuePassionDesc') },
    { icon: Users, title: t('about.valueCommunity'), description: t('about.valueCommunityDesc') },
    { icon: Target, title: t('about.valueQuality'), description: t('about.valueQualityDesc') },
    { icon: Award, title: t('about.valueRespect'), description: t('about.valueRespectDesc') },
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
                  {t('about.title')}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {t('about.description')}
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Mail className="h-5 w-5 mr-2" />
                  {t('about.contactUs')}
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
                    {t('about.missionTitle')}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('about.missionText1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.missionText2')}
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
                <h2 className="text-3xl font-bold text-foreground">{t('about.teamTitle')}</h2>
                <p className="text-muted-foreground mt-2">{t('about.teamSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Piero</h3>
                  <p className="text-muted-foreground">{t('about.pieroDesc')}</p>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Natalia</h3>
                  <p className="text-muted-foreground">{t('about.nataliaDesc')}</p>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Andrea</h3>
                  <p className="text-muted-foreground">{t('about.andreaDesc')}</p>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Igor</h3>
                  <p className="text-muted-foreground">{t('about.igorDesc')}</p>
                </Card>
                <Card className="p-6 bg-card/80 backdrop-blur border-0 hover:shadow-elegant transition-all md:col-span-2">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Andrea e Luca</h3>
                  <p className="text-muted-foreground">{t('about.webmastersDesc')}</p>
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
                <h2 className="text-3xl font-bold text-foreground">{t('about.historyTitle')}</h2>
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
                {t('about.joinUs')}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('about.joinUsDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#1877F2] to-[#42A5F5]">
                    <Facebook className="h-5 w-5 mr-2" />
                    {t('about.facebookGroup')}
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
                    {t('about.contactUs')}
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
