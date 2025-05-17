
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SmileIcon } from 'lucide-react';

type Mood = {
  emoji: string;
  label: string;
  color: string;
};

const moods: Mood[] = [
  { emoji: "😊", label: "Feliz", color: "bg-green-100 border-green-300 text-green-800" },
  { emoji: "😌", label: "Tranquilo", color: "bg-blue-100 border-blue-300 text-blue-800" },
  { emoji: "😐", label: "Neutral", color: "bg-gray-100 border-gray-300 text-gray-800" },
  { emoji: "😔", label: "Triste", color: "bg-indigo-100 border-indigo-300 text-indigo-800" },
  { emoji: "😡", label: "Enojado", color: "bg-red-100 border-red-300 text-red-800" },
  { emoji: "😰", label: "Ansioso", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [savedToday, setSavedToday] = useState(false);
  
  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
  };
  
  const handleSaveMood = () => {
    if (selectedMood) {
      console.log("Mood saved:", selectedMood);
      setSavedToday(true);
      // Here you would typically save to a database or local storage
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
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-2xl mb-1">{mood.emoji}</div>
              <div className="text-sm font-medium">{mood.label}</div>
            </button>
          ))}
        </div>
        
        <Button 
          onClick={handleSaveMood} 
          disabled={!selectedMood || savedToday}
          className="w-full bg-aceptar-purple hover:bg-aceptar-dark-purple disabled:bg-gray-300"
        >
          {savedToday ? "Registrado Hoy" : "Guardar Estado de Ánimo"}
        </Button>
        
        {savedToday && (
          <p className="text-sm text-center mt-2 text-gray-600">
            Regresa mañana para registrar tu nuevo estado de ánimo
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
