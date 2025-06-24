import { Heart, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Galeria = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      alt: "Paciente recibiendo comida con una sonrisa",
      caption: "La alegría en sus ojos al recibir una comida casera es indescriptible"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      alt: "Voluntaria preparando comidas",
      caption: "Cada plato es preparado con dedicación y amor"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      alt: "Equipo de voluntarios organizando las entregas",
      caption: "Juntos coordinamos para llegar a más personas"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      alt: "Momento de entrega en el hospital",
      caption: "Creando momentos especiales en medio del dolor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in">
              <Heart className="h-8 w-8 text-red-500 animate-pulse" />
              <h1 className="text-2xl font-bold text-gray-800">Corazones Solidarios</h1>
            </div>
            <div className="hidden md:flex space-x-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/" className="text-gray-700 hover:text-red-500 transition-all duration-300 hover:scale-105">Inicio</Link>
              <Link to="/galeria" className="text-red-500 font-semibold relative">
                Galería
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 animate-scale-in"></span>
              </Link>
              <Link to="/reflexiones" className="text-gray-700 hover:text-red-500 transition-all duration-300 hover:scale-105">Reflexiones</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <Button variant="ghost" asChild className="mb-4 transition-all duration-300 hover:scale-105">
            <Link to="/" className="text-gray-600 hover:text-red-500">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              Volver al inicio
            </Link>
          </Button>
          
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-scale-in">Galería de Momentos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Cada imagen cuenta una historia de amor, esperanza y conexión humana. 
              Estas son las memorias que atesoramos de nuestros actos de solidaridad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group animate-fade-in hover:scale-[1.02]"
              style={{ animationDelay: `${0.7 + index * 0.2}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <CardContent className="p-6 transition-all duration-300">
                <p className="text-gray-700 text-center italic leading-relaxed transform transition-all duration-300 group-hover:text-gray-800">
                  "{photo.caption}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg max-w-2xl mx-auto hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-scale-in">Cada Imagen, Una Historia</h3>
              <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: '1.7s' }}>
                Detrás de cada fotografía hay una persona que recibió no solo alimento, 
                sino también un mensaje claro: "No estás solo". Estas imágenes capturan 
                la esencia de lo que significa ser humano: cuidar unos de otros.
              </p>
              <Button 
                asChild 
                className="bg-red-500 hover:bg-red-600 text-white transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: '1.9s' }}
              >
                <Link to="/reflexiones">Leer Reflexiones</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16 animate-fade-in" style={{ animationDelay: '2.1s' }}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 transition-all duration-300 hover:scale-105">
            <Heart className="h-6 w-6 text-red-500 animate-pulse" />
            <span className="text-lg font-semibold">Corazones Solidarios</span>
          </div>
          <p className="text-gray-300 transition-colors duration-300 hover:text-white">
            Llevando amor y esperanza, una comida a la vez.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Galeria;
