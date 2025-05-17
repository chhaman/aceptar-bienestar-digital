
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircleIcon, UsersIcon, CalendarIcon, HeartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const proximosEventos = [
  {
    titulo: "Grupo de apoyo: Manejo de la ansiedad",
    fecha: "22 mayo, 2025",
    hora: "18:00 - 19:30",
    tipo: "Virtual",
    plazas: "15/20"
  },
  {
    titulo: "Taller: Comunicación asertiva",
    fecha: "25 mayo, 2025",
    hora: "11:00 - 13:00", 
    tipo: "Presencial",
    plazas: "8/15"
  },
  {
    titulo: "Círculo de reflexión: La importancia del autocuidado",
    fecha: "30 mayo, 2025", 
    hora: "19:00 - 20:30",
    tipo: "Virtual",
    plazas: "12/25"
  }
];

const testimonios = [
  {
    texto: "Los grupos de apoyo me han dado un espacio seguro para expresarme y sentirme comprendido. Ha sido transformador sentir que no estoy solo en este camino.",
    autor: "Carlos M."
  },
  {
    texto: "Gracias a la comunidad ACEPTAR, he aprendido herramientas para manejar mi ansiedad y he conocido personas que se han convertido en un gran sistema de apoyo.",
    autor: "Laura P."
  },
  {
    texto: "Los talleres virtuales me han permitido participar incluso desde otra ciudad. La flexibilidad y la calidad de los facilitadores hacen que valga mucho la pena.",
    autor: "Miguel A."
  }
];

const Comunidad = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <MessageCircleIcon className="h-8 w-8 text-aceptar-purple" />
            <span>Comunidad de Apoyo</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Forma parte de nuestra comunidad, donde podrás conectar con personas que comparten experiencias similares y aprender juntos en un entorno seguro y respetuoso.
          </p>
        </section>
        
        {/* Grupos y actividades */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-aceptar-dark-purple flex items-center gap-2">
              <UsersIcon className="h-6 w-6" />
              Nuestros grupos de apoyo
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-aceptar-dark-purple">Grupo para la Ansiedad</h3>
                  <p className="text-gray-600 mb-4">Un espacio seguro para compartir experiencias y estrategias para manejar la ansiedad en el día a día.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Semanal, Martes 18:00</span>
                    <Button variant="outline" className="border-aceptar-purple text-aceptar-purple">Más información</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-aceptar-dark-purple">Círculo de Mindfulness</h3>
                  <p className="text-gray-600 mb-4">Práctica guiada de mindfulness y meditación seguida de una reflexión grupal sobre la atención plena.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Quincenal, Jueves 19:30</span>
                    <Button variant="outline" className="border-aceptar-purple text-aceptar-purple">Más información</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-aceptar-dark-purple">Grupo de Duelo</h3>
                  <p className="text-gray-600 mb-4">Acompañamiento para personas que están atravesando un proceso de duelo o pérdida significativa.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Semanal, Miércoles 17:30</span>
                    <Button variant="outline" className="border-aceptar-purple text-aceptar-purple">Más información</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-aceptar-dark-purple">Taller de Autocompasión</h3>
                  <p className="text-gray-600 mb-4">Aprende a tratarte con la misma amabilidad y comprensión que ofrecerías a un buen amigo.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Mensual, Sábado 11:00</span>
                    <Button variant="outline" className="border-aceptar-purple text-aceptar-purple">Más información</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Próximos eventos */}
            <h2 className="text-2xl font-bold mb-6 text-aceptar-dark-purple flex items-center gap-2">
              <CalendarIcon className="h-6 w-6" />
              Próximos eventos
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {proximosEventos.map((evento, index) => (
                    <div key={index} className="p-6 flex justify-between items-center flex-wrap gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-aceptar-dark-purple">{evento.titulo}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                          <span>{evento.fecha}</span>
                          <span>|</span>
                          <span>{evento.hora}</span>
                          <span className="px-2 py-0.5 rounded-full bg-aceptar-light-purple/30 text-aceptar-purple">
                            {evento.tipo}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Plazas: {evento.plazas}</span>
                        <Button size="sm" className="bg-aceptar-purple hover:bg-aceptar-dark-purple">
                          Inscribirse
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonios */}
            <h2 className="text-2xl font-bold mb-6 text-aceptar-dark-purple flex items-center gap-2">
              <HeartIcon className="h-6 w-6" />
              Testimonios de la comunidad
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonios.map((testimonio, index) => (
                <Card key={index} className="bg-gradient-to-b from-white to-aceptar-light-purple/10">
                  <CardContent className="p-6">
                    <p className="italic text-gray-700 mb-4">"{testimonio.texto}"</p>
                    <p className="font-medium text-aceptar-dark-purple">— {testimonio.autor}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Mentoría ACEPTAR - Todos los derechos reservados</p>
          <p className="text-sm text-gray-500 mt-2">
            Apoyando tu salud mental y bienestar emocional
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Comunidad;
