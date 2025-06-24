import { Heart, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ParticipationForm from "@/components/ParticipationForm";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
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
              <Link to="/galeria" className="text-gray-700 hover:text-red-500 transition-colors">Galería</Link>
              <Link to="/reflexiones" className="text-gray-700 hover:text-red-500 transition-colors">Reflexiones</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Un Acto de
              <span className="text-red-500 block">Amor y Esperanza</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Llevamos comida nutritiva y caliente a las personas que aguardan afuera de los hospitales, 
              acompañándolos con un gesto de solidaridad mientras esperan noticias de sus familiares en urgencias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                <Link to="/galeria">Ver Galería</Link>
              </Button>
              <Button variant="outline" asChild className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-3 text-lg">
                <Link to="/reflexiones">Leer Reflexiones</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Misión</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Creemos que brindar alimento a quienes esperan fuera de los hospitales puede aliviar 
              la ansiedad y el cansancio, entregando un mensaje de apoyo y humanidad en momentos difíciles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Con Amor</h4>
                <p className="text-gray-600">
                  Cada porción es preparada con cariño y respeto, pensando en brindar consuelo y calor en medio de la incertidumbre.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-3">En Comunidad</h4>
                <p className="text-gray-600">
                  Nuestra comunidad se une para ofrecer esperanza y acompañamiento a quienes enfrentan momentos de angustia.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Con Propósito</h4>
                <p className="text-gray-600">
                  Cada entrega representa un compromiso por llevar luz y esperanza a quienes atraviesan momentos difíciles junto a sus seres queridos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Únete a Nuestra Causa</h3>
            <p className="text-lg text-gray-600 mb-8">
              Tu ayuda puede hacer que una persona que espera se sienta acompañada y apoyada. 
              Juntos podemos compartir más que comida: compartimos esperanza y humanidad.
            </p>
            <Button 
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 text-lg"
              onClick={() => setShowForm(true)}
            >
              Quiero Participar
            </Button>
          </div>
        </div>
      </section>

      {/* Special Thanks Section */}
      <section className="py-12 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto text-center max-w-3xl">
          <h4 className="text-2xl font-bold text-gray-800 mb-6">Agradecimientos Especiales</h4>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Este acto de amor y generosidad no habría sido posible sin la iniciativa y visión de{" "}
            <span className="font-semibold text-red-500">Roman Reyes Ruiz</span>, 
            quien tuvo la idea de llevar alimento y esperanza a quienes más lo necesitan. 
            Su empatía y liderazgo nos inspiran a seguir construyendo una comunidad más solidaria.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            También extendemos un sincero agradecimiento a{" "}
            <span className="font-semibold text-red-500">Jessica Hernandez Hernandez</span>, 
            por su compromiso, creatividad y dedicación al desarrollo de este proyecto. 
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-2">
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
      <ParticipationForm open={showForm} onOpenChange={setShowForm} />
    </div>
  );
};

export default Index;
