import Navigation from "@/components/Navigation";

const NotreMission = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Notre
              <span className="text-primary">
                {" "}Mission
              </span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Notre Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">Formations certifiantes reconnues</strong> : 
                  Préparez-vous à des certifications indispensables dans le domaine médico-social : 
                  ADVF, SAMS, ADSMS, MSADS, RCSAD.
                </p>
                <p>
                  <strong className="text-primary">Apprentissage 100% à distance</strong> : 
                  Une plateforme flexible, accessible à votre rythme, où que vous soyez.
                </p>
                <p>
                  <strong className="text-primary">Un accompagnement sur-mesure</strong> : 
                  Des formateurs permanents, un coaching personnalisé et des classes virtuelles 
                  interactives pour vous guider à chaque étape.
                </p>
                <p>
                  <strong className="text-primary">Des formations pour tous</strong> : 
                  Demandeurs d'emploi, salariés, ou personnes en reconversion professionnelle, 
                  nous avons une solution adaptée à vos besoins.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
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

          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
              Pourquoi choisir Social Sup ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl text-white">🏆</span>
                </div>
                <h4 className="font-semibold">Expertise Reconnue</h4>
                <p className="text-sm text-muted-foreground">
                  Organisme certifié Qualiopi et formations reconnues par l'État
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl text-white">💻</span>
                </div>
                <h4 className="font-semibold">Formation 100% Digitale</h4>
                <p className="text-sm text-muted-foreground">
                  Plateforme e-learning accessible 24h/24, 7j/7
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl text-white">👥</span>
                </div>
                <h4 className="font-semibold">Accompagnement Personnalisé</h4>
                <p className="text-sm text-muted-foreground">
                  Formateurs dédiés et coaching individuel
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h4 className="font-semibold">Flexibilité Totale</h4>
                <p className="text-sm text-muted-foreground">
                  Apprenez à votre rythme selon vos disponibilités
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotreMission;