
import { Award, CheckCircle, Clock, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-romblad-900 mb-6">Om Romblad CAD & BIM AB</h2>
            <p className="text-lg text-gray-700 mb-6">
              Romblad CAD & BIM AB är ett svenskt konsultföretag specialiserat på 
              IT-lösningar för byggbranschen. Med expertis inom CAD, BIM och 
              systemintegration hjälper vi företag att effektivisera sina projekt
              och arbetsprocesser.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Vårt team har omfattande erfarenhet från stora och komplexa 
              byggprojekt i Sverige och internationellt. Vi är certifierade 
              inom ledande plattformar som Autodesk och Trimble och arbetar 
              kontinuerligt med att hålla oss uppdaterade inom senaste tekniken.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-romblad-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Expertkunskap</h3>
                  <p className="text-gray-600">Specialistkompetens inom CAD & BIM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-romblad-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Certifierad</h3>
                  <p className="text-gray-600">Autodesk och Trimble partner</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-romblad-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Kvalitet</h3>
                  <p className="text-gray-600">ISO 9001-certifierade processer</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-romblad-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Erfarenhet</h3>
                  <p className="text-gray-600">15+ års branscherfarenhet</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-6 -top-6 bg-romblad-100 rounded-lg w-full h-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200" 
              alt="IT-konsulter i arbete" 
              className="relative z-10 rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
