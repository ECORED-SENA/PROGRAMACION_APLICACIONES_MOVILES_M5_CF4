<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5.justify-content-between
      .col-lg-7
        p.mb-5 En la dinámica agitada del mercado actual, los bienes y servicios que se ofertan y compran son medidos, fundamentalmente, por las percepciones del comprador, cliente o usuario. Cuando la experiencia de uso de un producto, como las apps o sus entornos gráficos, es satisfactoria, las personas acusan esa satisfacción, la identifican, pero difícilmente ubican el origen de su satisfacción. De hecho, no es una pregunta o reflexión que las personas consumidoras de apps se planteen con regularidad. Básicamente, se acepta tal experiencia de satisfacción y el producto que la provoca, así, sin más. 
          br
          br
          |En esto radica, entonces, que las interfaces sean un elemento clave y que su diseño responda a las exigencias que, sin mucha consciencia a veces, son solicitadas por los consumidores de dispositivos electrónicos, smartphones, apps y otros servicios web. Los lenguajes de programación y los componentes gráficos de la interfaz toman valor y sentido en la misma medida en que sus destinatarios hallan entornos familiares y, sobre todo, afines a sus intereses de actividad, tanto online como offline.
          br
          br
          |Para la elaboración de este componente, se abordaron varios autores conocidos en 
          b diseño de la interfaz gráfica de aplicaciones móviles
          |, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la 
          b programación de aplicaciones para dispositivos móviles.
      .col-lg-5.d-flex.justify-content-center
        figure.mb-5
          img(src='@/assets/curso/img1.jpg' alt='Imagen de celular' style='width: 321px').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
