
import React from 'react';
import { BrainIcon, MoonIcon, SunIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="w-full py-4 px-6 bg-background/80 backdrop-blur-sm fixed top-0 z-10 shadow-sm">
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
              isActive('/') ? 'text-aceptar-purple' : 'text-foreground'
            }`}
          >
            Inicio
          </Link>
          <Link 
            to="/articulos" 
            className={`text-sm font-medium hover:text-aceptar-purple transition-colors ${
              isActive('/articulos') ? 'text-aceptar-purple' : 'text-foreground'
            }`}
          >
            Artículos
          </Link>
          <Link 
            to="/comunidad" 
            className={`text-sm font-medium hover:text-aceptar-purple transition-colors ${
              isActive('/comunidad') ? 'text-aceptar-purple' : 'text-foreground'
            }`}
          >
            Cursos
          </Link>
          <Link 
            to="/ejercicios" 
            className={`text-sm font-medium hover:text-aceptar-purple transition-colors ${
              isActive('/ejercicios') ? 'text-aceptar-purple' : 'text-foreground'
            }`}
          >
            Ejercicios
          </Link>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleTheme} 
          className="bg-background/20"
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
