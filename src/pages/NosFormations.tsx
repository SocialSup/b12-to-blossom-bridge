import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import advfIcon from "@/assets/advf-icon.png";
import samsIcon from "@/assets/sams-icon.png";

const NosFormations = () => {
  const formations = [
    {
      title: "Assistant(e) De Vie aux Familles - ADVF",
      description: "Accompagnez les familles et les personnes dans leur quotidien grâce à une formation complète et professionnalisante.",
      icon: advfIcon,
      link: "/formation-advf"
    },
    {
      title: "Secrétaire Assistant(e) Médico-Social(e) - SAMS",
      description: "Développez les compétences administratives et relationnelles nécessaires dans le secteur médico-social.",
      icon: samsIcon,
      link: "/formation-sams"
    },
    {
      title: "Assistant(e) de Direction Spécialisé(e) en Médico-Social - ADSMS",
      description: "Acquérez les outils pour gérer efficacement les tâches administratives et organisationnelles d'établissements médico-sociaux.",
      icon: "🏥",
      link: "/formation-adsms"
    },
    {
      title: "Médiateur(trice) Social(e) Accès aux Droits et Services - MSADS",
      description: "Formez-vous pour devenir un(e) acteur(rice) clé de la cohésion sociale, en facilitant l'accès aux droits et services pour les personnes en situation de vulnérabilité.",
      icon: "🤝",
      link: "/formation-msads"
    },
    {
      title: "Responsable Coordinateur(trice) Services Au Domicile - RCSAD",
      description: "Coordonnez et supervisez les services à domicile en répondant aux besoins des bénéficiaires et des équipes.",
      icon: "🏠",
      link: "/formation-rcsad"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Nos
            <span className="text-primary">
              {" "}Formations
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des formations médico-sociales adaptées à votre projet de carrière
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {formations.map((formation, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-smooth group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  {typeof formation.icon === 'string' && formation.icon.startsWith('/') ? (
                    <img 
                      src={formation.icon} 
                      alt={formation.title}
                      className="w-full h-full object-contain"
                    />
                  ) : typeof formation.icon === 'string' ? (
                    <span className="text-4xl">{formation.icon}</span>
                  ) : (
                    <img 
                      src={formation.icon} 
                      alt={formation.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4 leading-tight">{formation.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{formation.description}</p>
              </div>

              <div className="text-center">
                <Button 
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth group-hover:bg-primary group-hover:text-white"
                >
                  <Link to={formation.link}>
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-elegant text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-6">
              <span className="text-3xl text-white">🏅</span>
            </div>
            <h2 className="text-3xl font-semibold text-primary">
              Validation officielle de nos certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Toutes nos formations sont reconnues et certifiées par{" "}
              <strong>Le Ministère du Travail et de l'Emploi.</strong>
            </p>
            <p className="text-lg text-muted-foreground">
              De plus, notre organisme est certifié{" "}
              <strong className="text-primary">Qualiopi,</strong>{" "}
              gage de la qualité et de l'excellence de nos formations
            </p>
            
            <div className="pt-6">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-smooth"
              >
                <Link to="/contact">
                  Contactez-nous pour plus d'informations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosFormations;