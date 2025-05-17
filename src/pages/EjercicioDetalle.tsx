
import React from 'react';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircleIcon, ClockIcon, AwardIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ejercicios } from './Ejercicios'; // Import the ejercicios data

const EjercicioDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the ejercicio with the matching id
  const ejercicio = ejercicios.find(e => e.id === id);
  
  if (!ejercicio) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Ejercicio no encontrado</h1>
          <Button onClick={() => navigate('/ejercicios')}>
            Volver a Ejercicios
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
            <div className="bg-aceptar-light-purple p-6">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl md:text-3xl font-bold text-aceptar-dark-purple">{ejercicio.titulo}</h1>
                <span className="px-3 py-1 bg-white text-aceptar-purple rounded-full text-sm font-medium">
                  {ejercicio.categoria}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4 text-aceptar-purple">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>{ejercicio.duracion}</span>
                </div>
                <div className="flex items-center">
                  <AwardIcon className="h-5 w-5 mr-2" />
                  <span>{ejercicio.nivel}</span>
                </div>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Descripción</h2>
                <p className="text-gray-600">{ejercicio.descripcion}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Instrucciones</h2>
                <div className="space-y-4">
                  {ejercicio.instrucciones.map((instruccion, index) => (
                    <div key={index} className="flex">
                      <div className="bg-aceptar-light-purple/30 text-aceptar-purple rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{instruccion}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Beneficios</h2>
                <ul className="space-y-2">
                  {ejercicio.beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className="w-full bg-aceptar-purple hover:bg-aceptar-dark-purple mt-4"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Volver a empezar
              </Button>
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

export default EjercicioDetalle;
