<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Identificación de conceptos y procesos para la formulación de proyectos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar y reconocer los conceptos fundamentales, los elementos básicos y las fases del ciclo de vida del proyecto, como base para comprender los procesos necesarios en la formulación de un proyecto.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'Un proyecto se caracteriza principalmente por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser una actividad permanente dentro de una organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tener un inicio y un cierre definidos y un propósito específico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutarse únicamente con recursos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requerir planeación previa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La necesidad o problema se define como:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El resultado final del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una actividad programada dentro del cronograma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La situación que da origen a la formulación del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un recurso indispensable para la ejecución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función del objetivo general dentro de un proyecto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Describir cada una de las actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer el propósito principal del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar el presupuesto disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir los responsables del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'La justificación de un proyecto permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir los tiempos de ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Explicar la importancia y los beneficios del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Identificar las fases del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer el cronograma de actividades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'El alcance del proyecto se relaciona con:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los recursos financieros disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los beneficiarios del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La delimitación de lo que incluye y excluye el proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La evaluación final de los resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Los recursos de un proyecto corresponden a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente los recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los resultados obtenidos al finalizar el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los medios humanos, técnicos, materiales y financieros necesarios para su desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las fases del ciclo de vida del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es la finalidad de estructurar el proyecto en fases?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar actividades de manera improvisada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar el desarrollo del proyecto de forma lógica y secuencial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la necesidad de planeación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la identificación de requerimientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'En la fase de inicio del proyecto se realiza principalmente:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ejecución de las actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El control de los recursos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La identificación de la necesidad y el propósito del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La entrega de los resultados finales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'La fase de planeación del proyecto se caracteriza por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La definición de objetivos, actividades y recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La finalización formal del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La supervisión de los resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La identificación de beneficiarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué se busca en la fase de cierre del proyecto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Iniciar una nueva fase de planeación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecutar actividades pendientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Formalizar la finalización del proyecto y revisar los resultados obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Identificar nuevas necesidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'El pensamiento proyectual se define como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ejecución inmediata sin análisis estructurado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La repetición constante de actividades rutinarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un enfoque organizado para estructurar soluciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La improvisación continua en el desarrollo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Un beneficio de la formulación de proyectos es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar la planificación de actividades futuras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer el análisis y organización de ideas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de definir objetivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la identificación de recursos básicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Los requerimientos de negocio permiten:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir objetivos estratégicos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Establecer únicamente el presupuesto final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Describir tareas técnicas detalladas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar el cierre administrativo del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'Los requerimientos funcionales especifican:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El perfil profesional del equipo ejecutor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las condiciones económicas del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las funciones que debe cumplir el sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los tiempos de entrega de informes finales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'Un proyecto social se caracteriza por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Buscar rentabilidad económica inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Optimizar procesos técnicos internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar impacto positivo en la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir costos administrativos empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'Los interesados del proyecto son:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo los miembros del equipo técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personas o grupos afectados por el proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente los responsables financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente los beneficiarios finales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'Un hito del proyecto permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar el objetivo general planteado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar actividades previamente definidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Verificar avances significativos del proceso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar el presupuesto asignado inicialmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'El ciclo de vida del proyecto comprende:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagnóstico y evaluación permanente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecución sin fases estructuradas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Planeación y control exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inicio, planificación, ejecución y cierre.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'Un error frecuente en la formulación es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir claramente la necesidad inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener coherencia entre actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Delimitar correctamente el alcance.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No identificar claramente el problema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'Una buena práctica en la formulación consiste en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Omitir la revisión de la propuesta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Plantear objetivos ambiguos y generales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar la identificación de recursos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener coherencia entre los elementos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
