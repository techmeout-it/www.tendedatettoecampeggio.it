import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, EventSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Tent,
  UtensilsCrossed,
  Music,
  Camera,
  ArrowLeft,
  ExternalLink,
  Sun,
  Dumbbell,
  Palette,
  ShoppingBag,
  Landmark,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const RadunoNazionale2026 = () => {
  const { t } = useLanguage();
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${siteUrl}/raduno-nazionale-2026`;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={t('raduno2026.title')}
        description={t('raduno2026.description')}
        canonicalUrl={canonicalUrl}
        keywords="raduno nazionale tende da tetto 2026, lago di pietrafitta, raduno campeggio, tende da tetto italia, piegaro umbria"
        ogType="website"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: siteUrl },
          { name: t('nav.events'), url: `${siteUrl}/eventi` },
          { name: t('raduno2026.mainTitle'), url: canonicalUrl }
        ]}
      />
      <EventSchema 
        name="Raduno Nazionale Tende da Tetto 2026"
        description="Il grande raduno annuale della community italiana per appassionati di tende da tetto e campeggio. Tre giorni di avventura, condivisione e divertimento sulle sponde del Lago di Pietrafitta in Umbria."
        startDate="2026-05-01T10:00:00+02:00"
        endDate="2026-05-03T18:00:00+02:00"
        location={{
          name: 'Lago di Pietrafitta',
          addressLocality: 'Piegaro',
          addressRegion: 'PG',
          addressCountry: 'IT'
        }}
        image="/img_raduni/2026.05.01-03_LagoDiPietrafitta-RadunoNazionale/Raduno_Locandina2026.jpg"
        url={canonicalUrl}
        organizer="Tende da Tetto e Campeggio Community"
        organizerUrl={siteUrl}
        eventStatus="EventScheduled"
        eventAttendanceMode="OfflineEventAttendanceMode"
        isAccessibleForFree={false}
        offers={{
          price: '30.00',
          priceCurrency: 'EUR',
          availability: 'InStock',
          url: canonicalUrl
        }}
        inLanguage="it"
      />
      <Header />
      
      <main id="main-content">
        {/* Hero con Locandina */}
        <section className="py-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <Link to="/eventi" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('raduno2026.backToEvents')}
            </Link>
            
            <div className="max-w-4xl mx-auto">
              {/* Locandina Ufficiale */}
              <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img 
                  src="/img_raduni/2026.05.01-03_LagoDiPietrafitta-RadunoNazionale/Raduno_Locandina2026.jpg"
                  alt={t('raduno2026.mainTitle')}
                  className="w-full h-auto"
                />
              </div>

              {/* Info Principali */}
              <div className="text-center mb-8">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-lg px-4 py-2">
                  <Tent className="h-5 w-5 mr-2" />
                  {t('raduno2026.nationalMeetup')}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {t('raduno2026.mainTitle')}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t('raduno2026.subtitle')}
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <Card className="p-4 bg-card/60 backdrop-blur border-l-4 border-primary">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t('raduno2026.dates')}</p>
                      <p className="text-sm text-muted-foreground">{t('raduno2026.daysOfWeek')}</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-card/60 backdrop-blur border-l-4 border-accent">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{t('raduno2026.location')}</p>
                      <p className="text-sm text-muted-foreground">{t('raduno2026.locationDetail')}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Programma */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('raduno2026.programTitle')}
                </h2>
                <p className="text-muted-foreground">
                  {t('raduno2026.programSubtitle')}
                </p>
              </div>

              {/* Giorno 1 - 1 Maggio */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary text-primary-foreground rounded-full px-4 py-2 font-bold">
                    {t('raduno2026.day1')}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{t('raduno2026.friday')}</h3>
                </div>
                
                <div className="space-y-4 ml-4 border-l-2 border-primary/30 pl-6">
                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">{t('raduno2026.from')} 12:00</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.crewArrival')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.crewArrivalDesc')}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">13:30</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.outdoorDealers')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.outdoorDealersDesc')}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">15:30</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.openingTitle')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.openingDesc')}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Giorno 2 - 2 Maggio */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent text-accent-foreground rounded-full px-4 py-2 font-bold">
                    {t('raduno2026.day2')}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{t('raduno2026.saturday')}</h3>
                </div>
                
                <div className="space-y-4 ml-4 border-l-2 border-accent/30 pl-6">
                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 rounded-full p-2 flex-shrink-0">
                        <Dumbbell className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">9:30</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.wakeUp')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.wakeUpDesc')}
                        </p>
                        <div className="mt-2 bg-secondary/50 rounded-lg p-2 text-xs text-muted-foreground">
                          <strong>{t('raduno2026.wakeUpBring')}</strong> {t('raduno2026.wakeUpItems')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 rounded-full p-2 flex-shrink-0">
                        <ShoppingBag className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">{t('raduno2026.from')} 10:00</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.outdoorDealers')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.outdoorDealersDesc')}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow border-l-4 border-amber-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-500/10 rounded-full p-2 flex-shrink-0">
                        <Palette className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">14:30</Badge>
                          <Badge className="bg-amber-500/10 text-amber-700 text-xs">{t('raduno2026.specialActivity')}</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.leaveYourMark')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.leaveYourMarkDesc')}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow border-l-4 border-green-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 rounded-full p-2 flex-shrink-0">
                        <UtensilsCrossed className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">16:30</Badge>
                          <Badge className="bg-green-500/10 text-green-700 text-xs">{t('raduno2026.reservationRequired')}</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.cookingMasterclass')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.cookingMasterclassDesc')}
                        </p>
                        <div className="mt-2 bg-secondary/50 rounded-lg p-3 text-xs text-muted-foreground space-y-1">
                          <p><strong>{t('raduno2026.toBring')}</strong> {t('raduno2026.cookingBringItems')}</p>
                          <p><strong>{t('raduno2026.onSite')}</strong> {t('raduno2026.mysteryBox')}</p>
                          <p className="text-primary"><strong>{t('raduno2026.allergies')}</strong> {t('raduno2026.contactAdmins')}</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 rounded-full p-2 flex-shrink-0">
                        <Users className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">20:30</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.communityDinner')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.communityDinnerDesc')}
                        </p>
                        <div className="mt-2 bg-secondary/50 rounded-lg p-2 text-xs text-muted-foreground">
                          <strong>{t('raduno2026.dinnerNote')}</strong> {t('raduno2026.dinnerNoteText')} <em>{t('raduno2026.shareRule')}</em>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Giorno 3 - 3 Maggio */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-600 text-white rounded-full px-4 py-2 font-bold">
                    {t('raduno2026.day3')}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{t('raduno2026.sunday')}</h3>
                </div>
                
                <div className="space-y-4 ml-4 border-l-2 border-green-600/30 pl-6">
                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600/10 rounded-full p-2 flex-shrink-0">
                        <Dumbbell className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">9:30</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.wakeUp')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.wakeUpSundayDesc')}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600/10 rounded-full p-2 flex-shrink-0">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">12:00</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{t('raduno2026.farewells')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('raduno2026.farewellsDesc')}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Sezione Costi */}
              <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 mb-12">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {t('raduno2026.costsTitle')}
                  </h2>
                  <p className="text-muted-foreground">{t('raduno2026.costsSubtitle')}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Prezzo 1 */}
                  <div className="bg-background/80 rounded-xl p-4 border border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">45€</div>
                    <div className="text-foreground font-semibold">{t('raduno2026.2adults+minors')}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('raduno2026.perNight')}</div>
                  </div>

                  {/* Prezzo 2 */}
                  <div className="bg-background/80 rounded-xl p-4 border border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">40€</div>
                    <div className="text-foreground font-semibold">{t('raduno2026.2adults')}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('raduno2026.perNight')}</div>
                  </div>

                  {/* Prezzo 3 */}
                  <div className="bg-background/80 rounded-xl p-4 border border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30€</div>
                    <div className="text-foreground font-semibold">{t('raduno2026.1adult+minors')}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('raduno2026.perNight')}</div>
                  </div>

                  {/* Prezzo 4 */}
                  <div className="bg-background/80 rounded-xl p-4 border border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20€</div>
                    <div className="text-foreground font-semibold">{t('raduno2026.1adult')}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('raduno2026.perNight')}</div>
                  </div>
                </div>

                {/* Servizi Inclusi */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    {t('raduno2026.includedServices')}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">•</span> {t('raduno2026.toiletsShowers')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">•</span> {t('raduno2026.power')}
                    </li>
                  </ul>
                </div>

                {/* Pagamenti Extra */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
                    {t('raduno2026.extraPayments')}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2 border-b border-amber-500/10">
                      <span className="font-medium text-foreground">{t('raduno2026.paleoMuseum')}</span>
                      <span className="text-muted-foreground">{t('raduno2026.paleoMuseumPrices')}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <span className="font-medium text-foreground">{t('raduno2026.glassMuseum')}</span>
                      <span className="text-muted-foreground">{t('raduno2026.glassMuseumPrices')}</span>
                    </div>
                  </div>
                </div>

                {/* Modulo Iscrizione */}
                <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-foreground text-lg mb-3 flex items-center justify-center gap-2">
                    {t('raduno2026.registrationForm')}
                  </h3>
                  <p className="text-sm mb-6 font-bold text-red-600 text-center">
                    {t('raduno2026.registrationRequired')}<br />
                    {t('raduno2026.registrationText')}
                  </p>
                  <a 
                    href="https://forms.gle/vnDQT7RLEBdpUy4c7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('raduno2026.fillForm')}
                  </a>
                </div>
              </Card>

              {/* Info Aggiuntive */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Durante le 3 giornate */}
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Tent className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-foreground text-lg">{t('raduno2026.during3Days')}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t('raduno2026.during3DaysDesc')}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    <strong>{t('raduno2026.visitorsWelcome')}</strong>
                  </p>
                </Card>

                {/* Prenotazioni */}
                <Card className="p-6 bg-accent/5 border-accent/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-foreground text-lg">{t('raduno2026.reservationActivities')}</h3>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <UtensilsCrossed className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>{t('raduno2026.cookingReservation')}</strong> - {t('raduno2026.cookingReservationTime')}</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Attività nei Dintorni */}
              <Card className="p-6 bg-background/80 backdrop-blur mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Landmark className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-foreground text-xl">{t('raduno2026.otherActivities')}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">{t('raduno2026.paleoMuseum')}</h4>
                    <p className="text-sm text-muted-foreground">{t('raduno2026.paleoMuseumDistance')}</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">{t('raduno2026.asparagusFestival')}</h4>
                    <p className="text-sm text-muted-foreground">{t('raduno2026.asparagusFestivalDesc')}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t('raduno2026.asparagusFestivalDistance')}</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">{t('raduno2026.glassMuseum')}</h4>
                    <p className="text-sm text-muted-foreground">{t('raduno2026.glassMuseumDistance')}</p>
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t('raduno2026.seeYouThere')}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {t('raduno2026.infoContact')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://www.facebook.com/groups/tendedatetto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-[#1877F2] hover:bg-[#1877F2]/90">
                      {t('raduno2026.facebookGroup')}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                  <Link to="/eventi">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {t('raduno2026.backToEvents')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RadunoNazionale2026;
