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
              <p className="text-muted-foreground">Ultimo aggiornamento: Febbraio 2026</p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Accettazione dei Termini</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Accedendo e utilizzando il sito web "Tende da Tetto e Campeggio" (di seguito "il Sito"), accetti integralmente 
                  e senza riserve i presenti Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare 
                  il nostro Sito e i servizi correlati. L'utilizzo continuato del Sito costituisce accettazione implicita di 
                  eventuali modifiche ai presenti termini.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Natura del Servizio</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Tende da Tetto e Campeggio" è una community informale dedicata agli appassionati 
                  di tende da tetto, campeggio e vita outdoor. Il Sito offre:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Informazioni, guide e articoli a carattere divulgativo sul mondo del campeggio</li>
                  <li>Elenco di campeggi e aree di sosta con informazioni di base</li>
                  <li>Organizzazione e promozione di raduni ed eventi comunitari</li>
                  <li>Convenzioni e scontistiche con partner commerciali terzi</li>
                  <li>Collegamento ai canali social ufficiali della community (Facebook, Instagram)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Il Sito e la community non costituiscono un'associazione formale</strong> e non hanno personalità giuridica. 
                  Gli organizzatori agiscono a titolo personale.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Utilizzo del Sito</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizzando questo Sito, l'utente si impegna a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Utilizzare il Sito esclusivamente per scopi leciti e conformi ai presenti termini</li>
                  <li>Non tentare di accedere a sezioni non autorizzate o di compromettere la sicurezza del Sito</li>
                  <li>Non interferire con il corretto funzionamento del Sito o dei suoi servizi</li>
                  <li>Fornire informazioni veritiere e accurate quando richiesto (es. iscrizione a raduni)</li>
                  <li>Rispettare i diritti di proprietà intellettuale e i diritti di terzi</li>
                  <li>Mantenere un comportamento rispettoso nei confronti degli altri membri della community</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Raduni, Eventi e Partecipazione</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La partecipazione ai raduni e agli eventi organizzati o promossi dalla community è soggetta alle seguenti condizioni:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Partecipazione volontaria:</strong> Ogni partecipante aderisce agli eventi di propria spontanea volontà, 
                  assumendosi la piena responsabilità delle proprie azioni e della propria sicurezza</li>
                  <li><strong>Esonero di responsabilità:</strong> Gli organizzatori della community non sono responsabili per 
                  incidenti, infortuni, danni a persone, veicoli o cose che possano verificarsi durante gli eventi</li>
                  <li><strong>Assicurazione personale:</strong> È responsabilità di ciascun partecipante, se lo ritiene opportuno, dotarsi di adeguata 
                  copertura assicurativa (RCA, infortuni, responsabilità civile)</li>
                  <li><strong>Rispetto delle regole:</strong> I partecipanti sono tenuti a rispettare le regole delle strutture 
                  ospitanti, il Codice della Strada e le normative vigenti</li>
                  <li><strong>Attività outdoor:</strong> Le attività all'aperto comportano rischi intrinseci. Ogni partecipante 
                  è responsabile della valutazione delle proprie capacità e condizioni fisiche</li>
                  <li><strong>Minori:</strong> I genitori o tutori legali sono interamente responsabili dei minori a loro affidati</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>L'iscrizione a un evento implica l'accettazione integrale delle presenti condizioni e costituisce 
                  manleva nei confronti degli organizzatori.</strong>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Partner Commerciali e Scontistiche</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Il Sito promuove convenzioni con partner commerciali che offrono scontistiche ai membri della community. 
                  A riguardo si precisa che:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Gli sconti sono offerti direttamente dai partner e possono variare o cessare senza preavviso</li>
                  <li>La community non è responsabile della qualità, conformità o consegna dei prodotti acquistati presso i partner</li>
                  <li>Eventuali controversie relative agli acquisti vanno risolte direttamente con il venditore</li>
                  <li>I link ai siti dei partner sono forniti per comodità e non costituiscono endorsement commerciale</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Proprietà Intellettuale</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tutti i contenuti originali del Sito, inclusi testi, grafica, loghi, immagini, video e software, sono di 
                  proprietà della community "Tende da Tetto e Campeggio" o dei rispettivi autori e sono protetti dalle leggi 
                  sul diritto d'autore. È vietata la riproduzione, distribuzione o creazione di opere derivate senza 
                  autorizzazione scritta, salvo per uso personale non commerciale. Le immagini dei raduni possono ritrarre 
                  i partecipanti e vengono utilizzate per documentare le attività della community sui canali ufficiali.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contenuti degli Utenti e Comunicazioni</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se invii contenuti attraverso il modulo di contatto, email, newsletter o altri canali:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Garantisci di avere il diritto di condividere tali contenuti</li>
                  <li>Concedi una licenza non esclusiva e gratuita per l'utilizzo nei canali della community</li>
                  <li>Ti impegni a non inviare contenuti illegali, offensivi, diffamatori o lesivi dei diritti altrui</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Non siamo responsabili per contenuti generati dagli utenti nei canali social o in comunicazioni private tra membri.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Newsletter e Comunicazioni</h2>
                <p className="text-muted-foreground leading-relaxed">
                  L'iscrizione alla newsletter è volontaria e può essere revocata in qualsiasi momento tramite il link 
                  presente in ogni comunicazione. I dati forniti saranno utilizzati esclusivamente per l'invio di 
                  informazioni relative alle attività della community, raduni ed eventi. Non cediamo i dati a terzi 
                  per finalità commerciali.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Link a Siti Terzi</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Il Sito contiene link a siti web di terze parti (campeggi, partner commerciali, piattaforme social, 
                  Google Forms per iscrizioni). Non siamo responsabili per il contenuto, le politiche sulla privacy, 
                  la sicurezza o le pratiche di questi siti esterni. L'utente è invitato a consultare i termini e le 
                  privacy policy di ogni sito visitato.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitazione di Responsabilità</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Il Sito e i suoi contenuti sono forniti "così come sono" senza garanzie di alcun tipo.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Le informazioni su campeggi, aree di sosta e servizi sono meramente indicative e potrebbero 
                  non essere aggiornate. Verifica sempre direttamente con le strutture</li>
                  <li>Le guide e i contenuti hanno carattere divulgativo e non sostituiscono consulenze professionali</li>
                  <li>Non garantiamo la disponibilità continua del Sito né l'assenza di errori tecnici</li>
                  <li>Non siamo responsabili per danni diretti, indiretti, incidentali o consequenziali derivanti 
                  dall'uso del Sito o dalla partecipazione agli eventi</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Indennizzo</h2>
                <p className="text-muted-foreground leading-relaxed">
                  L'utente si impegna a manlevare e tenere indenne la community "Tende da Tetto e Campeggio", i suoi 
                  organizzatori e collaboratori da qualsiasi richiesta di risarcimento, danno, costo o spesa (incluse 
                  le spese legali) derivante dalla violazione dei presenti Termini, da comportamenti illeciti o dalla 
                  partecipazione agli eventi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Modifiche ai Termini</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ci riserviamo il diritto di modificare i presenti Termini di Servizio in qualsiasi momento. 
                  Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento. 
                  L'uso continuato del Sito dopo la pubblicazione delle modifiche costituisce accettazione 
                  integrale dei nuovi termini.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Legge Applicabile e Foro Competente</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I presenti Termini di Servizio sono regolati dalla legge italiana. Per qualsiasi controversia 
                  derivante dall'interpretazione o esecuzione dei presenti termini sarà competente in via esclusiva 
                  il Foro di Vicenza, salvo diversa disposizione inderogabile di legge a tutela del consumatore.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Disposizioni Finali</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Qualora una o più disposizioni dei presenti Termini risultassero invalide o inapplicabili, 
                  le restanti disposizioni rimarranno pienamente valide ed efficaci. La mancata applicazione 
                  di un diritto previsto dai presenti Termini non costituisce rinuncia allo stesso.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contatti</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Per domande, chiarimenti o segnalazioni riguardanti i presenti Termini di Servizio, 
                  puoi contattarci attraverso la nostra <a href="/contatti" className="text-primary hover:underline">pagina Contatti</a> o 
                  i canali social ufficiali della community.
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
