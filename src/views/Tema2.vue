<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Lenguaje de programación para desarrollo de apps
    .row.mb-5.justify-content-center
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para elegir el mejor lenguaje de programación, es importante tener claro qué tipo de aplicación se desea desarrollar y, de esa manera, seleccionar la mejor herramienta, que supla las necesidades y brinde ventajas, según los requerimientos. 
              br
              br
              |Cada lenguaje cuenta con unas características y funciones especiales que brindan ventajas según el tipo del proyecto por desarrollar.
    #t_2_1.titulo-segundo
      h2 2.1 Lenguajes utilizados para desarrollo Android
    .row.mb-5.d-felx.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-xs-4: img(src="@/assets/curso/img4.svg")
      .col-lg-11.col-md-10.col-sm-9.col-xs-8
        p.mb-0 Android es el sistema operativo más utilizado e implementado en dispositivos móviles; su popularidad está fundamentada en su versatilidad y su rápida adaptación. Cuenta con un entorno de desarrollo integrado llamado Android Studio para el desarrollo de aplicaciones Android. Su primera versión estable fue publicada en diciembre de 2014. Kotlin es su principal lenguaje de desarrollo, pero también se puede utilizar Java y C ++.
    SlyderB.mb-5(:datos="datosSlyder") 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Java',
        texto:
          'Java es el lenguaje de programación más utilizado, cuenta con gran soporte por la extensa comunidad de desarrolladores que utilizan este lenguaje como su principal herramienta. En este momento, se puede usar Java con los programas como Netbeans, Eclipse y uno de los más utilizados en el desarrollo de aplicaciones móviles, Android Studio.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'Lenguaje multiplataforma',
        texto:
          'Java es un lenguaje multiplataforma utilizado en el desarrollo de páginas web y aplicaciones móviles. Sus principales características son:',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'Kotlin',
        texto:
          'Kotlin es un lenguaje de programación de código abierto, que se basa en el paradigma de la programación funcional y orientada a objetos. Su sintaxis y conceptos están estructurados y basados en lenguajes como C#, Java y Scala; por eso la gran similitud que se presenta con ellos.  Es el resultado de la evolución y mejora de varios lenguajes que se han depurado y mejorado con el tiempo, tomando lo mejor de cada uno de ellos. Cuenta con varias versiones muy utilizadas en el ámbito de los programadores Android, por ejemplo JVM (Kotlin/JVM), JavaScript (Kotlin/JS) y el código nativo (Kotlin/Native).',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'Administración y actualización de Kotlin',
        texto:
          'Este lenguaje fue creado por Jet Brains y Google, es administrado por Kotlin Foundation, que son los encargados de mantener, administrar y actualizar el lenguaje. Kotlin es el lenguaje oficial para el desarrollo de Android; por esta razón, la documentación y las herramientas de Android están diseñadas para ser compatibles con Kotlin.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'Sobre estos lenguajes de programación',
        texto: '.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
    ],
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

<style lang="sass" scoped></style>
