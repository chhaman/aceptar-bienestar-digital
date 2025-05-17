
import React from 'react';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { useParams, useNavigate } from 'react-router-dom';
import { ClockIcon, CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { articulos } from './Articulos'; // Import the articulos data

const ArticuloDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the articulo with the matching id
  const articulo = articulos.find(a => a.id === id);
  
  if (!articulo) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Artículo no encontrado</h1>
          <Button onClick={() => navigate('/articulos')}>
            Volver a Artículos
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-bg pb-16">
      <Header />
      <BackButton />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Cabecera */}
            <div className="p-6 border-b">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <span className="px-3 py-1 mb-2 bg-aceptar-light-purple/30 text-aceptar-purple rounded-full text-sm">
                  {articulo.categoria}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{articulo.tiempoLectura} de lectura</span>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-aceptar-dark-purple mb-4">{articulo.titulo}</h1>
              
              <div className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>Publicado: {articulo.fechaPublicacion}</span>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="p-6">
              <p className="text-gray-700 mb-6 text-lg">{articulo.resumen}</p>
              
              {articulo.contenido.map((parrafo, index) => (
                <div key={index} className="mb-6">
                  {parrafo.subtitulo && (
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      {parrafo.subtitulo}
                    </h2>
                  )}
                  <p className="text-gray-700 leading-relaxed">
                    {parrafo.texto}
                  </p>
                </div>
              ))}
              
              {articulo.conclusion && (
                <div className="mt-8 p-4 bg-aceptar-light-purple/10 rounded-lg">
                  <h2 className="text-lg font-semibold text-aceptar-dark-purple mb-2">
                    Conclusión
                  </h2>
                  <p className="text-gray-700">
                    {articulo.conclusion}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
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

export default ArticuloDetalle;
