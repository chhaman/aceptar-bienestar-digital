
import React from 'react';
import { Button } from '@/components/ui/button';
import { BrainIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 z-10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BrainIcon className="h-6 w-6 text-aceptar-purple" />
          <h1 className="text-xl font-bold text-aceptar-dark-purple">
            Mentoría ACEPTAR
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-aceptar-purple transition-colors">
            Inicio
          </a>
          <a href="#" className="text-sm font-medium hover:text-aceptar-purple transition-colors">
            Recursos
          </a>
          <a href="#" className="text-sm font-medium hover:text-aceptar-purple transition-colors">
            Seguimiento
          </a>
          <a href="#" className="text-sm font-medium hover:text-aceptar-purple transition-colors">
            Comunidad
          </a>
        </nav>
        
        <Button className="bg-aceptar-purple hover:bg-aceptar-dark-purple text-white">
          Iniciar Sesión
        </Button>
      </div>
    </header>
  );
};

export default Header;
