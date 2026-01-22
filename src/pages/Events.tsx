import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { EventSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight,
  Mountain,
  Tent,
  Clock,
  AlertCircle
} from "lucide-react";

interface EventItem {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  region: string;
  type: 'raduno' | 'evento' | 'workshop';
  attendees?: number;
  maxAttendees?: number;
  image: string;
  details: string[];
  organizer: string;
  contact?: string;
  website?: string;
}

const eventsData: EventItem[] = [
  {
    id: 'raduno-dolomiti-2026',
    name: 'Raduno Nazionale Tende da Tetto - Dolomiti',
    description: 'Il grande raduno annuale della community italiana per appassionati di tende da tetto e campeggio con veicoli attrezzati.',
    startDate: '2026-06-15',
    endDate: '2026-06-17',
    location: 'Cortina d\'Ampezzo, Veneto',
    region: 'Dolomiti',
    type: 'raduno',
    attendees: 187,
    maxAttendees: 300,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Tre giorni di community building e avventura',
      'Presentazioni di nuovi modelli di tende da tetto',
      'Workshop su isolamento e manutenzione',
      'Escursioni guidate nelle Tre Cime di Lavaredo',
      'Cena comunitaria con specialità locali',
      'Condivisione di esperienze di viaggio'
    ],
    organizer: 'Tende da Tetto e Campeggio Community',
    contact: 'info@tendedatettoecampeggio.it',
    website: 'https://raduno2026.tendedatettoecampeggio.it'
  },
  {
    id: 'workshop-isolamento-invernale',
    name: 'Workshop: Isolamento Invernale per Tende da Tetto',
    description: 'Impara le migliori tecniche per isolare la tua tenda da tetto e dormire al caldo anche quando le temperature scendono sotto zero.',
    startDate: '2026-04-10',
    endDate: '2026-04-10',
    location: 'Milano, Lombardia',
    region: 'Lombardia',
    type: 'workshop',
    maxAttendees: 50,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Introduzione ai materiali isolanti',
      'Installazione dei teli invernali',
      'Scelta dei sacchi a pelo adeguati',
      'Sistemi di riscaldamento ausiliario',
      'Domande e risposte con esperti',
      'Pranzo con la community'
    ],
    organizer: 'Tende da Tetto e Campeggio Community',
    contact: 'workshop@tendedatettoecampeggio.it'
  },
  {
    id: 'raduno-costa-amalfitana',
    name: 'Raduno Estivo - Costa Amalfitana',
    description: 'Raduno estivo con vista sul mare: scopri i migliori campeggi della costiera amalfitana e condividi le tue esperienze con la community.',
    startDate: '2026-08-22',
    endDate: '2026-08-24',
    location: 'Positano, Campania',
    region: 'Costiera Amalfitana',
    type: 'raduno',
    maxAttendees: 250,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Tre giorni sulla costiera amalfitana',
      'Escursioni alle spiagge segrete',
      'Visita a Positano e Ravello',
      'Cooking class con chef locale',
      'Escursione in barca',
      'Cena a base di pesce fresco'
    ],
    organizer: 'Tende da Tetto e Campeggio Community'
  },
  {
    id: 'evento-social-verona',
    name: 'Social Meetup - Community Gathering Verona',
    description: 'Incontro informale per conoscere altri appassionati di tende da tetto e campeggio nella provincia di Verona.',
    startDate: '2026-05-20',
    endDate: '2026-05-20',
    location: 'Verona, Veneto',
    region: 'Veneto',
    type: 'evento',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Aperitivo comunitario',
      'Presentazione di nuovi percorsi',
      'Condivisione di esperienze',
      'Discussione libera',
      'Networking'
    ],
    organizer: 'Tende da Tetto e Campeggio Community'
  }
];

const Events = () => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${siteUrl}/eventi`;

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'raduno':
        return { label: 'Raduno', color: 'bg-red-500/10 text-red-700' };
      case 'workshop':
        return { label: 'Workshop', color: 'bg-blue-500/10 text-blue-700' };
      case 'evento':
        return { label: 'Evento', color: 'bg-green-500/10 text-green-700' };
      default:
        return { label: 'Evento', color: 'bg-gray-500/10 text-gray-700' };
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'raduno':
        return Tent;
      case 'workshop':
        return Mountain;
      case 'evento':
        return Users;
      default:
        return Calendar;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Eventi e Raduni - Tende da Tetto e Campeggio Community"
        description="Scopri i prossimi raduni, workshop ed eventi della community italiana di tende da tetto e campeggio. Raduni annuali, workshop di formazione, meetup comunitari e tanto altro."
        canonicalUrl={canonicalUrl}
        keywords="raduni tende da tetto, eventi campeggio, workshop, raduno, community events, tende da tetto italia"
        ogType="website"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Eventi', url: canonicalUrl }
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background" aria-label="Eventi e raduni della community">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="h-12 w-12 text-primary mr-4" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Eventi e Raduni
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Scopri i prossimi raduni, workshop ed eventi della nostra community. 
                Momenti di condivisione, apprendimento e avventura con altri appassionati 
                di tende da tetto e campeggio in tutta Italia.
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Prossimi Appuntamenti</h2>
                <p className="text-muted-foreground">
                  {eventsData.length} eventi programmati • Partecipazione libera per tutti i membri della community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {eventsData.map((event) => {
                  const typeInfo = getTypeLabel(event.type);
                  const EventIcon = getEventIcon(event.type);
                  const startDate = new Date(event.startDate);
                  const endDate = new Date(event.endDate);
                  const isSameDay = startDate.toDateString() === endDate.toDateString();

                  return (
                    <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      {/* Event Image */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img 
                          src={event.image} 
                          alt={event.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <Badge className={`absolute top-4 left-4 ${typeInfo.color}`}>
                          <EventIcon className="h-3 w-3 mr-1" aria-hidden="true" />
                          {typeInfo.label}
                        </Badge>
                      </div>

                      {/* Event Content */}
                      <CardContent className="pt-6">
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {event.name}
                        </h3>

                        <p className="text-muted-foreground mb-6">
                          {event.description}
                        </p>

                        {/* Event Meta */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-start gap-3">
                            <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">
                                {startDate.toLocaleDateString('it-IT', { 
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                              {!isSameDay && (
                                <p className="text-sm text-muted-foreground">
                                  fino al {endDate.toLocaleDateString('it-IT', { 
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">{event.location}</p>
                              <p className="text-sm text-muted-foreground">{event.region}</p>
                            </div>
                          </div>

                          {event.maxAttendees && (
                            <div className="flex items-start gap-3">
                              <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                              <div className="flex-1">
                                <p className="font-semibold text-foreground">
                                  {event.attendees || 0} / {event.maxAttendees} partecipanti
                                </p>
                                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                                  <div 
                                    className="bg-primary rounded-full h-2" 
                                    style={{ width: `${((event.attendees || 0) / event.maxAttendees) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-foreground mb-2">Highlights:</p>
                          <ul className="space-y-1">
                            {event.details.slice(0, 3).map((detail, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                            {event.details.length > 3 && (
                              <li className="text-sm text-muted-foreground">
                                +{event.details.length - 3} altre attività
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Scopri di più
                          <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-secondary/50" aria-label="Informazioni sulla partecipazione agli eventi">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Come Partecipare
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 bg-background/80 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">Iscriviti alla Community</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Unisciti al nostro gruppo Facebook per restare aggiornato su tutti gli eventi e le novità della community.
                  </p>
                </Card>

                <Card className="p-6 bg-background/80 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">Segui gli Annunci</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Iscriviti alla nostra newsletter per ricevere gli inviti ufficiali e i dettagli degli eventi direttamente via email.
                  </p>
                </Card>

                <Card className="p-6 bg-background/80 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">Condividi Esperienze</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Dopo l'evento, condividi le tue foto e esperienze nel nostro gruppo per ispirare altri appassionati.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Non vedi un evento nella tua zona?
              </h2>
              <p className="text-muted-foreground mb-8">
                Proponi un raduno o un evento! Contattaci per organizzare un gathering comunitario nella tua regione.
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Proponi un Evento
                  <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Render EventSchema for each event */}
        {eventsData.map((event) => (
          <EventSchema 
            key={event.id}
            name={event.name}
            description={event.description}
            startDate={event.startDate}
            endDate={event.endDate}
            location={event.location}
            image={event.image}
            url={`${siteUrl}/eventi/${event.id}`}
            organizer={event.organizer}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Events;
