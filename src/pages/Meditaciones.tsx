
import React from 'react';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { Card, CardContent } from '@/components/ui/card';
import { BrainIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const meditaciones = [
  {
    id: "ansiedad",
    titulo: "Meditación para la ansiedad",
    duracion: "10",
    descripcion: "Una práctica guiada para calmar la mente y reducir la ansiedad.",
    instrucciones: [
      "Busca un lugar tranquilo donde no serás interrumpido",
      "Siéntate en una posición cómoda con la espalda recta",
      "Cierra los ojos y conecta con tu respiración"
    ]
  },
  {
    id: "respiracion-consciente",
    titulo: "Respiración consciente",
    duracion: "5",
    descripcion: "Técnica de respiración para momentos de estrés.",
    instrucciones: [
      "Siéntate cómodamente con la espalda erguida",
      "Respira por la nariz, llenando primero el abdomen y luego el pecho",
      "Exhala lentamente por la boca, vaciando primero el pecho y luego el abdomen"
    ]
  },
  {
    id: "escaner-corporal",
    titulo: "Escáner corporal",
    duracion: "15",
    descripcion: "Meditación para reconectar con las sensaciones de tu cuerpo.",
    instrucciones: [
      "Acuéstate boca arriba en una superficie cómoda",
      "Comienza focalizando tu atención en los dedos de los pies",
      "Sube gradualmente por todo el cuerpo, notando las sensaciones en cada parte"
    ]
  },
  {
    id: "dormir",
    titulo: "Meditación para dormir",
    duracion: "20",
    descripcion: "Práctica relajante para preparar el cuerpo y la mente para un sueño reparador.",
    instrucciones: [
      "Acuéstate en la posición en que normalmente duermes",
      "Realiza respiraciones lentas y profundas",
      "Visualiza que cada exhalación libera la tensión acumulada durante el día"
    ]
  },
  {
    id: "presente",
    titulo: "Centrarse en el presente",
    duracion: "8",
    descripcion: "Ejercicio para volver al momento presente y dejar ir preocupaciones.",
    instrucciones: [
      "Siéntate cómodamente y cierra los ojos",
      "Observa los pensamientos como si fueran nubes pasando por el cielo",
      "Cada vez que te distraigas, vuelve suavemente a tu respiración"
    ]
  },
  {
    id: "gratitud",
    titulo: "Cultivar la gratitud",
    duracion: "12",
    descripcion: "Meditación para desarrollar y fortalecer el sentimiento de gratitud.",
    instrucciones: [
      "Siéntate en una posición cómoda con las manos sobre el corazón",
      "Trae a tu mente tres cosas por las que te sientas agradecido hoy",
      "Con cada respiración, siente cómo la gratitud se expande en tu pecho"
    ]
  }
];

const Meditaciones = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-bg pb-16">
      <Header />
      <BackButton />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <BrainIcon className="h-8 w-8 text-aceptar-purple" />
            <span>Meditaciones Guiadas</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de meditaciones diseñadas para ayudarte a encontrar calma, claridad y conexión con tu ser interior.
          </p>
        </section>
        
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meditaciones.map((meditacion, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-aceptar-dark-purple">{meditacion.titulo}</h3>
                    <span className="px-2 py-1 bg-aceptar-light-purple/30 text-aceptar-purple rounded text-sm">
                      {meditacion.duracion} minutos
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{meditacion.descripcion}</p>
                  <Button 
                    className="w-full bg-aceptar-purple hover:bg-aceptar-dark-purple"
                    onClick={() => navigate(`/meditaciones/${meditacion.id}`)}
                  >
                    Comenzar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Mentoría ACEPTAR - Todos los derechos reservados</p>
          <p className="text-sm text-gray-500 mt-2">
            Apoyando tu salud mental y bienestar emocional
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Meditaciones;
