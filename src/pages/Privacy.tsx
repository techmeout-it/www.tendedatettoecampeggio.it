import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy - Tende da Tetto e Campeggio"
        description="Leggi la nostra privacy policy per comprendere come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali."
        canonicalUrl={`${SITE_URL}/privacy`}
        keywords="privacy policy, protezione dati, privacy, campeggio"
        ogType="website"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: SITE_URL },
        { name: 'Privacy Policy', url: `${SITE_URL}/privacy` }
      ]} />
      <Header />
      <main className="py-16" id="main-content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-10 w-10 text-primary mr-3" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
              </div>
              <p className="text-muted-foreground">Ultimo aggiornamento: Novembre 2025</p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduzione</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TendaTetto Community ("noi", "nostro" o "ci") rispetta la tua privacy e si impegna a proteggerla 
                  attraverso la conformità a questa policy. Questa Privacy Policy descrive i tipi di informazioni 
                  che potremmo raccogliere da te o che puoi fornire quando visiti il nostro sito web e le nostre 
                  pratiche per la raccolta, l'uso, la conservazione, la protezione e la divulgazione di tali informazioni.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Informazioni che Raccogliamo</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Raccogliamo diversi tipi di informazioni, tra cui:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Informazioni personali:</strong> nome, indirizzo email quando ci contatti o ti iscrivi alla newsletter</li>
                  <li><strong>Dati di utilizzo:</strong> informazioni su come utilizzi il nostro sito web</li>
                  <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di browser, fuso orario e alcune delle cookies installate sul tuo dispositivo</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Come Utilizziamo le Tue Informazioni</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizziamo le informazioni raccolte per:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Fornire e migliorare i nostri servizi</li>
                  <li>Rispondere alle tue richieste e comunicazioni</li>
                  <li>Inviarti newsletter e aggiornamenti (se hai acconsentito)</li>
                  <li>Analizzare l'utilizzo del sito per migliorare l'esperienza utente</li>
                  <li>Proteggere la sicurezza del nostro sito</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Condivisione delle Informazioni</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Non vendiamo, scambiamo o trasferiamo le tue informazioni personali a terze parti senza il tuo consenso, 
                  eccetto quando necessario per fornire i nostri servizi o quando richiesto dalla legge. Potremmo condividere 
                  informazioni aggregate e anonime per scopi statistici.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. I Tuoi Diritti</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In conformità con il GDPR, hai il diritto di:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Rettificare i dati inesatti</li>
                  <li>Richiedere la cancellazione dei tuoi dati</li>
                  <li>Opporti al trattamento dei tuoi dati</li>
                  <li>Richiedere la portabilità dei dati</li>
                  <li>Revocare il consenso in qualsiasi momento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Sicurezza dei Dati</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Adottiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali 
                  da accessi non autorizzati, perdita, distruzione o alterazione. Tuttavia, nessun metodo di trasmissione 
                  su Internet è sicuro al 100%.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contatti</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Per domande su questa Privacy Policy o per esercitare i tuoi diritti, contattaci attraverso 
                  la nostra pagina Contatti o via email. Risponderemo entro 30 giorni dalla ricezione della richiesta.
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

export default Privacy;
