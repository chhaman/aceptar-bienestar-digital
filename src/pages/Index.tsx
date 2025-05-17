
import React from 'react';
import Header from '@/components/Header';
import DailyAffirmation from '@/components/DailyAffirmation';
import MoodTracker from '@/components/MoodTracker';
import ResourceCard from '@/components/ResourceCard';
import { Card, CardContent } from '@/components/ui/card';
import { BookIcon, MessageCircleIcon, BrainIcon, HeartPulseIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg pb-24">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bienvenido a <span className="text-aceptar-purple">Mentoría ACEPTAR</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tu espacio seguro para el bienestar emocional y la salud mental.
            Juntos en el camino hacia la aceptación y el crecimiento personal.
          </p>
        </section>
        
        {/* Daily Affirmation */}
        <section className="mb-12 max-w-2xl mx-auto">
          <DailyAffirmation />
        </section>
        
        {/* Mood Tracker Section */}
        <section className="mb-12 max-w-xl mx-auto">
          <MoodTracker />
        </section>
        
        {/* Resources Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            Recursos para tu Bienestar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResourceCard
              title="Meditaciones Guiadas"
              description="Encuentra paz interior con nuestras meditaciones diarias."
              icon={<BrainIcon className="h-5 w-5" />}
              buttonText="Explorar"
              path="/meditaciones"
            />
            <ResourceCard
              title="Artículos de Autoayuda"
              description="Lecturas para fortalecer tu salud mental y emocional."
              icon={<BookIcon className="h-5 w-5" />}
              buttonText="Leer"
              path="/articulos"
            />
            <ResourceCard
              title="Comunidad de Apoyo"
              description="Conecta con personas que comparten experiencias similares."
              icon={<MessageCircleIcon className="h-5 w-5" />}
              buttonText="Próximamente"
              path="/comunidad"
              badge="Próxima versión"
            />
            <ResourceCard
              title="Ejercicios de Bienestar"
              description="Actividades prácticas para mejorar tu salud integral."
              icon={<HeartPulseIcon className="h-5 w-5" />}
              buttonText="Comenzar"
              path="/ejercicios"
            />
          </div>
        </section>
        
        {/* Quote Section */}
        <section className="mb-12">
          <Card className="bg-aceptar-purple/10 border-none">
            <CardContent className="py-8 px-6 text-center">
              <blockquote className="text-xl md:text-2xl italic text-foreground">
                "La aceptación es el primer paso hacia la transformación personal.
                No podemos cambiar lo que no aceptamos."
              </blockquote>
              <cite className="block mt-4 text-lg font-medium text-aceptar-purple">
                — Mentoría ACEPTAR
              </cite>
            </CardContent>
          </Card>
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

export default Index;
