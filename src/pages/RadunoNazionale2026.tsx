import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${siteUrl}/raduno-nazionale-2026`;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Raduno Nazionale Tende da Tetto 2026 - Lago di Pietrafitta"
        description="Raduno Nazionale Tende da Tetto 2026: 1-2-3 maggio al Lago di Pietrafitta, Umbria. Tre giorni di avventura, condivisione e divertimento con la community."
        canonicalUrl={canonicalUrl}
        keywords="raduno nazionale tende da tetto 2026, lago di pietrafitta, raduno campeggio, tende da tetto italia, piegaro umbria"
        ogType="website"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Eventi', url: `${siteUrl}/eventi` },
          { name: 'Raduno Nazionale 2026', url: canonicalUrl }
        ]}
      />
      <Header />
      
      <main id="main-content">
        {/* Hero con Locandina */}
        <section className="py-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <Link to="/eventi" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Torna agli Eventi
            </Link>
            
            <div className="max-w-4xl mx-auto">
              {/* Locandina Ufficiale */}
              <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img 
                  src="/img_raduni/2026.05.01-03_LagoDiPietrafitta-RadunoNazionale/Raduno_Locandina2026.jpg"
                  alt="Locandina Raduno Nazionale Tende da Tetto 2026"
                  className="w-full h-auto"
                />
              </div>

              {/* Info Principali */}
              <div className="text-center mb-8">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-lg px-4 py-2">
                  <Tent className="h-5 w-5 mr-2" />
                  Raduno Nazionale
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Raduno Nazionale Tende da Tetto 2026
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Tre giorni di avventura, condivisione e divertimento sulle sponde del Lago di Pietrafitta
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <Card className="p-4 bg-card/60 backdrop-blur border-l-4 border-primary">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">1 - 2 - 3 Maggio 2026</p>
                      <p className="text-sm text-muted-foreground">Venerdì, Sabato, Domenica</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-card/60 backdrop-blur border-l-4 border-accent">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Lago di Pietrafitta</p>
                      <p className="text-sm text-muted-foreground">Frazione di Piegaro (PG), Umbria</p>
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
                  Programma del Raduno
                </h2>
                <p className="text-muted-foreground">
                  Tre giorni ricchi di attività per grandi e piccini
                </p>
              </div>

              {/* Giorno 1 - 1 Maggio */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary text-primary-foreground rounded-full px-4 py-2 font-bold">
                    GIORNO 1
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Venerdì 1 Maggio</h3>
                </div>
                
                <div className="space-y-4 ml-4 border-l-2 border-primary/30 pl-6">
                  <Card className="p-4 bg-background/80 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">dalle 12:00</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Arrivo Equipaggi</h4>
                        <p className="text-muted-foreground text-sm">
                          Accoglienza e consegna gadget di benvenuto a tutti i partecipanti.
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
                        <h4 className="font-semibold text-foreground mb-1">Apertura Raduno</h4>
                        <p className="text-muted-foreground text-sm">
                          Inizio ufficiale del Raduno Nazionale 2026!
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
                    GIORNO 2
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Sabato 2 Maggio</h3>
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
                        <h4 className="font-semibold text-foreground mb-1">Risveglio Muscolare con Francesca</h4>
                        <p className="text-muted-foreground text-sm">
                          Attività aperta a tutti, grandi e piccini! Un po' di ginnastica prima di iniziare la giornata.
                        </p>
                        <div className="mt-2 bg-secondary/50 rounded-lg p-2 text-xs text-muted-foreground">
                          <strong>Da portare:</strong> tappetino/asciugamano
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
                          <Badge variant="outline" className="text-xs">dalle 10:00</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Area Rivenditori Outdoor</h4>
                        <p className="text-muted-foreground text-sm">
                          Per tutta la durata dell'evento sarà disponibile l'area dedicata ai rivenditori del settore outdoor.
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
                          <Badge className="bg-amber-500/10 text-amber-700 text-xs">Attività Speciale</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Lasciamo il Segno!</h4>
                        <p className="text-muted-foreground text-sm">
                          Ognuno di voi lascerà la propria impronta! Sarete chiamati a scegliere il colore dell'avventura! 
                          Per adulti e bambini sarà un momento di condivisione e ricordi "indelebili"... tranquilli, 
                          non sarà un tatuaggio ma qualcosa di più!
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
                          <Badge className="bg-green-500/10 text-green-700 text-xs">Prenotazione Richiesta</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Apericampeggio - Masterclass di Cucina</h4>
                        <p className="text-muted-foreground text-sm">
                          Cuciniamo e mangiamo tutti insieme! Masterclass di cucina veloce e gustosa da fare durante 
                          le avventure in tenda: portate fornelli e fantasia! Sarà un momento dove adulti e bambini uniscono le forze!
                        </p>
                        <div className="mt-2 bg-secondary/50 rounded-lg p-3 text-xs text-muted-foreground space-y-1">
                          <p><strong>Da portare:</strong> salumi/formaggi/verdure a scelta, 60gr di olio d'oliva o 70gr di burro, sale, padella antiaderente (24/26cm), mattarello</p>
                          <p><strong>In loco troverete:</strong> una mistery box di tutto rispetto!</p>
                          <p className="text-primary"><strong>Per intolleranze alimentari:</strong> contattare gli amministratori</p>
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
                        <h4 className="font-semibold text-foreground mb-1">Cena Comunitaria</h4>
                        <p className="text-muted-foreground text-sm">
                          Se l'aperitivo non basta, è arrivata l'ora della cena tutti insieme! Uniamo i tavoli per 
                          concludere insieme la giornata sotto il cielo stellato attorno ad un fuoco.
                        </p>
                        <div className="mt-2 bg-secondary/50 rounded-lg p-2 text-xs text-muted-foreground">
                          <strong>Per la cena:</strong> ogni equipaggio dovrà provvedere al proprio pasto. Vige la regola: <em>condividiamo!</em>
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
                    GIORNO 3
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Domenica 3 Maggio</h3>
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
                        <h4 className="font-semibold text-foreground mb-1">Risveglio Muscolare con Francesca</h4>
                        <p className="text-muted-foreground text-sm">
                          Le calorie della sera precedente vanno smaltite!
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
                        <h4 className="font-semibold text-foreground mb-1">Saluti e Ringraziamenti</h4>
                        <p className="text-muted-foreground text-sm">
                          Chiusura del raduno e saluti da parte dello staff.
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
                    💰 Costi di Partecipazione
                  </h2>
                  <p className="text-muted-foreground">Prezzi per notte ad equipaggio</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Prezzo 1 */}
                  <div className="bg-background/80 rounded-xl p-4 border border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">45€</div>
                    <div className="text-foreground font-semibold">2 Adulti + Minori</div>
                    <div className="text-xs text-muted-foreground mt-1">a notte per equipaggio</div>
                  </div>

                  {/* Prezzo 2 */}
                  <div className="bg-background/80 rounded-xl p-4 border border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">40€</div>
                    <div className="text-foreground font-semibold">2 Adulti</div>
                    <div className="text-xs text-muted-foreground mt-1">a notte per equipaggio</div>
                  </div>

                  {/* Prezzo 3 */}
                  <div className="bg-background/80 rounded-xl p-4 border border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30€</div>
                    <div className="text-foreground font-semibold">1 Adulto + Minori</div>
                    <div className="text-xs text-muted-foreground mt-1">a notte per equipaggio</div>
                  </div>

                  {/* Prezzo 4 */}
                  <div className="bg-background/80 rounded-xl p-4 border border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20€</div>
                    <div className="text-foreground font-semibold">1 Adulto</div>
                    <div className="text-xs text-muted-foreground mt-1">a notte per equipaggio</div>
                  </div>
                </div>

                {/* Servizi Inclusi */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    ✅ Servizi Inclusi nel prezzo
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">•</span> Servizi igienici e docce calde
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">•</span> Corrente per ricarica device (cellulari, power bank, power station, tablet, luci, cam, droni...)
                    </li>
                  </ul>
                </div>

                {/* Pagamenti Extra */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
                    ℹ️ Pagamenti Extra (facoltativi)
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2 border-b border-amber-500/10">
                      <span className="font-medium text-foreground">🦕 Museo Paleontologico</span>
                      <span className="text-muted-foreground">Intero 4€ • Ridotto 2€ • Gratuito under 18</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <span className="font-medium text-foreground">🏺 Museo del Vetro di Piegaro</span>
                      <span className="text-muted-foreground">Intero 4€ • 7-17 anni 2,50€ • Gratuito under 7</span>
                    </div>
                  </div>
                </div>

                {/* Modulo Iscrizione */}
                <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-foreground text-lg mb-3 flex items-center justify-center gap-2">
                    📋 Modulo di Iscrizione
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    <strong className="text-foreground">OBBLIGATORIO:</strong> Per partecipare al raduno è necessario compilare e accettare in tutte le sue parti il modulo di iscrizione.
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    Una volta compilato, il modulo dovrà essere inviato via email a: <br />
                    <a href="mailto:info@tendedatettoecampeggio.it" className="text-primary font-semibold hover:underline">
                      info@tendedatettoecampeggio.it
                    </a>
                  </p>
                  <a 
                    href="/img_raduni/2026.05.01-03_LagoDiPietrafitta-RadunoNazionale/ModuloIscrizioneRaduno2026.pdf"
                    download="ModuloIscrizioneRaduno2026.pdf"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Scarica Modulo di Iscrizione (PDF)
                  </a>
                </div>
              </Card>

              {/* Info Aggiuntive */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Durante le 3 giornate */}
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Tent className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-foreground text-lg">Durante le 3 Giornate</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Sarà possibile toccare con "mano" e valutare tende, camperizzazioni e accessori.
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    <strong>L'evento sarà aperto anche a visitatori giornalieri.</strong>
                  </p>
                </Card>

                {/* Prenotazioni */}
                <Card className="p-6 bg-accent/5 border-accent/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-foreground text-lg">Attività su Prenotazione</h3>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <UtensilsCrossed className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Apericampeggio</strong> - Sabato 2 Maggio h 16:30</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Attività nei Dintorni */}
              <Card className="p-6 bg-background/80 backdrop-blur mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Landmark className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-foreground text-xl">Altre Attività nei Dintorni</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🦕 Museo Paleontologico</h4>
                    <p className="text-sm text-muted-foreground">Distanza: 1500m a piedi</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🥗 Sagra dell'Asparago</h4>
                    <p className="text-sm text-muted-foreground">Stand gastronomici, giochi per bambini, mercatini</p>
                    <p className="text-xs text-muted-foreground mt-1">Distanza: 2000m</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🏺 Museo del Vetro di Piegaro</h4>
                    <p className="text-sm text-muted-foreground">Distanza: circa 15-20 minuti in auto</p>
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ci vediamo al Lago di Pietrafitta!
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Per informazioni e prenotazioni delle attività, contatta gli amministratori 
                  tramite il gruppo Facebook della community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://www.facebook.com/groups/tendedatetto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-[#1877F2] hover:bg-[#1877F2]/90">
                      Gruppo Facebook
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                  <Link to="/eventi">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Torna agli Eventi
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
