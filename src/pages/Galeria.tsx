import { Heart, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Galeria = () => {
  const photos = [
    {
      id: 1,
      src: "",
      alt: "Paciente recibiendo comida con una sonrisa",
      caption: "La alegría en sus ojos al recibir una comida casera es indescriptible"
    },
    {
      id: 2,
      src: "",
      alt: "Voluntaria preparando comidas",
      caption: "Cada plato es preparado con dedicación y amor"
    },
    {
      id: 3,
      src: "",
      alt: "Equipo de voluntarios organizando las entregas",
      caption: "Juntos coordinamos para llegar a más personas"
    },
    {
      id: 4,
      src: "",
      alt: "Momento de entrega en el hospital",
      caption: "Creando momentos especiales en medio del dolor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-800">Corazones Solidarios</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors">Inicio</Link>
              <Link to="/galeria" className="text-red-500 font-semibold">Galería</Link>
              <Link to="/reflexiones" className="text-gray-700 hover:text-red-500 transition-colors">Reflexiones</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/" className="text-gray-600 hover:text-red-500">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </Button>
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Galería de Momentos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada imagen cuenta una historia de amor, esperanza y conexión humana. 
              Estas son las memorias que atesoramos de nuestros actos de solidaridad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {photos.map((photo) => (
            <Card key={photo.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 text-center italic leading-relaxed">
                  "{photo.caption}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cada Imagen, Una Historia</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Detrás de cada fotografía hay una persona que recibió no solo alimento, 
                sino también un mensaje claro: "No estás solo". Estas imágenes capturan 
                la esencia de lo que significa ser humano: cuidar unos de otros.
              </p>
              <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                <Link to="/reflexiones">Leer Reflexiones</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-lg font-semibold">Corazones Solidarios</span>
          </div>
          <p className="text-gray-300">
            Llevando amor y esperanza, una comida a la vez.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Galeria;