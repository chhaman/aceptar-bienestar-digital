
import React from 'react';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircleIcon, ClockIcon, CalendarIcon } from 'lucide-react';

const Comunidad = () => {
  return (
    <div className="min-h-screen bg-gradient-bg pb-16">
      <Header />
      <BackButton />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <MessageCircleIcon className="h-8 w-8 text-aceptar-purple" />
            <span>Comunidad de Apoyo</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Forma parte de nuestra comunidad, donde podrás conectar con personas que comparten experiencias similares y aprender juntos en un entorno seguro y respetuoso.
          </p>
          
          <div className="max-w-xl mx-auto">
            <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800/30">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
                  Próximamente
                </h2>
                <p className="text-yellow-700 dark:text-yellow-300">
                  Estamos trabajando para lanzar nuestra comunidad en la próxima versión.
                </p>
                <div className="flex justify-center gap-6 mt-6 text-yellow-600 dark:text-yellow-400">
                  <div className="flex flex-col items-center">
                    <ClockIcon className="w-8 h-8 mb-2" />
                    <p>Grupos de apoyo</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <CalendarIcon className="w-8 h-8 mb-2" />
                    <p>Eventos y talleres</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-background py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground">© {new Date().getFullYear()} Mentoría ACEPTAR - Todos los derechos reservados</p>
          <p className="text-sm text-muted-foreground mt-2">
            Apoyando tu salud mental y bienestar emocional
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Comunidad;
