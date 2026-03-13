<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Contexto formativo
    
    p.mb-5 La formulación de proyectos se reconoce como una habilidad fundamental que permite al aprendiz organizar ideas, analizar situaciones del entorno y estructurar soluciones desde su profesión. Comprender los conceptos y procesos asociados a la formulación de un proyecto, así como cada una de sus fases, facilita la apropiación de herramientas que fortalecen la toma de decisiones y la planificación de acciones orientadas a la solución de necesidades concretas.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este sentido, la identificación de los conceptos básicos constituye un primer acercamiento a la formulación y desarrollo de proyectos. Este reconocimiento permite comprender la lógica que orienta su estructuración antes de abordar etapas de mayor complejidad, favoreciendo una construcción progresiva del conocimiento.

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Proyecto

    p.mb-5 El concepto de proyecto constituye el eje central del proceso formativo en formulación. A continuación, se desarrolla su definición, características y elementos constitutivos, con el fin de consolidar una comprensión integral.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un proyecto es un #[b conjunto organizado de acciones planificadas y desarrolladas con el propósito de solucionar una necesidad o problemática identificada en un contexto profesional específico]. Se ejecuta dentro de un marco temporal definido, con un inicio y un cierre establecidos, orientado al logro de un resultado concreto que permite avanzar hacia una nueva fase o meta.
    
    .box___style_2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto.col-md-2(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img3.svg', alt='' style="width: 77px").m-auto
        .col-xl.col-md-10.espacio___movil_3
          p.mb-0 Todo proyecto debe estar orientado hacia un #[b propósito claro], el cual guía las decisiones que se toman tanto en su formulación como en su ejecución. En consecuencia, un proyecto no es una acción improvisada, sino una #[b propuesta estructurada que responde a una problemática real del entorno profesional]. Entre los elementos que lo integran se encuentran:
    
    .box___style_3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img4.png', alt='').m-auto
        .col-xl
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | El #[b objetivo principal] que se desea alcanzar.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Las #[b actividades necesarias] para lograrlo.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Los #[b recursos requeridos] (humanos, técnicos, financieros, materiales).
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | El #[b contexto de ejecución].
    
    p.mb-5 La correcta articulación de estos componentes garantiza que el proyecto sea #[b viable, coherente y ejecutable], aumentando la probabilidad de solucionar la problemática identificada. Para comprender mejor su naturaleza, se presenta la siguiente comparación entre proyecto y actividad rutinaria:

    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img5.svg', alt='' style="max-width: 100px")
          .col
            h2 Proyecto
        ul.fa-ul.estilo___ul.mb-0
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Tiene carácter temporal, con inicio y cierre definidos.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Persigue un resultado específico y concreto.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Surge de una necesidad o problemática identificada.
          li.mb-0
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Requiere planificación estructurada y análisis previo.
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5.espacio___movil_3
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img6.svg', alt='' style="max-width: 100px")
          .col
            h2 Actividad rutinaria
        ul.fa-ul.estilo___ul.mb-0
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Es continua y forma parte de procesos permanentes.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Mantiene el funcionamiento habitual de una organización.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Responde a tareas previamente establecidas.
          li.mb-0
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Se ejecuta bajo procedimientos ya definidos.

    p.mb-0 Esta comparación permite reconocer que el proyecto no se limita a una idea aislada. Por el contrario, se concibe como un #[b proceso estructurado que integra múltiples elementos y fases], transformando una necesidad identificada en una propuesta organizada.

    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Importancia de la formulación de proyectos
    
    .row.align-items-center.justify-content-center.mb-5
      .col-xl
        .box___style_1.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img7.jpg', alt='').m-auto
            .col-xl
              p.mb-0 La formulación de proyectos adquiere especial relevancia en el proceso formativo, ya que fortalece competencias asociadas al #[b análisis, la organización y la planificación]. Este proceso permite estructurar una idea inicial de manera lógica y coherente, evitando la improvisación y facilitando la toma de decisiones fundamentadas.
        p.mb-0.espacio___movil_4 A continuación, se desarrollan tres aspectos clave que permiten comprender su importancia: las razones para formular proyectos, las consecuencias de no hacerlo y los aportes que genera en el ejercicio profesional.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img8.png', alt='').m-auto

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 ¿Por qué formular proyectos?

    p.mb-5 Formular proyectos es fundamental porque permite organizar ideas de manera estructurada y orientar las acciones hacia un propósito definido. A través de este proceso, una necesidad identificada se transforma en una propuesta clara, coherente y comprensible, lo que facilita la planificación y el análisis previo a cualquier intervención. La formulación contribuye a:

    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9(data-aos="fade-right")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img10.jpg', alt="" ).m-auto
            p.mb-0 La claridad en la definición de objetivos.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img11.jpg', alt="" ).m-auto
            p.mb-0 La identificación de elementos fundamentales.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img12.jpg', alt="" ).m-auto
            p.mb-0 La estructuración de fases organizadas y secuenciales.
      .col-xl-3.col-md-9(data-aos="fade-left").espacio___movil_3
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img13.jpg', alt="" ).m-auto
            p.mb-0 Una comprensión integral del proceso.

    p.mb-5 En consecuencia, se fortalece la toma de decisiones y se incrementa la probabilidad de alcanzar los resultados esperados.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 ¿Qué sucede cuando no se formulan proyectos?

    p.mb-5 Cuando las ideas no se estructuran bajo un enfoque de proyecto, las acciones suelen desarrollarse de manera improvisada y desorganizada. La ausencia de una formulación clara puede generar:

    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img14.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0 Confusión en los objetivos.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img15.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0 Dificultad para identificar los recursos necesarios.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img16.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0 Falta de coherencia entre las actividades ejecutadas.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img17.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0 Limitaciones para evaluar los resultados esperados.

    p.mb-5 En estas condiciones, el propósito de las acciones puede perderse, afectando la efectividad de las iniciativas y reduciendo su impacto en el contexto de intervención. Para sintetizar estas diferencias, se presenta la siguiente comparación:

    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5
        figure.mb-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/img18.svg', alt='' style="max-width: 100px")
        h2 Con formulación de proyecto
        ul.fa-ul.estilo___ul.mb-0
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Objetivos claramente definidos.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Acciones planificadas y organizadas.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Recursos identificados con anticipación.
          li.mb-0
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Posibilidad de evaluar resultados.
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5.espacio___movil_3
        figure.mb-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/img19.svg', alt='' style="max-width: 100px")
        h2 Sin formulación de proyecto
        ul.fa-ul.estilo___ul.mb-0
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Objetivos difusos o poco precisos.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Acciones improvisadas.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Recursos definidos de manera tardía o incompleta.
          li.mb-0
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Dificultad para medir el impacto.

    p.mb-5 Esta comparación permite reconocer que la formulación no es un trámite formal, sino una herramienta estratégica para garantizar coherencia y efectividad.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 ¿Qué aporta a la profesión?

    p.mb-5 En el contexto profesional, la formulación de proyectos proporciona herramientas para analizar situaciones del entorno, identificar necesidades y estructurar soluciones organizadas. Además, fortalece la capacidad de presentar propuestas claras y coherentes, facilitando la comunicación de ideas en entornos laborales y académicos. Entre los principales aportes al desempeño profesional se destacan:

    .box___style_3.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img20.png', alt='').m-auto
        .col-xl
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Desarrollo de habilidades de análisis crítico.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Organización estructurada de la información.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Planificación estratégica de acciones.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Orientación hacia la solución de problemas reales.

    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Características de un proyecto
    
    p.mb-5 A continuación, se presenta un video que explica de manera clara y estructurada las principales características de los proyectos, destacando sus elementos distintivos dentro de la gestión organizacional.

    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]: características de un proyecto.

    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Relación entre el proyecto y el contexto profesional

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img21.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El proyecto surge como una respuesta organizada a una necesidad identificada dentro de un contexto específico. En el ámbito profesional, dicho contexto está determinado por las dinámicas del sector productivo, las condiciones del entorno laboral y las problemáticas propias del ejercicio de la profesión. Comprender esta relación es fundamental para formular proyectos pertinentes, coherentes y alineados con la realidad profesional.
    
    p.mb-5 La identificación del contexto constituye un aspecto clave en la formulación, ya que permite reconocer los factores que influyen en la estructuración de la propuesta. Estos factores pueden ser de carácter técnico, organizacional, social o cultural, y condicionan tanto la definición del problema como la planificación de las acciones.

    .box___style_6.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 Desde la formación complementaria, el análisis del contexto profesional favorece la comprensión de que los proyectos no se formulan de manera aislada, sino que responden a situaciones reales que requieren soluciones estructuradas. Este enfoque fortalece la articulación entre teoría y práctica, permitiendo que el aprendiz relacione los conceptos estudiados con su entorno laboral.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img22.png', alt='').m-auto
    
    p.mb-5 A continuación, se sintetizan los principales elementos que evidencian la relación entre el proyecto y el contexto profesional:

    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img23.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img24.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Identificación de necesidades
            p.mb-0 Las necesidades pueden estar asociadas a procesos que requieren mejora, situaciones que afectan el desempeño laboral u oportunidades para optimizar recursos y resultados. Constituyen el punto de partida del proyecto.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img25.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Definición de objetivos
            p.mb-0 Los objetivos deben responder a las condiciones y requerimientos del entorno profesional. Una adecuada comprensión del contexto permite formular objetivos claros, coherentes y alcanzables.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img26.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Factores del entorno
            p.mb-0 Aspectos técnicos, organizacionales, sociales y culturales influyen en la manera como se estructuran las acciones del proyecto.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img27.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Actores involucrados
            p.mb-0 Reconocer la existencia de diferentes actores en el entorno laboral permite comprender la importancia de formular proyectos acordes con las dinámicas institucionales y profesionales.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img28.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Pertinencia profesional
            p.mb-0 El proyecto deja de ser un ejercicio académico aislado y se convierte en una herramienta aplicable a situaciones reales del contexto laboral.

    p.mb-0 Esta relación también fortalece la capacidad de análisis del aprendiz, al promover una aproximación crítica y reflexiva frente a su entorno profesional. A través de este ejercicio, se identifican problemáticas y oportunidades que pueden abordarse mediante proyectos estructurados, consolidando una visión profesional orientada a la solución de necesidades reales.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
