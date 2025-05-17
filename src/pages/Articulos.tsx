
import React from 'react';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { Card, CardContent } from '@/components/ui/card';
import { BookIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const articulos = [
  {
    id: "aceptacion-emocional",
    titulo: "El poder de la aceptación emocional",
    categoria: "Emociones",
    resumen: "Exploraremos cómo aceptar nuestras emociones, incluso las difíciles, puede ser el primer paso hacia una vida más plena y auténtica.",
    fechaPublicacion: "15 mayo, 2025",
    tiempoLectura: "7 min",
    contenido: [
      {
        subtitulo: "¿Qué es la aceptación emocional?",
        texto: "La aceptación emocional es el proceso de reconocer y permitir nuestras emociones tal como son, sin juzgarlas o intentar cambiarlas inmediatamente. A diferencia de la resignación pasiva, la aceptación es un acto valiente que nos permite relacionarnos de manera más saludable con nuestra experiencia interna. Cuando practicamos la aceptación emocional, creamos un espacio de comprensión para explorar nuestras emociones con curiosidad y compasión."
      },
      {
        subtitulo: "El costo de evitar emociones",
        texto: "Muchos de nosotros hemos aprendido a suprimir o evitar emociones difíciles como el miedo, la tristeza o la ira. Sin embargo, esta evitación tiene un costo alto: aumenta el estrés, consume energía mental y puede intensificar las mismas emociones que intentamos evitar. Los estudios muestran que la supresión emocional está relacionada con mayores niveles de ansiedad, depresión y diversos problemas de salud física. Paradójicamente, cuanto más resistimos una emoción, más poder le otorgamos."
      },
      {
        subtitulo: "Los beneficios de aceptar todas las emociones",
        texto: "Cuando comenzamos a aceptar nuestras emociones, experimentamos varios beneficios significativos. Primero, reducimos la intensidad del sufrimiento secundario (el malestar que surge de resistirnos a una emoción). Segundo, ganamos información valiosa sobre nuestras necesidades, valores y límites. Tercero, desarrollamos mayor resiliencia emocional y capacidad para tolerar la incomodidad. Por último, mejoramos nuestra comunicación y relaciones interpersonales al poder expresar auténticamente lo que sentimos."
      },
      {
        subtitulo: "Pasos para cultivar la aceptación emocional",
        texto: "La aceptación emocional puede desarrollarse con práctica constante. Comienza nombrando tus emociones con precisión: la diferencia entre decir 'estoy frustrado' en lugar de 'estoy enojado' puede ser significativa. Luego, localiza dónde sientes la emoción en tu cuerpo y observa sus cualidades sin juzgarlas. Recuerda que aceptar una emoción no significa que deba gustarte o que vayas a sentirla para siempre; simplemente estás reconociéndola como parte de tu experiencia actual. Con el tiempo, notarás que las emociones fluyen más libremente cuando las aceptas."
      }
    ],
    conclusion: "La aceptación emocional no es un destino final sino un camino continuo de autoconocimiento. Cada vez que eliges reconocer una emoción difícil en lugar de evitarla, fortaleces tu capacidad para vivir con mayor plenitud. Recuerda que todas las emociones tienen un propósito y contienen sabiduría. Al aceptarlas, no solo reduces tu sufrimiento sino que accedes a una vida más rica y auténtica."
  },
  {
    id: "manejo-estres",
    titulo: "Manejo del estrés en la vida cotidiana",
    categoria: "Bienestar",
    resumen: "Técnicas prácticas para identificar y manejar el estrés que podemos aplicar en nuestra rutina diaria.",
    fechaPublicacion: "10 mayo, 2025",
    tiempoLectura: "5 min",
    contenido: [
      {
        subtitulo: "Reconociendo el estrés en nuestro cuerpo",
        texto: "El estrés nos afecta de formas muy variadas y personales. Algunos experimentamos tensión muscular, especialmente en el cuello y los hombros. Otros podemos notar problemas digestivos, dolores de cabeza o dificultades para conciliar el sueño. Aprender a identificar nuestras señales particulares de estrés es el primer paso para manejarlo efectivamente. Tómate un momento ahora para reflexionar: ¿cómo se manifiesta el estrés en tu cuerpo?"
      },
      {
        subtitulo: "Micro-prácticas para momentos estresantes",
        texto: "No siempre disponemos de tiempo para largas sesiones de relajación. Por fortuna, existen micro-prácticas que pueden ayudarnos a regular el sistema nervioso en minutos o incluso segundos. La respiración profunda diafragmática es una de las más efectivas: inhala por la nariz contando hasta 4, mantén el aire contando hasta 2, y exhala lentamente por la boca contando hasta 6. Repetir este ciclo 5 veces puede cambiar significativamente tu estado fisiológico y mental."
      },
      {
        subtitulo: "Estableciendo límites saludables",
        texto: "Muchas veces, el estrés crónico surge de no establecer límites claros en nuestras relaciones personales y laborales. Aprender a decir 'no' respetuosamente cuando necesitamos preservar nuestra energía o tiempo es una habilidad fundamental para el manejo del estrés. Recuerda que establecer límites no es un acto egoísta, sino una forma de cuidado personal que nos permite estar más presentes y efectivos cuando decimos 'sí'."
      }
    ],
    conclusion: "El manejo efectivo del estrés no consiste en eliminar por completo el estrés de nuestra vida (algo imposible), sino en desarrollar recursos internos y externos para responder a él de manera adaptativa. Con práctica consistente de las técnicas mencionadas, podemos transformar nuestra relación con el estrés y utilizarlo como una señal que nos invita al autocuidado y al cambio cuando sea necesario."
  },
  {
    id: "relaciones-saludables",
    titulo: "Construyendo relaciones saludables",
    categoria: "Relaciones",
    resumen: "Cómo establecer límites sanos y comunicarnos efectivamente para desarrollar conexiones más significativas.",
    fechaPublicacion: "2 mayo, 2025",
    tiempoLectura: "8 min",
    contenido: [
      {
        subtitulo: "Los pilares de una relación saludable",
        texto: "Las relaciones saludables, ya sean románticas, familiares o de amistad, comparten ciertos pilares fundamentales: respeto mutuo, comunicación abierta, confianza y un equilibrio entre autonomía y conexión. Estos elementos se cultivan con el tiempo y requieren atención consciente. El respeto se manifiesta en pequeños gestos diarios: escuchar sin interrumpir, considerar los sentimientos del otro, y valorar sus opiniones incluso cuando difieren de las nuestras."
      },
      {
        subtitulo: "Comunicación efectiva: el arte de expresarse y escuchar",
        texto: "La comunicación efectiva implica tanto expresarse con claridad como escuchar activamente. Cuando expresamos nuestras necesidades, es útil utilizar mensajes en primera persona ('yo siento', 'yo necesito') en lugar de acusaciones ('tú siempre', 'tú nunca'). Al escuchar, intentamos comprender genuinamente la perspectiva del otro, sin preparar mentalmente nuestra respuesta mientras habla. Esta calidad de presencia en la comunicación fortalece profundamente los vínculos."
      },
      {
        subtitulo: "Límites saludables: ¿qué son y cómo establecerlos?",
        texto: "Los límites personales son las fronteras físicas, emocionales y mentales que definimos para proteger nuestro bienestar. Contrario a lo que muchos piensan, los límites claros no alejan a las personas sino que permiten relaciones más auténticas. Para establecer un límite, primero debemos identificar nuestras necesidades, comunicarlas claramente, y mantener consistencia. Un ejemplo sería: 'Necesito terminar este proyecto ahora. Podemos hablar después de las 5pm, cuando estaré más presente.'"
      },
      {
        subtitulo: "Navegando los conflictos con madurez",
        texto: "Los conflictos son inevitables en cualquier relación significativa. Lo importante no es evitarlos sino aprender a manejarlos constructivamente. Esto implica elegir el momento adecuado para abordarlos, mantenerse enfocado en el tema actual sin traer problemas pasados, y buscar soluciones que consideren las necesidades de ambas partes. Recuerda que en un conflicto saludable, el objetivo no es ganar sino entenderse mutuamente."
      }
    ],
    conclusion: "Construir relaciones saludables es uno de los aspectos más gratificantes y también desafiantes de la vida humana. Requiere valentía para ser vulnerable, disposición para crecer continuamente, y compromiso con nuestros valores personales. Sin embargo, el esfuerzo vale enormemente la pena, pues las conexiones significativas son uno de los predictores más potentes de felicidad y bienestar a largo plazo."
  },
  {
    id: "mindfulness-principiantes",
    titulo: "Mindfulness para principiantes",
    categoria: "Mindfulness",
    resumen: "Una introducción sencilla a la práctica de la atención plena y cómo puede transformar nuestra relación con el presente.",
    fechaPublicacion: "25 abril, 2025",
    tiempoLectura: "6 min",
    contenido: [
      {
        subtitulo: "¿Qué es realmente el mindfulness?",
        texto: "El mindfulness o atención plena es la capacidad de prestar atención de manera intencional al momento presente, sin juzgarlo. Aunque tiene raíces en tradiciones contemplativas antiguas, hoy es ampliamente practicado de forma secular y está respaldado por numerosas investigaciones científicas. No se trata de vaciar la mente o alcanzar un estado particular, sino de desarrollar una relación diferente con nuestra experiencia, sea esta placentera, desagradable o neutral."
      },
      {
        subtitulo: "Beneficios respaldados por la ciencia",
        texto: "Las investigaciones muestran que la práctica regular de mindfulness está asociada con numerosos beneficios para la salud mental y física. Entre ellos se incluyen reducción de estrés, ansiedad y síntomas depresivos; mejor calidad de sueño; fortalecimiento del sistema inmunológico; y mejora en la capacidad de atención y memoria. A nivel neurológico, se ha observado que la práctica modifica estructuras cerebrales relacionadas con la autorregulación emocional y la conciencia corporal."
      },
      {
        subtitulo: "Una práctica sencilla para empezar",
        texto: "Para comenzar con mindfulness, no necesitas equipamiento especial ni mucho tiempo. Puedes iniciar con una práctica de 5 minutos diarios. Siéntate cómodamente, con la espalda erguida pero relajada. Lleva tu atención a la respiración, notando las sensaciones físicas del aire entrando y saliendo. Cuando notes que tu mente se ha distraído (lo cual sucederá muchas veces), simplemente reconoce el pensamiento sin juzgarlo y vuelve suavemente a la respiración."
      }
    ],
    conclusion: "El mindfulness es como un músculo mental que se fortalece con la práctica regular. Los beneficios no suelen ser inmediatos ni espectaculares, sino que se acumulan sutilmente con el tiempo. La clave está en la consistencia y la actitud: practicar con curiosidad y amabilidad hacia uno mismo, sin expectativas rígidas. Recordemos que el objetivo no es 'hacerlo perfectamente', sino simplemente notar cuando nos distraemos y regresar al momento presente, una y otra vez."
  },
  {
    id: "autocritica-destructiva",
    titulo: "Superando la autocrítica destructiva",
    categoria: "Autoestima",
    resumen: "Estrategias para reconocer y modificar los patrones de pensamiento autocríticos que limitan nuestro bienestar.",
    fechaPublicacion: "18 abril, 2025",
    tiempoLectura: "9 min",
    contenido: [
      {
        subtitulo: "Reconociendo la voz del crítico interno",
        texto: "Todos tenemos una voz interna que comenta nuestras acciones y decisiones. Para algunas personas, esta voz se ha convertido en un crítico implacable que exige perfección y señala cada error o imperfección. El primer paso para cambiar este patrón es aprender a identificar cuando el crítico interno está hablando. Suele usar frases absolutas ('siempre fallas', 'nunca lo consigues') y generalizaciones excesivas a partir de eventos específicos ('olvidaste una cita, eres completamente irresponsable')."
      },
      {
        subtitulo: "Los orígenes de la autocrítica",
        texto: "Nuestra tendencia a la autocrítica tiene múltiples orígenes. A menudo, internalizamos los mensajes críticos que recibimos en la infancia de padres, profesores o compañeros. En otros casos, la autocrítica se desarrolla como un mecanismo de protección: si somos más duros con nosotros mismos que los demás, creemos evitar la crítica externa. Comprender estos orígenes nos ayuda a observar nuestro crítico interno con más compasión, reconociendo que se formó como un intento de protegernos, aunque ahora nos cause sufrimiento."
      },
      {
        subtitulo: "Transformando la crítica en feedback constructivo",
        texto: "Contrario a lo que muchos creen, reducir la autocrítica no implica bajar nuestros estándares o dejar de esforzarnos. La clave está en transformar la crítica destructiva en feedback constructivo. Mientras la crítica se centra en el juicio global ('soy un fracaso'), el feedback se enfoca en comportamientos específicos y modificables ('esta estrategia no funcionó bien, puedo intentar otra aproximación'). Este cambio de enfoque nos permite aprender y mejorar sin dañar nuestra autoestima."
      },
      {
        subtitulo: "Cultivando una voz interna compasiva",
        texto: "La autocompasión no es autoindulgencia, sino una actitud de amabilidad hacia uno mismo frente a las dificultades. Implica tres componentes: mindfulness (notar el sufrimiento sin exagerarlo ni negarlo), humanidad compartida (reconocer que todos experimentamos fracasos y dificultades) y amabilidad (hablarnos como lo haríamos a un buen amigo). Cuando cometemos un error, podemos preguntarnos: '¿Qué le diría a un amigo en esta situación?' y usar ese mismo tono compasivo con nosotros mismos."
      }
    ],
    conclusion: "Superar la autocrítica destructiva es un proceso gradual que requiere práctica consistente. Con el tiempo, podemos desarrollar una relación interna más equilibrada, donde nos motivamos desde el respeto y la confianza en lugar del miedo y la vergüenza. Este cambio no solo mejora nuestro bienestar emocional, sino que también nos permite responder a los desafíos de la vida con mayor resiliencia y creatividad."
  }
];

const Articulos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-bg pb-16">
      <Header />
      <BackButton />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <BookIcon className="h-8 w-8 text-aceptar-purple" />
            <span>Artículos de Autoayuda</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lee nuestros artículos escritos por profesionales para fortalecer tu salud mental y desarrollar herramientas de crecimiento personal.
          </p>
        </section>
        
        <section className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {articulos.map((articulo, index) => (
              <Card 
                key={index} 
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/articulos/${articulo.id}`)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-aceptar-light-purple/30 text-aceptar-purple rounded-full text-sm">
                      {articulo.categoria}
                    </span>
                    <div className="text-sm text-gray-500">
                      {articulo.tiempoLectura} lectura
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-aceptar-dark-purple mb-2">{articulo.titulo}</h3>
                  <p className="text-gray-600 mb-4">{articulo.resumen}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Publicado: {articulo.fechaPublicacion}
                    </span>
                    <span className="text-aceptar-purple text-sm font-medium hover:underline">
                      Leer más →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
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

export default Articulos;
