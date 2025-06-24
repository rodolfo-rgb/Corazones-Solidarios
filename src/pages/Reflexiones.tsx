import { Heart, ArrowLeft, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Reflexiones = () => {
  const reflections = [
    {
      id: 1,
      title: "El Consuelo de un Plato Caliente",
      content: "Llevar comida a quienes esperan afuera de los hospitales es más que alimentar el cuerpo; es brindar consuelo, calidez y esperanza en medio de la incertidumbre que viven al cuidar a sus seres queridos en urgencias.",
      author: "Reflexión colectiva"
    },
    {
      id: 2,
      title: "Dar Comida, Recibir Gratitud",
      content: "Cada entrega de alimento nos recuerda que el acto de dar se convierte en un lazo de humanidad. Las sonrisas y palabras de agradecimiento de quienes esperan nos llenan el alma y nos motivan a seguir apoyando.",
      author: "Testimonio de voluntario"
    },
    {
      id: 3,
      title: "La Dignidad en el Cuidado",
      content: "Acompañar con alimentos a quienes viven la angustia de esperar en hospitales es una forma de devolverles dignidad, recordándoles que no están solos y que su dolor es comprendido y valorado.",
      author: "Reflexión sobre dignidad humana"
    },
    {
      id: 4,
      title: "Altruismo que Sana el Alma",
      content: "La medicina puede curar cuerpos, pero el altruismo transforma corazones. Actuar con desinterés por otros nos conecta con nuestro propósito más profundo y nos hace comunidad.",
      author: "Reflexión filosófica"
    },
    {
      id: 5,
      title: "Construyendo Redes de Esperanza",
      content: "Cada comida entregada es un puente de apoyo entre quienes sufren y quienes eligen acompañar. Creamos redes de solidaridad que fortalecen el tejido humano en los momentos más difíciles.",
      author: "Meditación sobre comunidad"
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
              <Link to="/galeria" className="text-gray-700 hover:text-red-500 transition-colors">Galería</Link>
              <Link to="/reflexiones" className="text-red-500 font-semibold">Reflexiones</Link>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Reflexiones del Corazón</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estos pensamientos nacen de nuestras experiencias acompañando a quienes esperan en los hospitales, 
              y de la certeza de que un acto de amor puede cambiar la experiencia de quienes viven momentos difíciles.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {reflections.map((reflection) => (
            <Card key={reflection.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {reflection.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      {reflection.content}
                    </p>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 italic">
                        — {reflection.author}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-0 shadow-lg max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Una Invitación a la Reflexión</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Te invitamos a recordar que acompañar a quienes sufren con gestos simples, como llevar comida, 
                es un acto de amor que fortalece nuestra humanidad y nos conecta en comunidad.
              </p>
              <p className="text-gray-600 italic">
                "En cada alimento entregado, hay un puente de esperanza tendido entre corazones."
              </p>
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

export default Reflexiones;
