import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">
              À propos de
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                {" "}nous
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre histoire, nos valeurs et notre équipe
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Notre Histoire</h2>
              <p className="text-muted-foreground leading-relaxed">
                [Votre contenu B12 sera inséré ici] - Nous sommes une entreprise 
                passionnée par l'excellence et l'innovation. Depuis notre création, 
                nous nous efforçons de fournir des services de qualité exceptionnelle 
                à nos clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre équipe d'experts travaille avec dévouement pour répondre 
                à vos besoins et dépasser vos attentes à chaque projet.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <div className="aspect-square bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <span className="text-6xl text-white">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Notre Équipe</h3>
              <p className="text-muted-foreground">
                Une équipe de professionnels expérimentés à votre service.
              </p>
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-elegant text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Nous visons l'excellence dans tout ce que nous faisons
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-elegant text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Confiance</h3>
              <p className="text-muted-foreground text-sm">
                La confiance est au cœur de nos relations clients
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-elegant text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Nous innovons constamment pour mieux vous servir
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;