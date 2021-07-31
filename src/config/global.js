export default {
  global: {
    componenteFormativo: 'Diseño de la interfaz gráfica de la aplicación móvil',
    descripcionCurso:
      'El estudio consciente de este componente formativo posibilitará al aprendiz identificar los principales lenguajes de programación para el desarrollo de aplicaciones móviles híbridas y generar análisis de los componentes gráficos más importantes y populares que componen una interfaz gráfica basada en el usuario. Podrá ampliar conocimientos y nociones básicas para realizar una apropiada interfaz.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Prototipo de aplicaciones móviles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lenguaje de programación para desarrollo de apps ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Lenguajes utilizados para desarrollo Android',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Lenguajes iOS',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Lenguajes multiplataforma (Cross-Platform)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Otros lenguajes de programación',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Navegación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Componentes gráficos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Gestos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Estructura de navegación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Características de una apropiada interfaz de usuario',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cuello, J. y Vittone, J. (2013). Diseñando apps para móviles.',
      link: '',
    },
    {
      referencia:
        'Desarrollador Android. (2015). Action Bar (Barra de Acciones). ',
      link:
        'https://desarrollador-android.com/diseno/pautas-2/action-bar-barra-de-acciones/',
    },
    {
      referencia:
        'Duckett, J. (2014). JavaScript  &  jQuery. Interactive front-end Web development. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Fernández, P. (2019). Usabilidad web, teoría y uso. RA-MA Editorial.',
      link: '',
    },
    {
      referencia:
        'Gauchat, D. (2017). El gran libro de HTML5, CSC3 y JavaScript. Marcombo.',
      link: '',
    },
    {
      referencia:
        'Gualtetiero, T. y Salvaggio, A. (2019). JavaScript: Guía completa. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Kendall, K. y Kendall, J. (2011). Análisis y diseño de sistemas. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Klein, L. (2014). Experiencia de usuario para lean startups. UNIR Editorial.',
      link: '',
    },
    {
      referencia:
        'Krug, S. (2015). No me hagas pensar. Actualización. Anaya Multimedia.',
      link: '',
    },
    {
      referencia:
        'Luján, J. (2017). HTML5, CSS y Javascript. Crea tu web y apps con el estándar de desarrollo. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Norman, D. (2013). The design of everyday things. Basic Books.',
      link: '',
    },
    {
      referencia:
        'Pohl, K. y Rupp, C. (2011). Requirements engineering fundamentals. Rocky Nook.',
      link: '',
    },
    {
      referencia:
        'Pressman, R., Campos, V. y Enríquez, J. (2010). Ingeniería del software. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Raffino, M. (2020). Interfaz - Qué es, concepto, tipos, características y ejemplos. Concepto.de.',
      link: 'https://concepto.de/interfaz/',
    },
    {
      referencia:
        'Recio, J. (2018). HTML5, CSS3 y JQuery Curso práctico. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Seydnejad, S. (2016). Modular Programming with JavaScript. Packt Publishing.',
      link: '',
    },
    {
      referencia:
        'Sommerville I. (2011).  Ingeniería del software. Addison-Wesley',
      link: '',
    },
    {
      referencia:
        'Whitten, J., Bentley, L., Randolph, G., Rico, M. y Orozco, M. (2008). Análisis de sistemas. McGraw - Hill Interamericana.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Antipatrón',
      significado:
        'Un antipatrón de diseño es un patrón de diseño que, invariablemente, conduce a una mala solución para un problema.',
    },
    {
      termino: 'Hipertexto',
      significado:
        'Es un sistema de organización y presentación de datos que se basa en la vinculación de fragmentos textuales o gráficos a otros fragmentos, lo cual permite al usuario acceder a la información no necesariamente de forma secuencial sino desde cualquiera de los distintos ítems relacionados.',
    },
    {
      termino: 'Mapas de navegación',
      significado:
        'Son esquemas de organización de la información de una aplicación móvil, los cuales muestran las bases principales de la aplicación misma, expresan las relaciones de jerarquía y secuencia, permiten elaborar escenarios de comportamientos de los usuarios; son representados de forma textual, gráfica o ambas combinadas.',
    },
    {
      termino: 'Mockup',
      significado:
        'En la fabricación y el diseño, el mockup es una maqueta a escala o de tamaño completo de un diseño o dispositivo, que se utiliza para la enseñanza, demostración, evaluación de diseño, promoción y otros fines.',
    },
    {
      termino: 'Multiplataforma',
      significado:
        'Indica la capacidad o características con las que cuentan algunas aplicaciones móviles o software de escritorio; permiten la interoperabilidad y ejecución sobre diferentes sistemas operativos o plataformas. Algunos lenguajes de programación que facilitan la creación de aplicaciones multiplataforma son Java, C++, <i>JavaScript</i> .',
    },
  ],
  complementario: [
    {
      texto:
        'Rivera, K. (2020, 24 junio). Fastest way to design a Mobile App : Using Balsamiq Mockups [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RKr9u4S0W7g',
    },
    {
      texto:
        'yReyALD. (2020, 22 octubre). BALSAMIQ MOCKUPS / Instalación y maquetación de una aplicación móvil - FÁCIL (música GOT de fondo) [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=idX3aFx67Vc ',
    },
    {
      texto: 'Material. (s. f.). Components. Material.io.',
      tipo: 'Página web',
      link: 'https://material.io/components?platform=android ',
    },
    {
      texto:
        'Programando Ideas. (2020, 17 junio). MOOC 3 - Apps para dispositivos móviles 2020 | Planificación del desarrollo de apps [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/1qhScXdYGdM',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Wilson Andrés Cuervo Nieto',
        cargo: 'Instructor ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
