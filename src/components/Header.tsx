
import React from 'react';
import { Button } from '@/components/ui/button';
import { BrainIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 z-10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <BrainIcon className="h-6 w-6 text-aceptar-purple" />
          <h1 className="text-xl font-bold text-aceptar-dark-purple">
            Mentoría ACEPTAR
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium hover:text-aceptar-purple transition-colors ${
              isActive('/') ? 'text-aceptar-purple' : 'text-gray-700'
            }`}
          >
            Inicio
          </Link>
          <Link 
            to="/meditaciones" 
            className={`text-sm font-medium hover:text-aceptar-purple transition-colors ${
              isActive('/meditaciones') ? 'text-aceptar-purple' : 'text-gray-700'
            }`}
          >
            Meditaciones
          </Link>
          <Link 
            to="/articulos" 
            className={`text-sm font-medium hover:text-aceptar-purple transition-colors ${
              isActive('/articulos') ? 'text-aceptar-purple' : 'text-gray-700'
            }`}
          >
            Artículos
          </Link>
          <Link 
            to="/comunidad" 
            className={`text-sm font-medium hover:text-aceptar-purple transition-colors ${
              isActive('/comunidad') ? 'text-aceptar-purple' : 'text-gray-700'
            }`}
          >
            Comunidad
          </Link>
          <Link 
            to="/ejercicios" 
            className={`text-sm font-medium hover:text-aceptar-purple transition-colors ${
              isActive('/ejercicios') ? 'text-aceptar-purple' : 'text-gray-700'
            }`}
          >
            Ejercicios
          </Link>
        </nav>
        
        <Button className="bg-aceptar-purple hover:bg-aceptar-dark-purple text-white">
          Iniciar Sesión
        </Button>
      </div>
    </header>
  );
};

export default Header;
