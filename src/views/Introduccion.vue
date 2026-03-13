<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La formulación de proyectos constituye una competencia clave en el contexto formativo, porque permite al aprendiz organizar ideas, analizar situaciones del entorno y estructurar soluciones vinculadas con su campo profesional. Comprender conceptos como proyecto, necesidad, objetivos, alcance y recursos facilita una aproximación ordenada al proceso, promoviendo decisiones fundamentadas y una planificación coherente.

    .row.align-items-center.justify-content-center
      .col-xl
        .box___style_1.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/intro/img1.jpg', alt='').m-auto
            .col-xl
              p.mb-0 En este componente, el proyecto se comprende como una propuesta estructurada que responde a una problemática real y se desarrolla dentro de un marco temporal definido. Esta mirada permite diferenciarlo de acciones rutinarias, al reconocer que requiere propósito, planificación y articulación de actividades para alcanzar resultados concretos, alineados con las condiciones del contexto profesional.
        p.mb-0.espacio___movil_4 Además, el pensamiento proyectual fortalece la capacidad de anticipar requerimientos, integrar fases y mantener coherencia entre los elementos del proyecto. Desde la formación complementaria, este enfoque favorece la construcción progresiva del conocimiento y consolida una base conceptual que prepara al aprendiz para abordar con mayor solidez etapas posteriores de formulación y gestión de proyectos.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/intro/img2.png', alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
