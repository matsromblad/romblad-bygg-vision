
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0 blueprint-bg opacity-10"></div>
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-romblad-900 leading-tight mb-6">
              IT och CAD-lösningar för byggbranschen
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Vi hjälper er med skräddarsydda BIM- och CAD-lösningar för 
              stora byggprojekt. Expertis som förenklar ditt arbetsflöde.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-romblad-700 hover:bg-romblad-800 text-white">
                Kontakta oss
              </Button>
              <Button size="lg" variant="outline" className="border-romblad-600 text-romblad-700">
                Läs mer om våra tjänster
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-romblad-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-romblad-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
            <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200" 
                alt="CAD design for a construction project" 
                className="rounded w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
