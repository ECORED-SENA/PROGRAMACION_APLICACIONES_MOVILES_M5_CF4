<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Prototipo de aplicaciones móviles
    .row.mb-5
      .col-lg-6(data-aos="zoom-in-left")
        p Realizar el prototipo de la aplicación móvil permite visualizar de manera clara la estructura gráfica que va a tener la aplicación; permite identificar cada uno de los elementos gráficos que se utilizarán en la <i>app</i>. Es el primer acercamiento que se tiene de la apariencia que adquirirá el <i>front end</i>; esta es una de las técnicas utilizadas para representar cómo va a quedar la aplicación a desarrollar. Es el primer diseño y la primera actividad que podrán evaluar los clientes o usuarios. Se puede realizar a mano alzada o utilizando una herramienta de maquetación o prototipado; dichas herramientas son fáciles de utilizar y no hay necesidad de programar o manejar algún lenguaje de programación.
          br
          br
          |Ejecutar esta actividad ahorrará mucho tiempo y trabajo, ya que permite ver, de manera muy fiel, cómo va a quedar la <i>app</i> y si es necesario optimizar el diseño o cambiar la apariencia y usabilidad de la misma. Este prototipo será la primera entrega que se comparta a los clientes para su validación.
      .col-lg-6
        img(src="@/assets/curso/img2.svg" alt="Imagen decorativa personas con celular" )(data-aos="zoom-in-right")
    .titulo-sexto.color-acento-contenido.bg-transparent
      h5.fw-normal
        b Tabla 1  
        | Herramientas para la creación de prototipos
    .tabla-b.color-acento-contenido.mb-5.bg-transparent(data-aos="fade-up")
      .tabla-b__header
        h5.mb-0 
      table
        caption Nota. Tomada de Introducción al desarrollo de aplicaciones móviles (2020).
        tr
          th Balsamiq
          td Esta es una de las herramientas más utilizadas para la creación de <i>wireframes</i> y <i>mockups</i>. Es fácil de usar y resulta ser muy intuitiva para el usuario, facilita el diseño para lograr un buen <i>mockups</i> y no permite interacciones con el prototipo.
        tr
          th Lucidchart
          td Presenta una interfaz que opera arrastrando y soltando los elementos para crear el <i>mockups</i>. Se puede trabajar en grupo, compartiendo el proyecto con otros usuarios.
        tr
          th MarvelApp
          td Su ventaja es la accesibilidad a distintas plataformas, como puede ser <i>PC, móvil o web</i>. Para trabajo colaborativo, se sincroniza con <i>Dropbox</i>. Se pueden exportar prototipos como si fuera un <i>APK</i>; es útil para desarrolladores <i>Android</i>.
        tr
          th UXPin
          td Esta herramienta cuenta con muchas opciones para <i>wireframing</i>. Posibilita la conversión de un boceto a un <i>wireframe</i> digital. No solo es la imagen o el pantallazo. No es de uso gratuito.
        tr
          th Protoshare
          td Facilita el trabajo en equipo, brinda gran cantidad de opciones y es una herramienta clara en el diseño de la interfaz.
        tr
          th Proto.io
          td Presenta un diseño simple, fácil de usar. Es una herramienta muy valorada  para el prototipo; cuenta con  numerosas opciones gráficas para integrar interfaces para <i>iOS</i>, <i>Android</i>, y <i>Windows Phone</i>.
        tr
          th iPhoneMockup
          td Esta herramienta se presenta como una buena opción para los que buscan pasar su diseño del papel al plano digital, de manera sencilla. Cuenta con varios estilos y diseños que permiten  utilizar gran cantidad de elementos, diseñando  un  <i>mockup</i> para <i>iOS</i> fácil y rápido.
        tr
          th Wirify
          td Se basa en el trabajo utilizando un <i>script</i>, que tiene la posibilidad de convertir la interfaz en un sitio <i>web</i>, en un <i>wireframe</i>. Esta herramienta se usa para las creaciones entorno desarrollado, permitiendo la publicación y fácil acceso para la evaluación de interfaz y su funcionamiento.
        tr
          th Pidoco
          td Esta herramienta permite generar un enlace <i>URL</i> del prototipo diseñado, que puede ser compartido con los usuarios o el cliente, para realizar una retroalimentación.
        tr
          th Wireframe.cc
          td Esta herramienta es fácil de usar, con un concepto minimalista, permite con mucha facilidad cambiar los diseños sobre diferentes plataformas, computadores de escritorio, portátiles, <i>tablets</i> o <i>smartphones</i>.
        tr
          th Gliffy
          td Esta herramienta es gratuita y permite realizar trabajos <i>online</i> para la creación de <i>mockups</i> de un sitio <i>web</i> o aplicación <i>móvil</i>. Utiliza librerías de esquemas; también cuenta con una <i>API</i> que permite la integración de las aplicaciones a diferentes elementos externos. 
        tr
          th Cacoo
          td Facilita la creación de <i>mockups</i> para sitios <i>web</i> o <i>apps</i>. Tiene una opción gratuita que solo permite exportar el proyecto final en <i>PNG</i>. Es ideal si el objetivo es diseñar la estructura del proyecto y tener una visión completa de la aplicación y su funcionalidad. Permite el trabajo colaborativo en tiempo real, muy útil para los grupos de trabajo interdisciplinares. 
        tr
          th Mockflow
          td Es una herramienta interactiva que permite la creación del sistema de mapas de las páginas y pantallas a utilizar en el proyecto. Realiza exportación en varios formatos, cuenta con  varias librerías y diferentes plantillas que permiten elegir la más adecuada para representar y organizar el contenido de la aplicación.
        tr
          th Moqups
          td <i>Moqups</i> es una herramienta similar a <i>Balsamiq</i>. Está desarrollada bajo <i>HTML5</i>, lo que le convierte en una herramienta rápida y sencilla.
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass" scoped></style>
