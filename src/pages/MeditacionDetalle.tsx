
import React, { useState } from 'react';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { useParams, useNavigate } from 'react-router-dom';
import { PlayCircleIcon, PauseCircleIcon, RefreshCwIcon, ClockIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { meditaciones } from './Meditaciones'; // Import the meditaciones data

const MeditacionDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Find the meditacion with the matching id
  const meditacion = meditaciones.find(m => m.id === id);
  
  if (!meditacion) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Meditación no encontrada</h1>
          <Button onClick={() => navigate('/meditaciones')}>
            Volver a Meditaciones
          </Button>
        </div>
      </div>
    );
  }
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    
    // Simple simulation of progress for demo purposes
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, (parseInt(meditacion.duracion) * 60 * 10)); // Simulation speed
    }
  };
  
  const resetMeditation = () => {
    setIsPlaying(false);
    setProgress(0);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Calculate remaining time based on progress
  const totalSeconds = parseInt(meditacion.duracion) * 60;
  const remainingSeconds = Math.round(totalSeconds * (1 - progress / 100));
  
  return (
    <div className="min-h-screen bg-gradient-bg pb-16">
      <Header />
      <BackButton />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Cabecera */}
            <div className="bg-aceptar-light-purple p-6 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-aceptar-dark-purple mb-3">{meditacion.titulo}</h1>
              <div className="inline-flex items-center px-3 py-1 bg-white text-aceptar-purple rounded-full">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{meditacion.duracion} minutos</span>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="p-6">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Sobre esta meditación</h2>
                <p className="text-gray-600">{meditacion.descripcion}</p>
                
                {meditacion.instrucciones && (
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-800 mb-2">Preparación:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {meditacion.instrucciones.map((instruccion, index) => (
                        <li key={index}>{instruccion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Reproductor */}
              <div className="bg-aceptar-light-purple/20 p-6 rounded-lg">
                <div className="mb-4">
                  <Progress value={progress} className="h-2" />
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
                  <span>{formatTime(Math.round(totalSeconds * (progress / 100)))}</span>
                  <span>{formatTime(remainingSeconds)}</span>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <Button 
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-full border-aceptar-purple text-aceptar-purple"
                    onClick={resetMeditation}
                  >
                    <RefreshCwIcon className="h-6 w-6" />
                  </Button>
                  <Button 
                    size="icon"
                    className="h-16 w-16 rounded-full bg-aceptar-purple hover:bg-aceptar-dark-purple"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? 
                      <PauseCircleIcon className="h-8 w-8" /> : 
                      <PlayCircleIcon className="h-8 w-8" />
                    }
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 italic">
                  "Respira profundamente y permite que tu mente se relaje con esta práctica."
                </p>
              </div>
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

export default MeditacionDetalle;
