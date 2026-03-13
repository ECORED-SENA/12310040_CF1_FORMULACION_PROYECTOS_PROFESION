<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este esquema representa de manera gráfica los conceptos fundamentales desarrollados en el componente formativo, integrando la importancia de la formulación, los elementos estructurales del proyecto, el pensamiento proyectual y los resultados esperados. Además, presenta cómo estos aspectos se relacionan entre sí para facilitar la comprensión del proceso de formulación y fortalecer la estructuración de propuestas orientadas a la solución de necesidades del contexto profesional.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre formulación de proyectos que incluye importancia de la formulación, definición de proyecto con necesidad y propósito, pensamiento proyectual, etapas de ejecución, tipos de proyectos, buenas prácticas y resultados finales como comprensión, organización y estructuración.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
