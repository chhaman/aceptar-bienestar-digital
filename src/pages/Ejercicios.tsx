
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulseIcon, CheckCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams, useNavigate } from 'react-router-dom';

const categorias = [
  { nombre: "Todos", id: "todos" },
  { nombre: "Respiración", id: "respiracion" },
  { nombre: "Relajación", id: "relajacion" },
  { nombre: "Movimiento", id: "movimiento" },
  { nombre: "Expresión", id: "expresion" },
  { nombre: "Concentración", id: "concentracion" }
];

export const ejercicios = [
  {
    id: "respiracion-478",
    titulo: "Respiración 4-7-8",
    categoria: "Respiración",
    categoriaId: "respiracion",
    descripcion: "Técnica de respiración para calmar el sistema nervioso y reducir la ansiedad.",
    duracion: "5",
    nivel: "Principiante",
    instrucciones: [
      "Siéntate en una posición cómoda con la espalda recta.",
      "Coloca la punta de la lengua detrás de los dientes frontales superiores.",
      "Exhala completamente por la boca, haciendo un sonido suave de 'whoosh'.",
      "Cierra la boca e inhala silenciosamente por la nariz contando hasta 4.",
      "Mantén la respiración contando hasta 7.",
      "Exhala completamente por la boca, haciendo un sonido de 'whoosh', contando hasta 8.",
      "Repite este ciclo 3-4 veces."
    ],
    beneficios: [
      "Ayuda a reducir la ansiedad y el estrés",
      "Facilita el sueño reparador",
      "Regula la respuesta del sistema nervioso",
      "Mejora la concentración",
      "Reduce la tensión muscular"
    ]
  },
  {
    id: "relajacion-muscular",
    titulo: "Relajación muscular progresiva",
    categoria: "Relajación",
    categoriaId: "relajacion",
    descripcion: "Aprende a tensar y relajar grupos musculares para liberar tensión física y mental.",
    duracion: "15",
    nivel: "Intermedio",
    instrucciones: [
      "Acuéstate en una superficie cómoda.",
      "Comienza por los pies: tensa los músculos de los pies durante 5 segundos, luego relaja.",
      "Sube a las pantorrillas: tensa durante 5 segundos, luego relaja.",
      "Continúa subiendo por el cuerpo (muslos, glúteos, abdomen, pecho, brazos, manos, hombros, cuello y cara).",
      "Para cada grupo muscular, tensa durante 5 segundos y relaja durante 10 segundos.",
      "Nota el contraste entre la tensión y la relajación.",
      "Al finalizar, mantén todo el cuerpo relajado durante un minuto."
    ],
    beneficios: [
      "Reduce la tensión muscular crónica",
      "Disminuye los niveles de ansiedad",
      "Mejora la calidad del sueño",
      "Alivia dolores de cabeza relacionados con la tensión",
      "Incrementa la conciencia corporal"
    ]
  },
  {
    id: "estiramiento-consciente",
    titulo: "Estiramiento consciente",
    categoria: "Movimiento",
    categoriaId: "movimiento",
    descripcion: "Serie de estiramientos suaves acompañados de atención plena a las sensaciones corporales.",
    duracion: "10",
    nivel: "Principiante",
    instrucciones: [
      "Comienza de pie o sentado cómodamente, con la espalda recta.",
      "Levanta los brazos lentamente por encima de la cabeza y estira todo el cuerpo hacia arriba.",
      "Manteniendo la respiración profunda, inclina el cuerpo suavemente hacia un lado y mantén 3 respiraciones.",
      "Repite hacia el otro lado.",
      "Inclínate hacia adelante desde la cadera, manteniendo la espalda recta, y permite que los brazos cuelguen.",
      "En cada posición, observa las sensaciones sin juzgarlas.",
      "Finaliza de pie, con los brazos a los costados, respirando profundamente."
    ],
    beneficios: [
      "Incrementa la flexibilidad y movilidad",
      "Reduce la tensión muscular",
      "Mejora la postura",
      "Aumenta la conexión mente-cuerpo",
      "Promueve la relajación profunda"
    ]
  },
  {
    id: "diario-emocional",
    titulo: "Diario emocional guiado",
    categoria: "Expresión",
    categoriaId: "expresion",
    descripcion: "Ejercicio de escritura para identificar y procesar emociones a través de preguntas reflexivas.",
    duracion: "20",
    nivel: "Todos los niveles",
    instrucciones: [
      "Encuentra un lugar tranquilo y toma un cuaderno y bolígrafo.",
      "Cierra los ojos y respira profundamente durante un minuto, conectando con tu estado emocional actual.",
      "Responde estas preguntas escribiendo libremente, sin juzgar lo que surja:",
      "¿Qué emoción predomina hoy en mí? ¿Dónde la siento en mi cuerpo?",
      "¿Qué situación activó esta emoción? Descríbela objetivamente.",
      "¿Qué necesidad está expresando esta emoción?",
      "¿Qué acción puedo tomar para atender esta necesidad?",
      "Al terminar, lee lo que has escrito y observa si hay nuevos insights."
    ],
    beneficios: [
      "Facilita la identificación y expresión emocional",
      "Reduce la intensidad de emociones difíciles",
      "Aumenta el autoconocimiento",
      "Desarrolla la inteligencia emocional",
      "Proporciona perspectiva sobre situaciones complejas"
    ]
  },
  {
    id: "meditacion-5-sentidos",
    titulo: "Meditación de los 5 sentidos",
    categoria: "Concentración",
    categoriaId: "concentracion",
    descripcion: "Práctica de mindfulness enfocada en las percepciones sensoriales del momento presente.",
    duracion: "8",
    nivel: "Principiante",
    instrucciones: [
      "Siéntate en una posición cómoda y cierra los ojos.",
      "Comienza notando 5 cosas que puedes ESCUCHAR. Identifícalas mentalmente una por una.",
      "Luego, observa 4 cosas que puedes SENTIR en contacto con tu cuerpo (ropa, aire, etc.).",
      "Después, identifica 3 cosas que puedes OLER en este momento.",
      "Continúa con 2 cosas que puedes SABOREAR (incluso el sabor de tu boca).",
      "Finalmente, abre los ojos y observa 1 cosa que puedes VER, explorándola con atención plena.",
      "Termina con tres respiraciones profundas."
    ],
    beneficios: [
      "Ancla la mente al momento presente",
      "Reduce la rumia mental y preocupaciones",
      "Agudiza la conciencia sensorial",
      "Disminuye la ansiedad rápidamente",
      "Desarrolla la capacidad de atención plena"
    ]
  },
  {
    id: "visualizacion-lugar-seguro",
    titulo: "Visualización de lugar seguro",
    categoria: "Relajación",
    categoriaId: "relajacion",
    descripcion: "Técnica de visualización para crear un refugio mental que genere calma y seguridad.",
    duracion: "12",
    nivel: "Principiante",
    instrucciones: [
      "Siéntate o acuéstate cómodamente en un lugar tranquilo.",
      "Cierra los ojos y toma varias respiraciones profundas para relajarte.",
      "Imagina un lugar donde te sientes completamente seguro y en paz (real o imaginario).",
      "Involucra todos los sentidos: ¿Qué ves en este lugar? ¿Qué sonidos hay? ¿Qué puedes oler y sentir?",
      "Explora este lugar con curiosidad, notando cada detalle que te brinda seguridad y confort.",
      "Cuando sientas que este lugar está bien definido, imagina que cada respiración te conecta más profundamente con él.",
      "Antes de terminar, decide una palabra o gesto que te permita acceder a este lugar rápidamente en el futuro."
    ],
    beneficios: [
      "Proporciona un refugio mental accesible en momentos de estrés",
      "Reduce la activación del sistema nervioso simpático",
      "Genera sensaciones de seguridad y calma",
      "Ayuda a manejar síntomas de ansiedad y pánico",
      "Fortalece la capacidad de autorregulación emocional"
    ]
  }
];

const Ejercicios = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const [filteredEjercicios, setFilteredEjercicios] = useState(ejercicios);
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  
  useEffect(() => {
    if (categoria && categorias.some(cat => cat.id === categoria)) {
      setCategoriaActiva(categoria);
    } else {
      setCategoriaActiva("todos");
    }
  }, [categoria]);
  
  useEffect(() => {
    if (categoriaActiva === "todos") {
      setFilteredEjercicios(ejercicios);
    } else {
      setFilteredEjercicios(ejercicios.filter(ejercicio => 
        ejercicio.categoriaId === categoriaActiva
      ));
    }
  }, [categoriaActiva]);
  
  const handleCategoriaClick = (id: string) => {
    navigate(`/ejercicios/${id === 'todos' ? '' : id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-bg pb-16">
      <Header />
      <BackButton />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <HeartPulseIcon className="h-8 w-8 text-aceptar-purple" />
            <span>Ejercicios de Bienestar</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de ejercicios prácticos diseñados para mejorar tu bienestar físico, mental y emocional.
          </p>
        </section>
        
        {/* Filtros */}
        <section className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((cat, index) => (
              <Button 
                key={index}
                variant={cat.id === categoriaActiva ? "default" : "outline"}
                className={cat.id === categoriaActiva ? "bg-aceptar-purple hover:bg-aceptar-dark-purple" : "border-aceptar-purple text-aceptar-dark-purple"}
                onClick={() => handleCategoriaClick(cat.id)}
              >
                {cat.nombre}
              </Button>
            ))}
          </div>
        </section>
        
        {/* Lista de ejercicios */}
        <section className="max-w-4xl mx-auto">
          {filteredEjercicios.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEjercicios.map((ejercicio, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-aceptar-dark-purple">{ejercicio.titulo}</h3>
                      <span className="px-2 py-1 bg-aceptar-light-purple/30 text-aceptar-purple rounded-full text-sm">
                        {ejercicio.categoria}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{ejercicio.descripcion}</p>
                    
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                      <span>{ejercicio.duracion} minutos</span>
                      <span>{ejercicio.nivel}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-aceptar-purple hover:bg-aceptar-dark-purple flex items-center justify-center gap-2"
                      onClick={() => navigate(`/ejercicios/detalle/${ejercicio.id}`)}
                    >
                      <CheckCircleIcon className="h-4 w-4" />
                      Comenzar ejercicio
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No hay ejercicios disponibles en esta categoría.</p>
            </div>
          )}
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

export default Ejercicios;
