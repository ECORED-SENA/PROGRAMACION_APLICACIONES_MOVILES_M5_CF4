<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3 
      h1 Navegación
    .row.mb-5.justify-content-center
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img20.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Lo que define la interacción del usuario con la 
              span.fst-italic app
              |, su interfaz y el entorno general son los patrones y estructuras de navegación, planteando la manera en la cual el usuario recorrerá la aplicación, estableciendo el entorno gráfico y la interacción que realizará con los contenidos.
    .titulo-sexto.color-acento-contenido.bg-transparent
      h5.fw-normal
        b Figura 1 
        | La navegación en dispositivos móviles
    .row.mb-5.justify-content-center
      .col-lg-6.flex
        .movilHover.m-auto
          .movilHover__image
            img(src="@/assets/curso/img21.svg" style="width: 380px")
            .movilHover__container
              .row.justify-content-center
                .col-lg-6.col-12.px-2
                  .icon-box.left.color-primario.p-1.p-lg-4.m-1
                    img(src="@/assets/curso/img22.svg" style="width: 98px").m-auto
                    h4.m-auto ¿De qué manera el usuario recorrerá la aplicación?
                .col-lg-6.col-12.px-2
                  .icon-box.right1.color-acento-contenido.p-1.p-lg-4.m-1
                    img(src="@/assets/curso/img22.svg" style="width: 98px").m-auto
                    h4.m-auto ¿Y si viene de una notificación?
              .row.justify-content-center
                .col-lg-6.col-12.px-2    
                  .icon-box.left.color-acento-botones.p-1.p-lg-4.m-1
                    img(src="@/assets/curso/img22.svg" style="width: 98px").m-auto
                    h4.m-auto ¿A través de menús o del contenido en sí mismo?
                .col-lg-6.col-12.px-2     
                  .icon-box.right2.color-secundario.p-1.p-lg-4.m-1
                    img(src="@/assets/curso/img22.svg" style="width: 98px").m-auto
                    h4.m-auto ¿Cómo hará para volver atrás cuando haya avanzado?
    TabsB.color-acento-contenido.mb-5.bg-transparent
      .py-4.py-md-5(titulo="Pestañas" :icono="require('@/assets/curso/img31.svg')")
        .row.justify-content-between
          .col-md-6.mb-4.mb-md-0
            h4 Pestañas
            p Las pestañas se utilizan para realizar el cambio entre pantallas y se trabaja sobre un mismo nivel jerárquico. Es importante resaltar o remarcar la pestaña principal y no usarlas para incluir otras acciones distintas a la navegación, para que el usuario tenga la comodidad y facilidad de tener un punto de partida. 
              span.fst-italic Google 
              |sugiere no emplear más de siete pestañas, pero en 
              span.fst-italic iOS
              |, por ejemplo, se muestra un máximo de cinco pestañas.
          .col-md-5
            .titulo-sexto.color-acento-contenido.bg-transparent
              h5.fw-normal
                b Figura 2 
                | Visualización de pestaña en 
                span.fst-italic iphone 
                |y en 
                span.fst-italic android
            figure
              img(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen').mb-3
      .py-4.py-md-5(titulo="Lista" :icono="require('@/assets/curso/img32.svg')")
        .row.justify-content-between
          .col-md-6.mb-4.mb-md-0
            h4 Lista
            p Por lo general, las listas son muy similares en los tres sistemas operativos más populares: 
              span.fst-italic Android, iOS y Windows Phone. 
              | Las listas pueden estar integradas por texto, imágenes, botones y elementos gráficos que permitan identificar contenidos. Es importante siempre jerarquizar los contenidos en las listas. 
              span.fst-italic Google 
              | recomienda la agrupación de ítems relacionados para facilitar la comprensión del usuario al momento de realizar la navegación y la toma de decisiones.
          .col-md-5
            .titulo-sexto.color-acento-contenido.bg-transparent
                h5.fw-normal
                  b Figura 3 
                  | Listas
            figure
              img(src='@/assets/curso/img24.svg', alt='Texto que describa la imagen').mb-3
      .py-4.py-md-5(titulo="Menú tipo cajón" :icono="require('@/assets/curso/img33.svg')")
        .row.justify-content-between
          .col-md-6.mb-4.mb-md-0
            h4 Menú tipo cajón
            p Por lo general, este menú se encuentra ubicado y se despliega en el lado izquierdo, permite la visualización de los contenidos por medio de una lista que está compuesta por un título principal y subtítulos contenedores de información; permanecen ocultos y sólo se despliegan cuando son solicitados. Una de las grandes ventajas es el aprovechamiento del espacio, presentando una manera cómoda de navegar sobre contenidos nutridos o con gran cantidad de información.
          .col-md-5
            .titulo-sexto.color-acento-contenido.bg-transparent
              h5.fw-normal
                    b Figura 4 
                    | Menú tipo cajón
            figure
              img(src='@/assets/curso/img25.svg', alt='Texto que describa la imagen').mb-3
      .py-4.py-md-5(titulo="Acciones" :icono="require('@/assets/curso/img34.svg')")
        .row.justify-content-between
          .col-md-6.mb-4.mb-md-0
            h4 Acciones
            p Se trata de los íconos que aparecen, por lo general, en la parte superior de las pestañas y se mantienen visibles a lo largo del recorrido. Representan las opciones más relevantes de la aplicación y permiten la toma de decisiones, por ejemplo: la opción salir, siguiente, y otras más. Dichas acciones deben ubicarse de acuerdo con su jerarquía y funcionamiento; todas las acciones pueden ser representadas por signos; la mayoría de estas se pueden realizar solamente en determinadas páginas, sin embargo, pueden existir excepciones cuando sea necesario que una acción esté siempre visible.
              br
              br
              |(Cuello y Vittone, 2013)
          .col-md-5
            .titulo-sexto.color-acento-contenido.bg-transparent
              h5.fw-normal
                b Figura 5 
                | Botones de acción en aplicación Gmail
            figure.mb-3
              img.mb-2(src='@/assets/curso/img26.svg', alt='Texto que describa la imagen')
            .titulo-sexto.color-acento-contenido.bg-transparent
              h5.fw-normal
                b Figura 6 
                | Barra de acción
            figure
              img.mb-2(src='@/assets/curso/img27.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Cuadros de diálogo" :icono="require('@/assets/curso/img35.svg')")
        .row.justify-content-between
          .col-md-6.mb-4.mb-md-0
            h4 Cuadros de diálogo
            p Se trata de casos en los que se debe interrumpir al usuario para que tome una decisión o para brindar una información necesaria. Cuando estos cuadros están visibles en pantalla, el usuario no puede hacer otra cosa en el resto de la aplicación; estos cuadros, por lo general, bloquean la pantalla hasta que el usuario toma una decisión. 
              br
              br
              |El cuadro de diálogo busca reafirmar la decisión tomada por el usuario. Presenta dos opciones, la intención principal es evitar que el usuario cometa errores al momento de tomar decisiones apresuradas. Por esta razón, se solicita, generalmente, corroborar la decisión tomada.
          .col-md-5
            .d-flex.mb-3
              .contenedor.me-3
                .titulo-sexto.color-acento-contenido.bg-transparent
                  h5.fw-normal
                        b Figura 7 
                        | Contraseña incorrecta
                figure
                  img(src='@/assets/curso/img28.svg', alt='Texto que describa la imagen')
              .contenedor1
                .titulo-sexto.color-acento-contenido.bg-transparent
                  h5.fw-normal
                        b Figura 8 
                        p Error del 
                          span.fst-italic SO
                figure
                  img(src='@/assets/curso/img29.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Barra de la app" :icono="require('@/assets/curso/img36.svg')")
        .row.justify-content-between
          .col-md-6.mb-4.mb-md-0
            h4 Barra de la app
            p Esta barra se puede ubicar en la parte superior o inferior y contiene los íconos más importantes de la aplicación. Por lo general, se encuentra visible y es de fácil acceso para el usuario; en ella se pueden encontrar opciones como compartir o buscar. La barra de la app contribuye a generar un orden claro y lógico de la presentación, proporcionando un despliegue de acciones que no son tan comunes o que se utilizan con poca frecuencia. Es uno de los elementos más relevantes en el diseño, pero no siempre está incluida o hace parte de todas las aplicaciones móviles; puede ser implementada únicamente en las pantallas que lo requieran. 
              br
              br
              |(Cuello y Vittone, 2013)
          .col-md-6
            figure
              img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen')
    p.mb-5 Para ampliar sus conocimientos sobre los componentes de la interfaz gráfica para móviles, visite el enlace que se le propone. Le recomendamos tomar nota atenta de los aspectos más importantes:
    .col-lg-5 
      a.anexo.mb-4.mb-lg-0(href="https://material.io/components?platform=android" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p 
            b Enlace web. 
            | Banners - Material Design https://material.io/components?platform=android














</template>

<script>
export default {
  name: 'Tema3',
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
.movilHover
  &__image
  width: fit-content
  position: relative
  &__container
    width: 300px
    position: absolute
    top: 26%
    left: 32px
.icon-box
  transition: all 0.5s
  display: flex
  h4
    display: none
  height: 143px
  &:hover
    width: fit-content
    position: absolute
    z-index: 99999
    img
      display: none
    h4
      display: block
.left .rigth
  transition: all 0.5s
.left:hover

  right: 50%
@media (max-width: $bp-max-md)
  .left:hover
    right: 0%
  .icon-box:hover
    position: inherit
  .movilHover__container
    top: 18%
    width: 76%
  .icon-box
    height: 100px
    display: flex
  .icon-box img
    width: 80px !important
  .icon-box h4
    text-align: center
</style>
