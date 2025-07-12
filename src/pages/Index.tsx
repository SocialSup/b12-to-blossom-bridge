import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import advfIcon from "@/assets/advf-icon.png";
import samsIcon from "@/assets/sams-icon.png";

const Index = () => {
  const formations = [
    {
      title: "Assistant(e) De Vie aux Familles - ADVF",
      description: "Accompagnez les familles et les personnes dans leur quotidien grâce à une formation complète et professionnalisante.",
      icon: advfIcon,
    },
    {
      title: "Secrétaire Assistant(e) Médico-Social(e) - SAMS",
      description: "Développez les compétences administratives et relationnelles nécessaires dans le secteur médico-social.",
      icon: samsIcon,
    },
    {
      title: "Assistant(e) de Direction Spécialisé(e) en Médico-Social - ADSMS",
      description: "Acquérez les outils pour gérer efficacement les tâches administratives et organisationnelles d'établissements médico-sociaux.",
      icon: "🏥",
    },
    {
      title: "Médiateur(trice) Social(e) Accès aux Droits et Services - MSADS",
      description: "Formez-vous pour devenir un(e) acteur(rice) clé de la cohésion sociale, en facilitant l'accès aux droits et services pour les personnes en situation de vulnérabilité.",
      icon: "🤝",
    },
    {
      title: "Responsable Coordinateur(trice) Services Au Domicile - RCSAD",
      description: "Coordonnez et supervisez les services à domicile en répondant aux besoins des bénéficiaires et des équipes.",
      icon: "🏠",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Section Notre Mission */}
      <section className="py-16 bg-white" id="mission">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Notre mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Formations certifiantes reconnues</strong> : 
                  Préparez-vous à des certifications indispensables dans le domaine médico-social : 
                  ADVF, SAMS, ADSMS, MSADS, RCSAD.
                </p>
                <p>
                  <strong className="text-foreground">Apprentissage 100% à distance</strong> : 
                  Une plateforme flexible, accessible à votre rythme, où que vous soyez.
                </p>
                <p>
                  <strong className="text-foreground">Un accompagnement sur-mesure</strong> : 
                  Des formateurs permanents, un coaching personnalisé et des classes virtuelles 
                  interactives pour vous guider à chaque étape.
                </p>
                <p>
                  <strong className="text-foreground">Des formations pour tous</strong> : 
                  Demandeurs d'emploi, salariés, ou personnes en reconversion professionnelle, 
                  nous avons une solution adaptée à vos besoins.
                </p>
              </div>
              <Button 
                asChild
                className="bg-gradient-primary hover:shadow-glow transition-smooth"
              >
                <Link to="/contact">Contactez-nous</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-subtle rounded-2xl p-8 shadow-elegant">
              <div className="aspect-video bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <span className="text-6xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Votre Réussite, Notre Priorité
              </h3>
              <p className="text-muted-foreground text-center">
                Nous nous engageons à vous accompagner jusqu'à l'obtention de votre certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos domaines de formation */}
      <section className="py-16 bg-gradient-subtle" id="formations">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">
              Nos domaines de formation
            </h2>
            <p className="text-xl text-muted-foreground">
              Des formations médico-sociales adaptées à votre projet de carrière
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {formations.map((formation, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-smooth">
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
                  <h3 className="text-lg font-semibold mb-4 leading-tight">{formation.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{formation.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-elegant text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-6">
              <span className="text-3xl text-white">🏅</span>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Validation officielle de nos certifications
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Toutes nos formations sont reconnues et certifiées par{" "}
              <strong>Le Ministère du Travail et de l'Emploi.</strong>
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              De plus, notre organisme est certifié{" "}
              <strong className="text-primary">Qualiopi,</strong>{" "}
              gage de la qualité et de l'excellence de nos formations
            </p>
            
            <Button 
              asChild
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-smooth"
            >
              <Link to="/nos-formations">
                Découvrir toutes nos formations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
