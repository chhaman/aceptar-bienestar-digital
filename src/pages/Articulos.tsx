
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { BookIcon } from 'lucide-react';

const articulos = [
  {
    titulo: "El poder de la aceptación emocional",
    categoria: "Emociones",
    resumen: "Exploraremos cómo aceptar nuestras emociones, incluso las difíciles, puede ser el primer paso hacia una vida más plena y auténtica.",
    fechaPublicacion: "15 mayo, 2025",
    tiempoLectura: "7 min"
  },
  {
    titulo: "Manejo del estrés en la vida cotidiana",
    categoria: "Bienestar",
    resumen: "Técnicas prácticas para identificar y manejar el estrés que podemos aplicar en nuestra rutina diaria.",
    fechaPublicacion: "10 mayo, 2025",
    tiempoLectura: "5 min"
  },
  {
    titulo: "Construyendo relaciones saludables",
    categoria: "Relaciones",
    resumen: "Cómo establecer límites sanos y comunicarnos efectivamente para desarrollar conexiones más significativas.",
    fechaPublicacion: "2 mayo, 2025",
    tiempoLectura: "8 min"
  },
  {
    titulo: "Mindfulness para principiantes",
    categoria: "Mindfulness",
    resumen: "Una introducción sencilla a la práctica de la atención plena y cómo puede transformar nuestra relación con el presente.",
    fechaPublicacion: "25 abril, 2025",
    tiempoLectura: "6 min"
  },
  {
    titulo: "Superando la autocrítica destructiva",
    categoria: "Autoestima",
    resumen: "Estrategias para reconocer y modificar los patrones de pensamiento autocríticos que limitan nuestro bienestar.",
    fechaPublicacion: "18 abril, 2025",
    tiempoLectura: "9 min"
  }
];

const Articulos = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <BookIcon className="h-8 w-8 text-aceptar-purple" />
            <span>Artículos de Autoayuda</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lee nuestros artículos escritos por profesionales para fortalecer tu salud mental y desarrollar herramientas de crecimiento personal.
          </p>
        </section>
        
        <section className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {articulos.map((articulo, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-aceptar-light-purple/30 text-aceptar-purple rounded-full text-sm">
                      {articulo.categoria}
                    </span>
                    <div className="text-sm text-gray-500">
                      {articulo.tiempoLectura} lectura
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-aceptar-dark-purple mb-2">{articulo.titulo}</h3>
                  <p className="text-gray-600 mb-4">{articulo.resumen}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Publicado: {articulo.fechaPublicacion}
                    </span>
                    <span className="text-aceptar-purple text-sm font-medium hover:underline">
                      Leer más →
                    </span>
                  </div>
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

export default Articulos;
