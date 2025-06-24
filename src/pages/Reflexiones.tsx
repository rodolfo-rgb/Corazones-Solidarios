import { Heart, ArrowLeft, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Reflexiones = () => {
  const reflections = [
    {
      id: 1,
      title: "El Poder Sanador de la Comida Casera",
      content: "Hay algo mágico en una comida preparada en casa. No es solo la combinación de ingredientes, sino el amor que se infunde en cada paso del proceso. Cuando llevamos estas comidas a los hospitales, llevamos un pedacito de hogar, un recuerdo de que más allá de las paredes blancas y el olor a desinfectante, existe un mundo lleno de cariño esperándolos.",
      author: "Reflexión colectiva"
    },
    {
      id: 2,
      title: "Cuando el Dar se Convierte en Recibir",
      content: "Cada vez que entregamos una comida, pensamos que somos nosotros quienes damos. Pero la verdad es que recibimos mucho más de lo que ofrecemos. Recibimos sonrisas que iluminan nuestro día, palabras de agradecimiento que tocan nuestro corazón, y la profunda satisfacción de saber que hemos hecho una diferencia en la vida de alguien.",
      author: "Testimonio de voluntario"
    },
    {
      id: 3,
      title: "La Dignidad en los Pequeños Gestos",
      content: "Un hospital puede ser un lugar donde las personas se sienten vulnerables y despojadas de su identidad. Pero cuando llegamos con una comida preparada especialmente para ellos, les devolvemos un poco de esa dignidad. Les recordamos que son importantes, que merecen cuidado, y que hay personas que piensan en su bienestar.",
      author: "Reflexión sobre dignidad humana"
    },
    {
      id: 4,
      title: "El Altruismo como Medicina del Alma",
      content: "Los médicos curan el cuerpo, las medicinas alivian el dolor, pero el altruismo sana el alma. Cuando actuamos desinteresadamente para el beneficio de otros, no solo transformamos sus vidas, sino que también transformamos las nuestras. Descubrimos que en el acto de dar, encontramos nuestro propósito más profundo.",
      author: "Reflexión filosófica"
    },
    {
      id: 5,
      title: "Construyendo Puentes de Esperanza",
      content: "Cada comida que llevamos es como construir un puente: un puente entre la soledad y la compañía, entre la desesperanza y la fe, entre el olvido y el recuerdo de que somos una comunidad que se cuida mutuamente. Estos puentes de esperanza conectan corazones y crean redes de apoyo que trascienden las circunstancias.",
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
              Estos pensamientos nacen de nuestras experiencias compartidas, 
              de los momentos vividos y de la profunda convicción de que el amor 
              puede transformar cualquier circunstancia.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {reflections.map((reflection, index) => (
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
                Te invitamos a reflexionar sobre el poder transformador del altruismo. 
                Cada acto de bondad, por pequeño que parezca, tiene el potencial de 
                cambiar una vida, de iluminar un día oscuro, de recordarnos que 
                la humanidad es hermosa cuando elegimos amarnos unos a otros.
              </p>
              <p className="text-gray-600 italic">
                "El altruismo no es solo dar, es reconocer en el otro una parte de nosotros mismos."
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
