import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Ajouter la logique de soumission du formulaire
    console.log("Formulaire soumis");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span className="text-primary">Contact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous vous accompagnons vers la réussite!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom *
                </label>
                <Input id="name" placeholder="Votre nom" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" required />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Téléphone *
                </label>
                <Input id="phone" type="tel" placeholder="+33 6 76 60 41 25" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="mt-1" 
                  required 
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  J'autorise ce site web à stocker les informations de ma demande afin de pouvoir y répondre. *
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
              >
                Envoyer
              </Button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h2 className="text-2xl font-semibold mb-6">Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a 
                      href="tel:+33676604125" 
                      className="text-primary hover:underline"
                    >
                      +33 6 76 60 41 25
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:contact@socialsup.fr" 
                      className="text-primary hover:underline"
                    >
                      contact@socialsup.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Localisation</h3>
                    <p className="text-muted-foreground">
                      Cuincy, Hauts de France<br />
                      59553 FR
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                Horaires
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="text-muted-foreground">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-muted-foreground">9:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-muted-foreground">9:00 - 12:00</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl font-semibold mb-4">Besoin d'une réponse rapide ?</h3>
              <p className="mb-6 opacity-90">
                Appelez-nous directement pour une consultation immédiate
              </p>
              <Button 
                asChild
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                <a href="tel:+33676604125">
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;