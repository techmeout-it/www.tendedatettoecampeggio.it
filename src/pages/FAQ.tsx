import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FAQPageSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronDown, 
  HelpCircle,
  Thermometer,
  Droplets,
  MapPin,
  Users,
  Shield,
  Wrench
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'community' | 'safety';
}

const faqData: FAQItem[] = [
  // General
  {
    category: 'general',
    question: 'Cosa è una tenda da tetto?',
    answer: 'Una tenda da tetto (roof tent o rooftop tent) è una tenda montata sul tetto di un veicolo (auto, furgone, jeep). Offre una soluzione di campeggio rialzata, protetta dal terreno, ideale per chi ama il campeggio ma non vuole dormire direttamente per terra. Si apre a fisarmonica e fornisce uno spazio comodo e sicuro per dormire durante i viaggi.'
  },
  {
    category: 'general',
    question: 'Quali veicoli possono montare una tenda da tetto?',
    answer: 'La maggior parte dei veicoli può montare una tenda da tetto: auto, SUV, furgoni, jeep. L\'unico requisito è avere un tetto robusto e una barra di carico adeguata. Il peso della tenda (mediamente 40-80 kg) deve essere supportato dal veicolo. Consulta le specifiche del tuo veicolo o contatta il produttore della tenda per verificare la compatibilità.'
  },
  {
    category: 'general',
    question: 'Qual è il prezzo medio di una tenda da tetto?',
    answer: 'Il prezzo varia a seconda della marca e della qualità. Le tende entry-level partono da 1.500€, mentre le tende premium possono costare 4.000-6.000€. Considera che è un investimento a lungo termine per anni di campeggio confortevole. Controlla sempre le offerte della community e le partnership esclusive.'
  },
  {
    category: 'general',
    question: 'Quante persone possono dormire in una tenda da tetto?',
    answer: 'Dipende dal modello, ma la maggior parte delle tende da tetto ospita 2-4 persone. Le tende standard per due persone sono le più diffuse. Alcune tende di grandi dimensioni possono accogliere 3-4 persone, anche se lo spazio è ridotto. Verifica le specifiche del modello che interessati prima dell\'acquisto.'
  },

  // Technical
  {
    category: 'technical',
    question: 'Come si monta una tenda da tetto?',
    answer: 'Il montaggio varia in base al modello e alla barra di carico del tuo veicolo. In generale: (1) installa la barra di carico sul tetto se non presente, (2) fissa la tenda alla barra secondo le istruzioni, (3) controlla tutti i bulloni e le protezioni. Il primo montaggio richiede circa 1-2 ore. Molte tende hanno istruzioni dettagliate video online.'
  },
  {
    category: 'technical',
    question: 'È difficile aprire e chiudere la tenda da tetto?',
    answer: 'No, è piuttosto semplice! La maggior parte delle moderne tende da tetto si apre e chiude in 2-3 minuti tramite un meccanismo a gas a molla. Basta sbloccare i gancini, tirare la tenda aperta e inserire i montanti. La chiusura è l\'inverso. Dopo qualche pratica, diventa un gesto naturale. Le tende automatiche offrono ancora più comodità.'
  },
  {
    category: 'technical',
    question: 'Che manutenzione richiede una tenda da tetto?',
    answer: 'La manutenzione è minima: (1) Pulizia regolare della tela con acqua dolce, (2) Controllo annuale dei gancini e dei meccanismi a gas, (3) Applicazione di impermeabilizzante ogni 1-2 anni, (4) Ispezione della barra di carico per corrosione, (5) Ventilazione dopo l\'uso per evitare muffa. Con semplici cure, una tenda dura 10-15 anni.'
  },
  {
    category: 'technical',
    question: 'Posso usare la tenda da tetto sotto la pioggia?',
    answer: 'Sì, assolutamente! Le tende da tetto moderne sono progettate per essere impermeabili. La loro principale caratteristica è di tenerti asciutto durante la pioggia. Tuttavia, per una protezione ottimale: (1) Assicurati che la tenda sia ben sigillata, (2) Pulisci regolarmente le guarnizioni, (3) Evita di far stagnare l\'acqua sulla tela, (4) Usa un telo protettivo in caso di pioggia prolungata.'
  },

  // Winter/Safety
  {
    category: 'safety',
    question: 'Posso usare la tenda da tetto d\'inverno con il freddo?',
    answer: 'Sì! È una delle maggiori caratteristiche delle tende da tetto. Con i giusti accorgimenti puoi dormire confortevolmente anche a temperature sotto zero: (1) Usa un sacco a pelo con comfort temperature a -15°C o inferiore, (2) Installa il telo invernale per migliorare l\'isolamento, (3) Usa un riscaldatore ausiliario interno (seguendo le indicazioni di sicurezza), (4) Garantisci una buona ventilazione per evitare condensa, (5) Indossa indumenti termici. La nostra guida "Dormire al freddo" ha maggiori dettagli.'
  },
  {
    category: 'safety',
    question: 'È sicuro dormire in una tenda sul tetto di un veicolo?',
    answer: 'Sì, le tende da tetto sono molto sicure. Sono progettate con: (1) Struttura robusta in acciaio e alluminio, (2) Sistemi di fissaggio affidabili, (3) Scale o gradini per l\'accesso sicuro, (4) Protezioni anti-caduta, (5) Stabilità comprovata in vento e cattive condizioni meteo. La tenda è rialzata da terra, il che offre anche protezione da animali e intrusi. Segui sempre le istruzioni di montaggio del produttore.'
  },
  {
    category: 'safety',
    question: 'Che impatto ha il peso della tenda sul consumo di carburante?',
    answer: 'Una tenda da tetto e la barra di carico aggiungono 60-100 kg al veicolo. Questo può aumentare il consumo di carburante del 5-10% a seconda del veicolo, del carico totale e dello stile di guida. L\'aerodinamica è leggermente affettata, ma è un compromesso accettabile per il comfort che otieni. Alcuni moderni tende hanno profili aerodinamici per minimizzare questo impatto.'
  },

  // Community
  {
    category: 'community',
    question: 'Cos\'è la community Tende da Tetto e Campeggio?',
    answer: 'Siamo la più grande community italiana dedicata alle tende da tetto e al campeggio con veicoli. Uniamo oltre 40.000 appassionati che condividono esperienze, consigli, guide pratiche e organizzano raduni comunitari. Siamo presenti su Facebook, Instagram e questo sito web. Tutti sono benvenuti indipendentemente dal livello di esperienza.'
  },
  {
    category: 'community',
    question: 'Come posso partecipare agli eventi e ai raduni della community?',
    answer: 'È semplice: (1) Unisciti al nostro gruppo Facebook (@tendedatettoecampeggio), (2) Iscriviti alla newsletter dal nostro sito, (3) Segui la pagina Instagram, (4) Controlla la sezione "Eventi" del sito per i prossimi raduni. Gli eventi sono aperti a tutti i membri della community. Alcuni richiedono una registrazione anticipata a causa dei posti limitati.'
  },
  {
    category: 'community',
    question: 'Posso proporre un raduno nella mia regione?',
    answer: 'Assolutamente! Siamo sempre alla ricerca di nuovi organizzatori volontari per gli eventi regionali. Se desideri organizzare un raduno nella tua zona, contattaci tramite il form di contatto o invia un messaggio privato su Facebook. Ti aiuteremo a pianificare, promuovere e organizzare un evento memorabile per la community.'
  },
  {
    category: 'community',
    question: 'Come posso condividere le mie esperienze e foto?',
    answer: 'Ci sono molti modi per condividere: (1) Posta nel nostro gruppo Facebook (@tendedatettoecampeggio), (2) Usa l\'hashtag #tendedatettoecampeggio su Instagram, (3) Invia le tue storie e guide al nostro sito per la pubblicazione, (4) Partecipa ai thread di discussione nel nostro forum. Amiamo le vostre storie e le condividiamo regolarmente per ispirare altri!'
  },

  // Routes/Destinations
  {
    category: 'general',
    question: 'Quali sono i migliori percorsi per il campeggio con tenda da tetto in Italia?',
    answer: 'L\'Italia offre scenari incredibili. Alcuni percorsi consigliati: (1) Dolomiti (Tre Cime, cortina), (2) Costiera Amalfitana (mare e montagna), (3) Toscana (paesaggi romantici), (4) Sardegna (spiagge incontaminate), (5) lago di Garda, (6) Cinque Terre, (7) Val d\'Aosta (montagna alpina). Consulta la nostra lista di campeggi testati per consigli specifici per zona.'
  },
  {
    category: 'general',
    question: 'È legale parcheggiare con la tenda da tetto montata sulla strada?',
    answer: 'La legalità dipende dal luogo specifico: (1) Nei campeggi ufficiali è sempre permesso, (2) Nelle aree di sosta è generalmente permesso con le regole locali, (3) Sulle strade pubbliche è vietato in molte aree, controllare i regolamenti locali, (4) Terreni privati con permesso del proprietario va bene. Consigliamo di utilizzare sempre campeggi ufficiali o aree di sosta autorizzate per un\'esperienza sicura e legale.'
  },

  // Brands & Selection
  {
    category: 'technical',
    question: 'Quali sono i migliori marchi di tende da tetto?',
    answer: 'Esistono vari eccellenti produttori: (1) Autohome (italiana, affidabile, vari modelli), (2) Easycamp (buon rapporto qualità-prezzo), (3) Thule (design moderno), (4) CVT (versatile), (5) Maggiolina (compatta), (6) Cascadia (automatica, premium). La scelta dipende dal budget, dalla dimensione del veicolo e dalle tue preferenze. Leggi le recensioni della community prima di acquistare.'
  },
  {
    category: 'technical',
    question: 'Qual è la differenza tra tende manuali e automatiche?',
    answer: 'Tende manuali: aprire e chiudere manualmente (2-3 minuti), meno costose, più leggere, ideali per chi accampa spesso. Tende automatiche: apertura motorizzata con telecomando (30-60 secondi), più costose, comode per chi cambia campeggio frequentemente, richiedono batterie per il motore. Entrambe sono affidabili; la scelta dipende da budget e frequenza di utilizzo.'
  }
];

const FAQ = () => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${siteUrl}/faq`;
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'general':
        return HelpCircle;
      case 'technical':
        return Wrench;
      case 'safety':
        return Shield;
      case 'community':
        return Users;
      default:
        return HelpCircle;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'general':
        return { label: 'Domande Generali', color: 'bg-blue-500/10 text-blue-700' };
      case 'technical':
        return { label: 'Tecnica e Manutenzione', color: 'bg-purple-500/10 text-purple-700' };
      case 'safety':
        return { label: 'Sicurezza', color: 'bg-red-500/10 text-red-700' };
      case 'community':
        return { label: 'Community', color: 'bg-green-500/10 text-green-700' };
      default:
        return { label: 'Altro', color: 'bg-gray-500/10 text-gray-700' };
    }
  };

  const groupedFaq = faqData.reduce((acc, item, idx) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push({ ...item, index: idx });
    return acc;
  }, {} as Record<string, (FAQItem & { index: number })[]>);

  const categories = ['general', 'technical', 'safety', 'community'];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Domande Frequenti - Tende da Tetto e Campeggio"
        description="Risposte alle domande più frequenti su tende da tetto, campeggio, manutenzione, sicurezza e la community italiana. Scopri tutto quello che devi sapere."
        canonicalUrl={canonicalUrl}
        keywords="FAQ, domande frequenti, tende da tetto, campeggio, guide, aiuto, informazioni"
        ogType="website"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'FAQ', url: canonicalUrl }
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background" aria-label="Domande frequenti">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <HelpCircle className="h-12 w-12 text-primary mr-4" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Domande Frequenti
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Trova risposte alle domande più comuni su tende da tetto, campeggio, manutenzione, sicurezza 
                e la nostra community. Se non trovi la risposta, contattaci!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {categories.map((category) => {
                if (!groupedFaq[category]) return null;
                const categoryInfo = getCategoryLabel(category);
                const CategoryIcon = getCategoryIcon(category);

                return (
                  <div key={category} className="mb-16">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-8">
                      <CategoryIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                      <h2 className="text-2xl font-bold text-foreground">{categoryInfo.label}</h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                      {groupedFaq[category].map((item) => (
                        <Card key={item.index} className="overflow-hidden hover:shadow-md transition-shadow">
                          <button
                            onClick={() => toggleItem(item.index)}
                            className="w-full p-6 text-left hover:bg-secondary/50 transition-colors"
                            aria-expanded={expandedItems.has(item.index)}
                            aria-controls={`faq-answer-${item.index}`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <h3 className="text-lg font-semibold text-foreground flex-1 text-left">
                                {item.question}
                              </h3>
                              <ChevronDown 
                                className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                                  expandedItems.has(item.index) ? 'rotate-180' : ''
                                }`}
                                aria-hidden="true"
                              />
                            </div>
                          </button>

                          {expandedItems.has(item.index) && (
                            <CardContent 
                              id={`faq-answer-${item.index}`}
                              className="px-6 pb-6 pt-0 border-t border-border"
                            >
                              <p className="text-muted-foreground leading-relaxed">
                                {item.answer}
                              </p>
                            </CardContent>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Non trovi la risposta che cerchi?
              </h2>
              <p className="text-muted-foreground mb-8">
                Il nostro team è sempre disponibile per aiutarti. Contattaci con le tue domande 
                e faremo del nostro meglio per rispondere il prima possibile.
              </p>
              <a 
                href="/contatti"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contattaci
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <FAQPageSchema 
          items={faqData.map(item => ({
            question: item.question,
            answer: item.answer
          }))}
          url={canonicalUrl}
        />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
