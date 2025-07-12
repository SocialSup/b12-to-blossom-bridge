import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Rejoignez les métiers du médico-social grâce à une formation à distance certifiante
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            Un accompagnement personnalisé pour réaliser vos ambitions professionnelles.
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg"
              asChild
              className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-4 border border-primary/20"
            >
              <Link to="/nos-formations">
                DÉCOUVREZ NOS FORMATIONS
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;