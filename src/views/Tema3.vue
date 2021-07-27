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
            p.mb-0 Lo que define la interacción del usuario con la app, su interfaz y el entorno general son los patrones y estructuras de navegación, planteando la manera en la cual el usuario recorrerá la aplicación, estableciendo el entorno gráfico y la interacción que realizará con los contenidos.
    .titulo-sexto.color-acento-contenido.bg-transparent
      h5.fw-normal
        b Figura 1 
        | La navegación en dispositivos móviles
    .row.mb-5.justify-content-center
      .col-lg-6.flex
        .movilHover.m-auto
          .movilHover__image
            img(src="@/assets/curso/img21.svg" style="width: 380px")
            .movilHover__container.d-flex
              .icon-box.color-primario.p-1.m-1.d-flex
                img(src="@/assets/curso/img22.svg" style="width: 98px").m-auto
                h4.m-auto ¿de qué manera el usuario recorrerá la aplicación?
              .icon-box.color-acento-contenido.p-1.m-1.d-flex
                img(src="@/assets/curso/img22.svg" style="width: 98px").m-auto
                h4.m-auto askjfhsdkjf
              .icon-box.color-acento-botones.p-1.m-1.d-flex
                img(src="@/assets/curso/img22.svg" style="width: 98px").m-auto
                h4.m-auto askjfhsdkjf
              .icon-box.color-secundario.p-1.m-1.d-flex
                img(src="@/assets/curso/img22.svg" style="width: 98px").m-auto
                h4.m-auto askjfhsdkjf
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
    flex-wrap: wrap
    width: 300px
    position: absolute
    top: 20%
    left: 32px
.icon-box
  transition: all(0.8s) ease-in-out
  h4
    display: none
  width: 142px
  height: 143px
  &:hover

    width: fit-content
    img
      display: none
    h4
      display: block
</style>
