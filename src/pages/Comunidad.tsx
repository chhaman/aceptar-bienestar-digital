import React from 'react';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Calendar, Clock, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Comunidad = () => {
  return (
    <div className="min-h-screen bg-gradient-bg pb-16">
      <Header />
      <BackButton />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Y si pudieras transformar la ansiedad en algo que te sostenga?
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Muchas veces intentamos calmarla, ignorarla o eliminarla. Pero… ¿qué pasaría si empezaras a escucharla?
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="bg-aceptar-purple text-primary-foreground p-8 text-center">
              <CardTitle className="text-3xl font-bold">Transformá la ansiedad</CardTitle>
              <CardDescription className="text-lg text-primary-foreground/90 mt-2">
                Curso grupal online de 4 encuentros para dejar de pelear con lo que sentís y empezar a acompañarte desde otro lugar.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">¿Qué te llevarás de este curso?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Comprender el mensaje detrás de tu ansiedad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Conectarte con lo que necesitas sin culpas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Usar herramientas simples para regularte y sostenerte</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-foreground">
                    Este curso te ofrece un espacio seguro para explorar tu relación con la ansiedad, entender sus mensajes y desarrollar estrategias prácticas para transformarla en una aliada en tu camino de crecimiento personal.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Detalles del curso</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <Video className="h-5 w-5 text-aceptar-purple mr-3" />
                      <span><span className="font-medium text-foreground">Modalidad:</span> Online (Meet)</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-aceptar-purple mr-3" />
                      <span><span className="font-medium text-foreground">Inicio:</span> Agosto</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 text-aceptar-purple mr-3" />
                      <span><span className="font-medium text-foreground">Duración:</span> 4 encuentros semanales – 1:30hs cada uno</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-aceptar-purple mr-3" />
                      <span><span className="font-medium text-foreground">Horarios:</span> Miércoles 10h • Jueves 19h • Sábado 15h</span>
                    </li>
                     <li className="flex items-center">
                      <Users className="h-5 w-5 text-aceptar-purple mr-3" />
                      <span><span className="font-medium text-foreground">Cupos:</span> Limitados</span>
                    </li>
                  </ul>
                  <Button size="lg" className="w-full mt-6 bg-aceptar-green hover:bg-aceptar-green/90 text-white">
                    Reservá tu lugar
                  </Button>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t text-center">
                <h4 className="text-lg font-semibold">Facilitado por Gabriela Dimase</h4>
                <p className="text-muted-foreground">Mentora en bienestar emocional</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <footer className="bg-background py-6 border-t border-border mt-16">
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
