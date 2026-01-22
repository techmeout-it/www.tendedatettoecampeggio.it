import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Termini di Servizio - Tende da Tetto e Campeggio"
        description="Leggi i nostri termini di servizio per comprendere i diritti e i doveri degli utenti del nostro sito."
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/termini` : ''}
        keywords="termini di servizio, condizioni d'uso, termini, campeggio"
        ogType="website"
      />
      <Header />
      <main className="py-16" id="main-content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <FileText className="h-10 w-10 text-primary mr-3" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-foreground">Termini di Servizio</h1>
              </div>
              <p className="text-muted-foreground">Ultimo aggiornamento: Novembre 2025</p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Accettazione dei Termini</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Accedendo e utilizzando il sito web TendaTetto Community, accetti di essere vincolato da questi 
                  Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare il nostro sito.
                  Ci riserviamo il diritto di modificare questi termini in qualsiasi momento.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Descrizione del Servizio</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TendaTetto Community è una piattaforma online dedicata agli appassionati di tende da tetto e campeggio. 
                  Forniamo guide, informazioni su campeggi, e facilitiamo la connessione tra membri della community 
                  attraverso i nostri canali social (Facebook e Instagram).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Utilizzo del Sito</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizzando questo sito, ti impegni a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Utilizzare il sito solo per scopi legali e conformi a questi termini</li>
                  <li>Non tentare di accedere a parti del sito non autorizzate</li>
                  <li>Non interferire con il funzionamento del sito</li>
                  <li>Fornire informazioni accurate quando richiesto</li>
                  <li>Rispettare i diritti di proprietà intellettuale</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Proprietà Intellettuale</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tutti i contenuti del sito, inclusi testi, grafica, loghi, immagini, e software, sono di proprietà 
                  di TendaTetto Community o dei suoi licenziatari e sono protetti dalle leggi sul copyright e sulla 
                  proprietà intellettuale. Non è consentito riprodurre, distribuire o creare opere derivate senza 
                  autorizzazione scritta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contenuti degli Utenti</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se invii contenuti attraverso il nostro modulo di contatto o altri canali, garantisci di avere 
                  il diritto di condividere tali contenuti e ci concedi una licenza non esclusiva per utilizzarli. 
                  Non siamo responsabili per contenuti generati dagli utenti nei nostri canali social.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Link a Siti Terzi</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Il nostro sito può contenere link a siti web di terze parti (campeggi, partner, social media). 
                  Non siamo responsabili per il contenuto, le politiche sulla privacy o le pratiche di questi siti esterni. 
                  Ti consigliamo di leggere i termini e le privacy policy di ogni sito che visiti.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitazione di Responsabilità</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le informazioni sui campeggi e le guide sono fornite a scopo informativo. Non garantiamo l'accuratezza, 
                  la completezza o l'attualità di tali informazioni. Ti consigliamo di verificare sempre direttamente 
                  con i campeggi per informazioni aggiornate su prezzi, disponibilità e servizi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Modifiche ai Termini</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ci riserviamo il diritto di modificare questi Termini di Servizio in qualsiasi momento. 
                  Le modifiche saranno effettive immediatamente dopo la pubblicazione sul sito. 
                  L'uso continuato del sito dopo le modifiche costituisce accettazione dei nuovi termini.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Legge Applicabile</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questi Termini di Servizio sono regolati dalla legge italiana. Qualsiasi controversia sarà 
                  sottoposta alla giurisdizione esclusiva dei tribunali italiani.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contatti</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Per domande riguardanti questi Termini di Servizio, contattaci attraverso la nostra pagina Contatti.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
