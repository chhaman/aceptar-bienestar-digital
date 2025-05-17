
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartIcon } from 'lucide-react';

const affirmations = [
  "Soy digno de amor y respeto.",
  "Acepto mis emociones y aprendo de ellas.",
  "Cada día es una nueva oportunidad para crecer.",
  "Merezco paz y bienestar en mi vida.",
  "Confío en mi capacidad para superar desafíos.",
  "Soy resiliente y fuerte frente a la adversidad.",
  "Me permito sentir y expresar mis emociones.",
  "Estoy en un viaje de autodescubrimiento y crecimiento.",
  "Mis sentimientos son válidos y merecen ser escuchados.",
  "Practico la autocompasión y el cuidado personal."
];

const DailyAffirmation = () => {
  const [affirmation, setAffirmation] = useState("");
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  
  const getDailyAffirmation = () => {
    const now = new Date().getTime();
    const storedTime = localStorage.getItem('lastAffirmationTime');
    const storedAffirmation = localStorage.getItem('dailyAffirmation');
    
    // Si ha pasado un día o no hay afirmación guardada, generar una nueva
    if (!storedTime || !storedAffirmation || now - parseInt(storedTime) > 24 * 60 * 60 * 1000) {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      const newAffirmation = affirmations[randomIndex];
      
      localStorage.setItem('dailyAffirmation', newAffirmation);
      localStorage.setItem('lastAffirmationTime', now.toString());
      
      setAffirmation(newAffirmation);
      setLastUpdated(now);
    } else {
      setAffirmation(storedAffirmation);
      setLastUpdated(parseInt(storedTime));
    }
  };
  
  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setAffirmation(affirmations[randomIndex]);
    
    // No actualizamos localStorage para que la afirmación diaria original se mantenga
  };
  
  useEffect(() => {
    getDailyAffirmation();
    
    // Comprobar cada minuto si ha pasado un día para actualizar
    const interval = setInterval(() => {
      getDailyAffirmation();
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Card className="bg-gradient-to-r from-aceptar-light-purple to-aceptar-soft-blue border-none shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <HeartIcon className="text-aceptar-purple h-8 w-8 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Afirmación del Día</h3>
        <p className="text-lg italic text-gray-700 mb-6">"{affirmation}"</p>
        <Button 
          variant="outline" 
          className="border-aceptar-purple text-aceptar-dark-purple hover:bg-aceptar-purple hover:text-white"
          onClick={getRandomAffirmation}
        >
          Nueva Afirmación
        </Button>
        <p className="text-xs text-gray-500 mt-4">
          La afirmación diaria se actualiza automáticamente cada 24 horas
        </p>
      </CardContent>
    </Card>
  );
};

export default DailyAffirmation;
