
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SmileIcon } from 'lucide-react';

type Mood = {
  emoji: string;
  label: string;
  color: string;
  message: string;
};

const moods: Mood[] = [
  { 
    emoji: "😊", 
    label: "Feliz", 
    color: "bg-green-100 border-green-300 text-green-800",
    message: "La felicidad es una elección diaria. Celebra este momento."
  },
  { 
    emoji: "😌", 
    label: "Tranquilo", 
    color: "bg-blue-100 border-blue-300 text-blue-800",
    message: "La tranquilidad es el silencio de la mente. Disfruta este estado de paz."
  },
  { 
    emoji: "😐", 
    label: "Neutral", 
    color: "bg-gray-100 border-gray-300 text-gray-800",
    message: "El equilibrio es también un estado valioso. Ni muy arriba, ni muy abajo."
  },
  { 
    emoji: "😔", 
    label: "Triste", 
    color: "bg-indigo-100 border-indigo-300 text-indigo-800",
    message: "La tristeza también es parte del camino. Permítete sentir y luego avanzar."
  },
  { 
    emoji: "😡", 
    label: "Enojado", 
    color: "bg-red-100 border-red-300 text-red-800",
    message: "La ira es una señal para atender algo importante. Respira profundamente."
  },
  { 
    emoji: "😰", 
    label: "Ansioso", 
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    message: "La ansiedad nos habla del futuro. Vuelve al presente con respiración consciente."
  },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  
  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
    setShowMessage(false);
  };
  
  const handleShowMessage = () => {
    if (selectedMood) {
      setShowMessage(true);
    }
  };
  
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-aceptar-dark-purple">
          <SmileIcon className="h-5 w-5" />
          ¿Cómo te sientes hoy?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => handleMoodSelect(mood)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedMood?.label === mood.label 
                  ? `${mood.color} border-2 scale-105` 
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
              }`}
            >
              <div className="text-2xl mb-1">{mood.emoji}</div>
              <div className="text-sm font-medium text-foreground">{mood.label}</div>
            </button>
          ))}
        </div>
        
        <Button 
          onClick={handleShowMessage} 
          disabled={!selectedMood}
          className="w-full bg-aceptar-purple hover:bg-aceptar-dark-purple disabled:bg-gray-300"
        >
          Reflexionar sobre mi estado
        </Button>
        
        {showMessage && selectedMood && (
          <div className="mt-4 p-4 bg-aceptar-light-purple/20 dark:bg-aceptar-purple/20 rounded-lg border border-aceptar-purple/30">
            <p className="text-center italic text-foreground">"{selectedMood.message}"</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
