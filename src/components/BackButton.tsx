
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={() => navigate(-1)}
      className="fixed left-4 top-20 z-10 bg-background/80 backdrop-blur-sm shadow-sm hover:bg-background"
      aria-label="Volver"
    >
      <ArrowLeftIcon className="h-6 w-6 text-aceptar-purple" />
    </Button>
  );
};

export default BackButton;
