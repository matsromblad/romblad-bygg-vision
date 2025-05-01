
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Nya Karolinska Sjukhuset",
    category: "Sjukvård",
    description: "BIM-koordination och systemintegrering för ett av Sveriges mest avancerade sjukhusbyggen.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Citybanan Stockholm",
    category: "Infrastruktur",
    description: "CAD-utveckling och datahantering för Stockholms omfattande järnvägsprojekt.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Slussen Ombyggnad",
    category: "Stadsplanering",
    description: "3D-modellering och visualisering för kommunikation med intressenter.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-romblad-900 mb-4">Utvalda projekt</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ett urval av projekt där vi har bidragit med vår expertis inom 
            CAD, BIM och IT för byggbranschen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-romblad-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-romblad-700 font-medium hover:text-romblad-800"
          >
            Se alla projekt
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
