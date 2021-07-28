<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Componentes gráficos
    .row.mb-5 
      .col-lg-6
        p Antes de iniciar la elaboración del boceto y el mockup, se debe tener la idea clara de lo que se necesita desarrollar. El informe de diseño proporciona esta información, de manera clara y concisa.
        .cajon.color-primario.color-primario-claro.p-4.mb-4
          p Entonces, es importante conocer las opciones gráficas con las cuales se cuenta para el diseño de la interfaz. Asimismo, considerar el uso, anatomía, comportamiento, tematización y especificaciones de cada uno de los principales componentes de la interfaz gráfica de una aplicación móvil.
      .col-lg-6: img(src="@/assets/curso/img37.jpg")
    .titulo-sexto.color-acento-contenido.bg-transparent
      h5.fw-normal
        b Tabla 2  
        | Principales componentes de una interfaz gráfica
    .row.mb-5
      .col-lg-5
        .tabla-b.color-acento-contenido.mb-5.bg-transparent
          .tabla-b__header
            h5.mb-0 
          table
            tr
              th Barras de la aplicación: 
              td parte inferior
            tr
              th Barras de la aplicación: 
              td parte superior
            tr
              th Banners
              td
            tr
              th Barras navegación inferior
              td
            tr
              th Botones: 
              td buttons 
            tr
              th Botón de acción flotante: 
              td Buttons: floating action button
            tr
              th Tarjetas: 
              td Cards
            tr
              th Casillas de verificación: 
              td Checkboxes
            tr
              th Chips
              td 
            tr
              th Tablas de datos: 
              td Data tables
            tr
              th Diálogos: 
              td Dialogs
            tr
              th Divisores: 
              td Dividers
            tr
              th Listas de imágenes: 
              td Image lists
      .col-lg-5
        .tabla-b.color-acento-contenido.mb-5.bg-transparent
          .tabla-b__header
            h5.mb-0 
          table
            tr
              th Listas:  
              td Lists
            tr
              th Menús 
              td 
            tr
              th Cajón de navegación: 
              td Navigation drawer
            tr
              th Carril de navegación: 
              td Navigation rail
            tr
              th Indicadores de progreso: 
              td Progress indicators
            tr
              th Botones de opción: 
              td Radio buttons
            tr
              th Hojas- abajo: 
              td Sheets- bottom
            tr
              th Hojas- lado: 
              td Sheets- side
            tr
              th Deslizadores: 
              td Sliders
            tr
              th Snackbars
              td 
            tr
              th Interruptores: 
              td Switches
            tr
              th Pestañas: 
              td Tabs
            tr
              th Campos de texto: 
              td Text fields
            tr
              th Recolectores de tiempo: 
              td Time pickers
      figcaption Nota. Tomada de Introducción al desarrollo de aplicaciones móviles (2020).
    p.mb-5 Son muchos los elementos que refieren a 
      b “Componentes gráficos”
      |, por ello le invitamos a visitar los enlaces que se proponen a continuación para afianzar los contenidos de este punto.
    .row
      .col-lg-5 
        a.anexo.mb-4.mb-lg-0(href="https://material.io/components/banners" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              b Enlace web. 
              | Banners - Material Desing https://material.io/components/banners
      .col-lg-5 
        a.anexo.mb-4.mb-lg-0(href="https://material.io/components?platform=android" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              b Enlace web. 
              | Banners - Material Desing https://material.io/components?platform=android




</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass" scoped>
.bg1
  background-color: #D2F3F8 !important;
</style>
