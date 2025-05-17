
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BrainIcon, BookIcon, UsersIcon, HeartPulseIcon } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-2 px-4 z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`flex flex-col items-center p-2 ${
              isActive('/') ? 'text-aceptar-purple' : 'text-muted-foreground'
            }`}
          >
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Inicio</span>
          </Link>
          <Link 
            to="/meditaciones" 
            className={`flex flex-col items-center p-2 ${
              isActive('/meditaciones') ? 'text-aceptar-purple' : 'text-muted-foreground'
            }`}
          >
            <BrainIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Meditaciones</span>
          </Link>
          <Link 
            to="/articulos" 
            className={`flex flex-col items-center p-2 ${
              isActive('/articulos') ? 'text-aceptar-purple' : 'text-muted-foreground'
            }`}
          >
            <BookIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Artículos</span>
          </Link>
          <Link 
            to="/comunidad" 
            className={`flex flex-col items-center p-2 relative ${
              isActive('/comunidad') ? 'text-aceptar-purple' : 'text-muted-foreground'
            }`}
          >
            <UsersIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Comunidad</span>
            <span className="absolute -top-1 right-0 text-[10px] px-1 py-0.5 bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-200 rounded-full">
              Próx
            </span>
          </Link>
          <Link 
            to="/ejercicios" 
            className={`flex flex-col items-center p-2 ${
              isActive('/ejercicios') ? 'text-aceptar-purple' : 'text-muted-foreground'
            }`}
          >
            <HeartPulseIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Ejercicios</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
