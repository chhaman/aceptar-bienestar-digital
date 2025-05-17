
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulseIcon, CheckCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categorias = [
  { nombre: "Todos", activa: true },
  { nombre: "Respiración", activa: false },
  { nombre: "Relajación", activa: false },
  { nombre: "Movimiento", activa: false },
  { nombre: "Expresión", activa: false },
  { nombre: "Concentración", activa: false }
];

const ejercicios = [
  {
    titulo: "Respiración 4-7-8",
    categoria: "Respiración",
    descripcion: "Técnica de respiración para calmar el sistema nervioso y reducir la ansiedad.",
    duracion: "5 minutos",
    nivel: "Principiante"
  },
  {
    titulo: "Relajación muscular progresiva",
    categoria: "Relajación",
    descripcion: "Aprende a tensar y relajar grupos musculares para liberar tensión física y mental.",
    duracion: "15 minutos",
    nivel: "Intermedio"
  },
  {
    titulo: "Estiramiento consciente",
    categoria: "Movimiento",
    descripcion: "Serie de estiramientos suaves acompañados de atención plena a las sensaciones corporales.",
    duracion: "10 minutos",
    nivel: "Principiante"
  },
  {
    titulo: "Diario emocional guiado",
    categoria: "Expresión",
    descripcion: "Ejercicio de escritura para identificar y procesar emociones a través de preguntas reflexivas.",
    duracion: "20 minutos",
    nivel: "Todos los niveles"
  },
  {
    titulo: "Meditación de los 5 sentidos",
    categoria: "Concentración",
    descripcion: "Práctica de mindfulness enfocada en las percepciones sensoriales del momento presente.",
    duracion: "8 minutos",
    nivel: "Principiante"
  },
  {
    titulo: "Visualización de lugar seguro",
    categoria: "Relajación",
    descripcion: "Técnica de visualización para crear un refugio mental que genere calma y seguridad.",
    duracion: "12 minutos",
    nivel: "Principiante"
  }
];

const Ejercicios = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <HeartPulseIcon className="h-8 w-8 text-aceptar-purple" />
            <span>Ejercicios de Bienestar</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de ejercicios prácticos diseñados para mejorar tu bienestar físico, mental y emocional.
          </p>
        </section>
        
        {/* Filtros */}
        <section className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((categoria, index) => (
              <Button 
                key={index}
                variant={categoria.activa ? "default" : "outline"}
                className={categoria.activa ? "bg-aceptar-purple hover:bg-aceptar-dark-purple" : "border-aceptar-purple text-aceptar-dark-purple"}
              >
                {categoria.nombre}
              </Button>
            ))}
          </div>
        </section>
        
        {/* Lista de ejercicios */}
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ejercicios.map((ejercicio, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-aceptar-dark-purple">{ejercicio.titulo}</h3>
                    <span className="px-2 py-1 bg-aceptar-light-purple/30 text-aceptar-purple rounded-full text-sm">
                      {ejercicio.categoria}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{ejercicio.descripcion}</p>
                  
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span>{ejercicio.duracion}</span>
                    <span>{ejercicio.nivel}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-aceptar-purple hover:bg-aceptar-dark-purple flex items-center justify-center gap-2"
                  >
                    <CheckCircleIcon className="h-4 w-4" />
                    Comenzar ejercicio
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

export default Ejercicios;
