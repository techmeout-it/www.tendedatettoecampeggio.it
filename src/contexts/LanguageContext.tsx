import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduzioni
const translations: Record<Language, Record<string, string>> = {
  it: {
    // Header
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.community': 'Community',
    'nav.events': 'Eventi & Raduni',
    'nav.partner': 'Partner',
    'nav.about': 'Chi Siamo',
    'nav.join': 'Unisciti alla Community',
    
    // Hero Section
    'hero.titlePart1': 'La ',
    'hero.titleHighlight': 'Community Italiana',
    'hero.titlePart2': ' N°1 per le Tende da Tetto e Campeggio',
    'hero.description': 'Scopri i migliori campeggi, condividi le tue avventure e trova tutto quello che ti serve per viaggiare con la tua tenda da tetto.',
    'hero.joinFacebook': 'Unisciti su Facebook',
    'hero.followInstagram': 'Seguici su Instagram',
    'hero.stats.members': 'Membri Totali',
    'hero.stats.posts': 'Post Mensili',
    'hero.stats.active': 'Membri Attivi',
    'hero.stats.rating': 'Rating Community',
    
    // Community Section
    'community.title': 'La Nostra Community',
    'community.description': 'Fondata nel 2021, siamo diventati rapidamente il principale punto di riferimento italiano per gli appassionati di tende da tetto, campeggio e vanlife con oltre 40.000 membri attivi',
    'community.stats.members': 'Membri Totali',
    'community.stats.posts': 'Post Mensili',
    'community.stats.comments': 'Commenti Mensili',
    'community.stats.active': 'Membri Attivi',
    'community.stats.facebookGroup': 'Gruppo Facebook',
    'community.stats.last30days': 'Ultimi 30 giorni',
    'community.stats.percentTotal': '70% del totale',
    'community.join': 'Unisciti alla Community',
    'community.joinDescription': 'Fai parte della più grande community italiana di appassionati di tende da tetto e campeggio',
    'community.facebookButton': 'Gruppo Facebook (40K+ membri)',
    'community.instagramButton': 'Seguici su Instagram',
    'community.whatYouFind': '✨ Cosa troverai:',
    'community.feature1': 'Guide e consigli pratici',
    'community.feature2': 'Recensioni di prodotti',
    'community.feature3': 'Organizzazione eventi e raduni',
    'community.feature4': 'Supporto e aiuto dalla community',
    'community.feature5': 'Offerte esclusive dai partner',
    
    // Community Rules
    'community.rulesTitle': '🤝 Le Nostre Regole',
    'community.rule1Title': 'Resta in Tema',
    'community.rule1Desc': 'Solo contenuti relativi a tende da tetto e campeggio',
    'community.rule2Title': 'Rispetta gli Altri',
    'community.rule2Desc': 'Mantieni sempre un tono cordiale e costruttivo',
    'community.rule3Title': 'No Spam',
    'community.rule3Desc': 'Evita pubblicità non autorizzata e contenuti ripetitivi',
    
    // Guide Section
    'guides.title': 'Articoli & Guide',
    'guides.description': 'Scopri i migliori consigli dalla nostra community di esperti campeggiatori',
    'guides.readMore': 'Leggi di più',
    'guides.viewAll': 'Vedi tutti gli articoli',
    
    // Partner Section
    'partner.title': 'Partner & Offerte',
    'partner.description': 'Sconti esclusivi e offerte speciali dai migliori brand del settore outdoor',
    'partner.become': 'Diventa Partner',
    'partner.download': 'Scarica Listino',
    'partner.dedicated': 'Dedicato',
    'partner.special': 'Speciale',
    'partner.specialOffer': 'Offerta Speciale Community',
    'partner.rooftopTents': 'Tende da Tetto',
    'partner.accessories': 'Tende & Accessori',
    'partner.setups': 'Allestimenti',
    
    // Events
    'events.title': 'Eventi e Raduni',
    'events.upcoming': 'Prossimi Appuntamenti',
    'events.past': 'Eventi Passati',
    'events.description': 'Scopri i prossimi raduni, workshop ed eventi della nostra community. Momenti di condivisione, apprendimento e avventura con altri appassionati di tende da tetto e campeggio in tutta Italia.',
    'events.scheduled': 'evento programmato',
    'events.freeParticipation': 'Partecipazione libera per tutti i membri della community',
    'events.timeline': 'Cronologia Raduni',
    'events.timelineDesc': 'Tutti gli eventi e i raduni organizzati dalla nostra community dal 2021 ad oggi',
    'events.viewGallery': 'Visualizza Galleria',
    'events.participants': 'Partecipanti',
    'events.location': 'Luogo',
    'events.date': 'Data',
    'events.details': 'Dettagli',
    'events.organizer': 'Organizzatore',
    'events.moreInfo': 'Maggiori Informazioni',
    'events.register': 'Iscriviti',
    'events.photoGallery': 'Galleria Fotografica',
    'events.closeGallery': 'Chiudi Galleria',
    'events.raduno': 'Raduno',
    'events.evento': 'Evento',
    'events.workshop': 'Workshop',
    'events.radunoNazionale': 'Raduno Nazionale',
    'events.radunoOffRoad': 'Raduno Off Road',
    'events.gemellaggio': 'Gemellaggio Dachzeltnomaden',
    'events.gameCamp': 'Game Camp',
    'events.radunoPrimaverile': 'Raduno Primaverile',
    'events.radunoAutunnale': 'Raduno Autunnale',
    'events.radunoItinerante': 'Raduno Itinerante',
    'events.radunoEnogastronomico': 'Raduno Enogastronomico',
    'events.radunoEstivo': 'Raduno Estivo',
    'events.cancelledBadWeather': 'Annullato per maltempo',
    'events.backToEvents': 'Torna agli Eventi',
    'events.firstMeetup': '🎉 Il primo raduno!',
    'events.howToParticipate': 'Come Partecipare',
    'events.joinCommunity': 'Iscriviti alla Community',
    'events.joinCommunityDesc': 'Unisciti al nostro gruppo Facebook per restare aggiornato su tutti gli eventi e le novità della community.',
    'events.followAnnouncements': 'Segui gli Annunci',
    'events.followAnnouncementsDesc': 'Iscriviti alla nostra newsletter per ricevere gli inviti ufficiali e i dettagli degli eventi direttamente via email.',
    'events.shareExperiences': 'Condividi Esperienze',
    'events.shareExperiencesDesc': 'Dopo l\'evento, condividi le tue foto e esperienze nel nostro gruppo per ispirare altri appassionati.',
    'events.noEventInArea': 'Non vedi un evento nella tua zona?',
    'events.noEventInAreaDesc': 'Proponi un raduno o un evento! Contattaci per organizzare un gathering comunitario nella tua regione.',
    'events.proposeEvent': 'Proponi un Evento',
    
    // Footer
    'footer.description': 'La community italiana più grande per gli amanti delle tende da tetto e del campeggio. Condividiamo passione, esperienze e avventure.',
    'footer.community': 'Community',
    'footer.resources': 'Risorse',
    'footer.partner': 'Partner',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.joinFacebook': 'Unisciti su Facebook',
    'footer.followInstagram': 'Seguici su Instagram',
    'footer.newsletter': 'Newsletter',
    'footer.rssFeed': 'RSS Feed',
    'footer.eventsLink': 'Eventi e Raduni',
    'footer.aboutUs': 'Chi Siamo',
    'footer.guides': 'Guide & Tutorial',
    'footer.faq': 'Domande Frequenti',
    'footer.becomePartner': 'Diventa Partner',
    'footer.exclusiveOffers': 'Offerte Esclusive',
    'footer.sponsoredBrands': 'Brand Sponsorizzati',
    
    // About Page
    'about.title': 'Chi Siamo',
    'about.description': 'Siamo la più grande community italiana dedicata alle tende da tetto e al campeggio. Dal 2021 uniamo appassionati di tutta Italia per condividere esperienze, consigli e avventure indimenticabili.',
    'about.contactUs': 'Contattaci',
    'about.missionTitle': 'La Nostra Missione',
    'about.missionText1': 'Vogliamo essere il punto di riferimento per tutti gli italiani che amano viaggiare con la tenda da tetto. Crediamo che il campeggio sia molto più di un modo di viaggiare: è uno stile di vita che ci connette con la natura e con altre persone che condividono la nostra stessa passione.',
    'about.missionText2': 'Attraverso guide pratiche, recensioni oneste, una mappa dei migliori campeggi e una community attiva, aiutiamo i nostri membri a vivere esperienze di campeggio sempre migliori.',
    'about.valuePassion': 'Passione',
    'about.valuePassionDesc': 'Amiamo l\'avventura e la vita all\'aria aperta',
    'about.valueCommunity': 'Community',
    'about.valueCommunityDesc': 'Insieme siamo più forti, condividiamo esperienze',
    'about.valueQuality': 'Qualità',
    'about.valueQualityDesc': 'Solo contenuti verificati e consigli affidabili',
    'about.valueRespect': 'Rispetto',
    'about.valueRespectDesc': 'Per la natura, per gli altri, per le regole',
    'about.teamTitle': 'Il Team di Tende da Tetto',
    'about.teamSubtitle': 'Le persone che rendono possibile questa community',
    'about.pieroDesc': 'Campeggiatore da sempre, appassionato e con una profonda conoscenza tecnica del settore.',
    'about.nataliaDesc': 'Campeggiatrice attiva con auto berline, vanta una grande esperienza nell\'equipaggiamento outdoor e nella camperizzazione.',
    'about.andreaDesc': 'Campeggiatore in tenda da tetto e motociclista con tenda a terra, ha all\'attivo numerosi viaggi in tutta Europa fino a Capo Nord.',
    'about.igorDesc': 'Campeggiatore e survivalista, porta con sé un\'importante esperienza personale e professionale nel settore commerciale.',
    'about.webmastersDesc': 'La community può contare sul lavoro dei webmaster Andrea e Luca, che si occupano della gestione tecnica del sito e dello sviluppo degli strumenti digitali dedicati al gruppo. Oltre alle competenze informatiche, condividono una forte passione per l\'outdoor e sono esperti viaggiatori: proprio questa combinazione di esperienza sul campo e abilità tecniche li porta a supportare realtà come Tende da Tetto, contribuendo alla crescita e all\'evoluzione della community.',
    'about.historyTitle': 'La Nostra Storia',
    'about.milestone2026Title': 'Un Nuovo Capitolo',
    'about.milestone2026Desc': 'Il 2026 si apre come un anno ricco di novità e nuove energie. Il lancio di questo sito segna un passo importante per la community, che ora ha una casa digitale tutta sua dove ritrovarsi, informarsi e condividere esperienze. All\'orizzonte ci sono nuove avventure, raduni sempre più coinvolgenti e collaborazioni che porteranno valore a tutti gli iscritti.',
    'about.milestone2025Title': 'La Festa Continua',
    'about.milestone2025Desc': 'La community è più viva che mai: i canali social sono attivi e rappresentano un punto di riferimento per tanti appassionati. Il confronto in un clima di amicizia rimane il valore centrale, sia online che durante gli eventi. La famiglia degli amministratori si allarga con Fe di Busto e Igor, che portano nuove idee per far crescere ancora di più il mondo delle tende da tetto e del campeggio.',
    'about.milestone2024Title': 'Leader di Settore',
    'about.milestone2024Desc': 'I numeri parlano chiaro: la community è la più grande e attiva, sia online che dal vivo. Per chi vuole avvicinarsi al mondo delle tende da tetto, iscriversi al gruppo e partecipare a un evento diventa quasi un passaggio naturale. Oltre alle discussioni e ai contenuti di ispirazione, arrivano anche i primi vantaggi esclusivi come sconti e promozioni.',
    'about.milestone2023Title': 'Community Consolidata',
    'about.milestone2023Desc': 'La crescita continua e il gruppo diventa un punto di riferimento per chi possiede una tenda da tetto, per chi sta pensando di acquistarla e anche per chi viaggia con altri mezzi. Si parla di viaggi, camperizzazioni, esperienze e dubbi, trovando nei post e nei commenti risposte utili e concrete.',
    'about.milestone2022Title': 'Crescita Esplosiva',
    'about.milestone2022Desc': 'Il gruppo cresce in modo esponenziale, spinto dal desiderio di sempre più persone di vivere la libertà all\'aria aperta. Dai campeggiatori esperti ai neofiti, tantissimi nuovi membri trovano un ambiente positivo, costruttivo e ricco di confronto.',
    'about.milestone2021Title': 'La Nascita',
    'about.milestone2021Desc': 'L\'idea prende forma quando Piero, durante la ricerca della sua prima tenda da tetto, decide di creare un gruppo dedicato. Le prime iscrizioni arrivano subito e, dopo qualche mese, Natalia si offre di dare una mano nella gestione. Da lì in poi la storia decolla: il primo raduno supera i 50 mezzi.',
    'about.joinUs': 'Unisciti a Noi!',
    'about.joinUsDesc': 'Entra a far parte della community e inizia a condividere le tue avventure',
    'about.facebookGroup': 'Gruppo Facebook',
    
    // Common
    'common.loading': 'Caricamento...',
    'common.error': 'Errore',
    'common.close': 'Chiudi',
    'common.search': 'Cerca',
    'common.more': 'Altro',
    'common.back': 'Indietro',
    'common.min': 'min',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.community': 'Community',
    'nav.events': 'Events & Meetups',
    'nav.partner': 'Partners',
    'nav.about': 'About Us',
    'nav.join': 'Join the Community',
    
    // Hero Section
    'hero.titlePart1': '',
    'hero.titleHighlight': 'Italian Community',
    'hero.titlePart2': " - Italy's #1 for Rooftop Tents and Camping",
    'hero.description': 'Discover the best campsites, share your adventures and find everything you need to travel with your rooftop tent.',
    'hero.joinFacebook': 'Join on Facebook',
    'hero.followInstagram': 'Follow on Instagram',
    'hero.stats.members': 'Total Members',
    'hero.stats.posts': 'Monthly Posts',
    'hero.stats.active': 'Active Members',
    'hero.stats.rating': 'Community Rating',
    
    // Community Section
    'community.title': 'Our Community',
    'community.description': 'Founded in 2021, we quickly became the leading Italian reference point for rooftop tent, camping and vanlife enthusiasts with over 40,000 active members',
    'community.stats.members': 'Total Members',
    'community.stats.posts': 'Monthly Posts',
    'community.stats.comments': 'Monthly Comments',
    'community.stats.active': 'Active Members',
    'community.stats.facebookGroup': 'Facebook Group',
    'community.stats.last30days': 'Last 30 days',
    'community.stats.percentTotal': '70% of total',
    'community.join': 'Join the Community',
    'community.joinDescription': 'Become part of the largest Italian community of rooftop tent and camping enthusiasts',
    'community.facebookButton': 'Facebook Group (40K+ members)',
    'community.instagramButton': 'Follow on Instagram',
    'community.whatYouFind': '✨ What you will find:',
    'community.feature1': 'Practical guides and tips',
    'community.feature2': 'Product reviews',
    'community.feature3': 'Events and meetups organization',
    'community.feature4': 'Community support and help',
    'community.feature5': 'Exclusive partner offers',
    
    // Community Rules
    'community.rulesTitle': '🤝 Our Rules',
    'community.rule1Title': 'Stay on Topic',
    'community.rule1Desc': 'Only content related to rooftop tents and camping',
    'community.rule2Title': 'Respect Others',
    'community.rule2Desc': 'Always maintain a friendly and constructive tone',
    'community.rule3Title': 'No Spam',
    'community.rule3Desc': 'Avoid unauthorized advertising and repetitive content',
    
    // Guide Section
    'guides.title': 'Articles & Guides',
    'guides.description': 'Discover the best tips from our community of expert campers',
    'guides.readMore': 'Read more',
    'guides.viewAll': 'View all articles',
    
    // Partner Section
    'partner.title': 'Partners & Offers',
    'partner.description': 'Exclusive discounts and special offers from the best outdoor brands',
    'partner.become': 'Become a Partner',
    'partner.download': 'Download Price List',
    'partner.dedicated': 'Dedicated',
    'partner.special': 'Special',
    'partner.specialOffer': 'Special Community Offer',
    'partner.rooftopTents': 'Rooftop Tents',
    'partner.accessories': 'Tents & Accessories',
    'partner.setups': 'Setups',
    
    // Events
    'events.title': 'Events and Meetups',
    'events.upcoming': 'Upcoming Events',
    'events.past': 'Past Events',
    'events.description': 'Discover upcoming meetups, workshops and events from our community. Moments of sharing, learning and adventure with other rooftop tent and camping enthusiasts across Italy.',
    'events.scheduled': 'scheduled event',
    'events.freeParticipation': 'Free participation for all community members',
    'events.timeline': 'Meetups Timeline',
    'events.timelineDesc': 'All events and meetups organized by our community since 2021',
    'events.viewGallery': 'View Gallery',
    'events.participants': 'Participants',
    'events.location': 'Location',
    'events.date': 'Date',
    'events.details': 'Details',
    'events.organizer': 'Organizer',
    'events.moreInfo': 'More Info',
    'events.register': 'Register',
    'events.photoGallery': 'Photo Gallery',
    'events.closeGallery': 'Close Gallery',
    'events.raduno': 'Meetup',
    'events.evento': 'Event',
    'events.workshop': 'Workshop',
    'events.radunoNazionale': 'National Meetup',
    'events.radunoOffRoad': 'Off Road Meetup',
    'events.gemellaggio': 'Dachzeltnomaden Twinning',
    'events.gameCamp': 'Game Camp',
    'events.radunoPrimaverile': 'Spring Meetup',
    'events.radunoAutunnale': 'Autumn Meetup',
    'events.radunoItinerante': 'Itinerant Meetup',
    'events.radunoEnogastronomico': 'Food & Wine Meetup',
    'events.radunoEstivo': 'Summer Meetup',
    'events.cancelledBadWeather': 'Cancelled due to bad weather',
    'events.backToEvents': 'Back to Events',
    'events.firstMeetup': '🎉 The first meetup!',
    'events.howToParticipate': 'How to Participate',
    'events.joinCommunity': 'Join the Community',
    'events.joinCommunityDesc': 'Join our Facebook group to stay updated on all events and community news.',
    'events.followAnnouncements': 'Follow Announcements',
    'events.followAnnouncementsDesc': 'Subscribe to our newsletter to receive official invitations and event details directly via email.',
    'events.shareExperiences': 'Share Experiences',
    'events.shareExperiencesDesc': 'After the event, share your photos and experiences in our group to inspire other enthusiasts.',
    'events.noEventInArea': 'Don\'t see an event in your area?',
    'events.noEventInAreaDesc': 'Propose a meetup or event! Contact us to organize a community gathering in your region.',
    'events.proposeEvent': 'Propose an Event',
    
    // Footer
    'footer.description': 'The largest Italian community for rooftop tent and camping enthusiasts. We share passion, experiences and adventures.',
    'footer.community': 'Community',
    'footer.resources': 'Resources',
    'footer.partner': 'Partners',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.joinFacebook': 'Join on Facebook',
    'footer.followInstagram': 'Follow on Instagram',
    'footer.newsletter': 'Newsletter',
    'footer.rssFeed': 'RSS Feed',
    'footer.eventsLink': 'Events and Meetups',
    'footer.aboutUs': 'About Us',
    'footer.guides': 'Guides & Tutorials',
    'footer.faq': 'FAQ',
    'footer.becomePartner': 'Become a Partner',
    'footer.exclusiveOffers': 'Exclusive Offers',
    'footer.sponsoredBrands': 'Sponsored Brands',
    
    // About Page
    'about.title': 'About Us',
    'about.description': 'We are the largest Italian community dedicated to rooftop tents and camping. Since 2021, we unite enthusiasts from all over Italy to share experiences, advice and unforgettable adventures.',
    'about.contactUs': 'Contact Us',
    'about.missionTitle': 'Our Mission',
    'about.missionText1': 'We want to be the reference point for all Italians who love traveling with a rooftop tent. We believe that camping is much more than a way of traveling: it is a lifestyle that connects us with nature and with other people who share our same passion.',
    'about.missionText2': 'Through practical guides, honest reviews, a map of the best campsites and an active community, we help our members have ever better camping experiences.',
    'about.valuePassion': 'Passion',
    'about.valuePassionDesc': 'We love adventure and outdoor life',
    'about.valueCommunity': 'Community',
    'about.valueCommunityDesc': 'Together we are stronger, we share experiences',
    'about.valueQuality': 'Quality',
    'about.valueQualityDesc': 'Only verified content and reliable advice',
    'about.valueRespect': 'Respect',
    'about.valueRespectDesc': 'For nature, for others, for the rules',
    'about.teamTitle': 'The Tende da Tetto Team',
    'about.teamSubtitle': 'The people who make this community possible',
    'about.pieroDesc': 'Lifelong camper, passionate with deep technical knowledge of the sector.',
    'about.nataliaDesc': 'Active camper with sedan cars, boasts great experience in outdoor equipment and camperization.',
    'about.andreaDesc': 'Rooftop tent camper and motorcyclist with ground tent, has numerous trips across Europe to North Cape under his belt.',
    'about.igorDesc': 'Camper and survivalist, brings important personal and professional experience in the commercial sector.',
    'about.webmastersDesc': 'The community can count on the work of webmasters Andrea and Luca, who handle the technical management of the site and development of digital tools dedicated to the group. Beyond their IT skills, they share a strong passion for the outdoors and are experienced travelers.',
    'about.historyTitle': 'Our History',
    'about.milestone2026Title': 'A New Chapter',
    'about.milestone2026Desc': '2026 opens as a year full of novelties and new energies. The launch of this site marks an important step for the community, which now has its own digital home to meet, get informed and share experiences. On the horizon are new adventures, increasingly engaging meetups and collaborations.',
    'about.milestone2025Title': 'The Party Continues',
    'about.milestone2025Desc': 'The community is more alive than ever: social channels are active and represent a reference point for many enthusiasts. Friendly discussion remains the central value, both online and during events. The administrator family expands with Fe di Busto and Igor, bringing new ideas.',
    'about.milestone2024Title': 'Industry Leader',
    'about.milestone2024Desc': 'The numbers speak clearly: the community is the largest and most active, both online and in person. For those wanting to approach the world of rooftop tents, joining the group and participating in an event becomes almost a natural step.',
    'about.milestone2023Title': 'Consolidated Community',
    'about.milestone2023Desc': 'Growth continues and the group becomes a reference point for those who own a rooftop tent, for those thinking of buying one and also for those traveling with other means. Travel, camperizations, experiences and doubts are discussed.',
    'about.milestone2022Title': 'Explosive Growth',
    'about.milestone2022Desc': 'The group grows exponentially, driven by more and more people\'s desire to live freedom in the open air. From experienced campers to newcomers, many new members find a positive, constructive environment.',
    'about.milestone2021Title': 'The Birth',
    'about.milestone2021Desc': 'The idea takes shape when Piero, while searching for his first rooftop tent, decides to create a dedicated group. The first subscriptions arrive immediately and, after a few months, Natalia offers to help with management. The first meetup exceeded 50 vehicles.',
    'about.joinUs': 'Join Us!',
    'about.joinUsDesc': 'Become part of the community and start sharing your adventures',
    'about.facebookGroup': 'Facebook Group',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.close': 'Close',
    'common.search': 'Search',
    'common.more': 'More',
    'common.back': 'Back',
    'common.min': 'min',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Recupera la lingua salvata o usa italiano come default
    const saved = localStorage.getItem('language');
    return (saved === 'en' ? 'en' : 'it') as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const value = translations[language][key];
    return value !== undefined ? value : key;
  };

  useEffect(() => {
    // Aggiorna l'attributo lang del documento
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
