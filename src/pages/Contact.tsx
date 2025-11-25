import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  MessageSquare, 
  Send,
  Facebook,
  Instagram,
  CheckCircle,
  Handshake,
  HelpCircle,
  Flag
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubjectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulazione invio - in futuro collegare a un backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo il prima possibile.",
      });
    }, 1500);
  };

  const contactOptions = [
    {
      icon: Facebook,
      title: "Gruppo Facebook",
      description: "Unisciti alla community e interagisci con oltre 40.000 membri",
      link: "https://www.facebook.com/groups/375926353544064",
      buttonText: "Vai al Gruppo",
      color: "from-[#1877F2] to-[#42A5F5]"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Seguici per foto, storie e aggiornamenti quotidiani",
      link: "https://www.instagram.com/tende_da_tetto_e_campeggio/",
      buttonText: "Seguici",
      color: "from-[#E4405F] to-[#F56040]"
    }
  ];

  const subjects = [
    { value: "info", label: "Informazioni generali", icon: HelpCircle },
    { value: "partnership", label: "Proposta di partnership", icon: Handshake },
    { value: "segnalazione", label: "Segnalazione campeggio", icon: Flag },
    { value: "altro", label: "Altro", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Mail className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Contattaci
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Hai domande, suggerimenti o vuoi collaborare con noi? 
                Siamo sempre felici di ascoltarti!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {contactOptions.map((option, index) => (
                  <Card key={index} className="p-6 bg-card/60 backdrop-blur border-0 hover:shadow-elegant transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color}`}>
                        <option.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {option.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {option.description}
                        </p>
                        <a href={option.link} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className={`bg-gradient-to-r ${option.color}`}>
                            {option.buttonText}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Contact Form */}
              <Card className="p-8 bg-card/60 backdrop-blur border-0">
                <div className="text-center mb-8">
                  <MessageSquare className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Inviaci un messaggio
                  </h2>
                  <p className="text-muted-foreground">
                    Compila il form e ti risponderemo il prima possibile
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Il tuo nome"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="La tua email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Argomento *</Label>
                      <Select value={formData.subject} onValueChange={handleSubjectChange} required>
                        <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                          <SelectValue placeholder="Seleziona un argomento" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject.value} value={subject.value}>
                              <div className="flex items-center gap-2">
                                <subject.icon className="h-4 w-4" />
                                {subject.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Messaggio *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Scrivi il tuo messaggio..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Invio in corso...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Invia Messaggio
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Messaggio inviato con successo!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Grazie per averci contattato. Ti risponderemo il prima possibile.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                    >
                      Invia un altro messaggio
                    </Button>
                  </div>
                )}
              </Card>

              {/* FAQ Teaser */}
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Hai una domanda frequente? Probabilmente la risposta è già nel nostro gruppo Facebook!
                </p>
                <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Facebook className="h-4 w-4 mr-2" />
                    Cerca nel Gruppo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
