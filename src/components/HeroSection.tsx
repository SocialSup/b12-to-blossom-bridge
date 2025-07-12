import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Bienvenue sur
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  {" "}Notre Site
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Découvrez nos services exceptionnels et notre expertise 
                pour vous accompagner dans tous vos projets.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                asChild
                className="bg-gradient-primary hover:shadow-glow transition-smooth"
              >
                <Link to="/services">
                  Nos Services 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="hover:bg-secondary transition-smooth"
              >
                <Link to="/about">En savoir plus</Link>
              </Button>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-primary rounded-3xl shadow-elegant flex items-center justify-center">
              <div className="text-white text-center space-y-4">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                  <span className="text-4xl">🚀</span>
                </div>
                <p className="text-lg font-medium">Votre contenu ici</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;