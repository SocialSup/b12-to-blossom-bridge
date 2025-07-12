import Navigation from "@/components/Navigation";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Service 1",
      description: "Description détaillée de votre premier service principal",
      features: [
        "Fonctionnalité 1",
        "Fonctionnalité 2", 
        "Fonctionnalité 3"
      ],
      icon: "🎯"
    },
    {
      title: "Service 2", 
      description: "Description détaillée de votre deuxième service principal",
      features: [
        "Fonctionnalité 1",
        "Fonctionnalité 2",
        "Fonctionnalité 3"
      ],
      icon: "🚀"
    },
    {
      title: "Service 3",
      description: "Description détaillée de votre troisième service principal", 
      features: [
        "Fonctionnalité 1",
        "Fonctionnalité 2",
        "Fonctionnalité 3"
      ],
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Nos
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {" "}Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            [Votre contenu B12 sera inséré ici] - Découvrez notre gamme complète 
            de services professionnels adaptés à vos besoins
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-glow" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-elegant text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Pourquoi choisir nos services ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                <span className="text-xl text-white">📈</span>
              </div>
              <h4 className="font-semibold">Expertise</h4>
              <p className="text-sm text-muted-foreground">
                Des années d'expérience à votre service
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                <span className="text-xl text-white">⏰</span>
              </div>
              <h4 className="font-semibold">Rapidité</h4>
              <p className="text-sm text-muted-foreground">
                Des délais respectés et des résultats rapides
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                <span className="text-xl text-white">🎯</span>
              </div>
              <h4 className="font-semibold">Précision</h4>
              <p className="text-sm text-muted-foreground">
                Une approche sur mesure pour chaque projet
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                <span className="text-xl text-white">💯</span>
              </div>
              <h4 className="font-semibold">Qualité</h4>
              <p className="text-sm text-muted-foreground">
                Un niveau de qualité irréprochable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;