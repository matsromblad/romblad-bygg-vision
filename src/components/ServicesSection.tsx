
import { Building2, LayoutGrid, Terminal, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <LayoutGrid className="h-10 w-10 text-romblad-600" />,
    title: "BIM-konsulttjänster",
    description: "Expertis inom Building Information Modeling för effektivare byggprojekt och samordning mellan discipliner."
  },
  {
    icon: <Terminal className="h-10 w-10 text-romblad-600" />,
    title: "CAD-utveckling",
    description: "Skräddarsydda CAD-lösningar och automatisering som effektiviserar era projekteringsprocesser."
  },
  {
    icon: <Building2 className="h-10 w-10 text-romblad-600" />,
    title: "3D-modellering",
    description: "Avancerad 3D-modellering och visualisering för kommunikation och beslutsfattande i byggprojekt."
  },
  {
    icon: <Users className="h-10 w-10 text-romblad-600" />,
    title: "Utbildning",
    description: "Skräddarsydda utbildningsprogram för att öka kompetensen i er organisation inom CAD och BIM."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-romblad-900 mb-4">Våra tjänster</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vi erbjuder kompletta IT- och CAD-lösningar för byggbranschen, 
            med fokus på att effektivisera arbetsprocesser och öka kvaliteten i era projekt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-romblad-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
