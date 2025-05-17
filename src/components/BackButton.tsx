
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
      className="absolute left-4 top-24 z-10"
      aria-label="Volver"
    >
      <ArrowLeftIcon className="h-6 w-6 text-aceptar-purple" />
    </Button>
  );
};

export default BackButton;
