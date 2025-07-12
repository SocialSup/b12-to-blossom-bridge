import Navigation from "@/components/Navigation";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Qui 
              <span className="text-primary">
                {" "}Sommes-Nous ?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre organisme de formation spécialisé dans le médico-social
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h2 className="text-3xl font-semibold mb-6 text-primary">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Social Sup est né de la volonté de démocratiser l'accès aux formations dans le secteur médico-social. 
                  Notre organisme s'est spécialisé dans la formation à distance pour offrir une flexibilité maximale 
                  à tous nos apprenants.
                </p>
                <p>
                  Nous accompagnons chaque année des centaines d'apprenants vers l'obtention de leurs certifications 
                  professionnelles reconnues par le Ministère du Travail et de l'Emploi.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h2 className="text-3xl font-semibold mb-6 text-primary">Nos Valeurs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <h3 className="font-semibold">Excellence pédagogique</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-11">
                    Des contenus de formation de haute qualité, constamment mis à jour
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <h3 className="font-semibold">Accompagnement personnalisé</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-11">
                    Un suivi individuel pour garantir la réussite de chaque apprenant
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <h3 className="font-semibold">Flexibilité</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-11">
                    Apprenez à votre rythme, quand vous voulez, où vous voulez
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <h3 className="font-semibold">Reconnaissance officielle</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-11">
                    Certifications reconnues et organisme certifié Qualiopi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuiSommesNous;