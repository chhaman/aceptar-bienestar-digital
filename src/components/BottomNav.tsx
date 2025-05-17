
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BrainIcon, BookIcon, UsersIcon, HeartPulseIcon } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`flex flex-col items-center p-2 ${
              isActive('/') ? 'text-aceptar-purple' : 'text-gray-600'
            }`}
          >
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Inicio</span>
          </Link>
          <Link 
            to="/meditaciones" 
            className={`flex flex-col items-center p-2 ${
              isActive('/meditaciones') ? 'text-aceptar-purple' : 'text-gray-600'
            }`}
          >
            <BrainIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Meditaciones</span>
          </Link>
          <Link 
            to="/articulos" 
            className={`flex flex-col items-center p-2 ${
              isActive('/articulos') ? 'text-aceptar-purple' : 'text-gray-600'
            }`}
          >
            <BookIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Artículos</span>
          </Link>
          <Link 
            to="/comunidad" 
            className={`flex flex-col items-center p-2 ${
              isActive('/comunidad') ? 'text-aceptar-purple' : 'text-gray-600'
            }`}
          >
            <UsersIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Comunidad</span>
          </Link>
          <Link 
            to="/ejercicios" 
            className={`flex flex-col items-center p-2 ${
              isActive('/ejercicios') ? 'text-aceptar-purple' : 'text-gray-600'
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
