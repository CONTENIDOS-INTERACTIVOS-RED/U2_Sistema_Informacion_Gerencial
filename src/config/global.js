export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Aplicaciones claves y administración de sistemas de información',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistemas de información para la gestión organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Aplicaciones empresariales: características e integración en la organización',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'CRM y ERP: fundamentos, funcionalidades y beneficios estratégicos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Casos de éxito en la implementación de ERP y CRM en diferentes sectores',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estrategias para la implementación de sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Factores críticos para una implementación efectiva de SI en la empresa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Retos organizacionales y soluciones en procesos de transformación digital',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Integración de sistemas en la empresa digital: interoperabilidad y alineación estratégica',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'López Ortuño, E. (2020). Sistema de información de mercados: (1 ed.). Marcombo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280238',
    },
    {
      referencia:
        'Lezanski, P. Mattio, A. & Merino, S. (2020). Sistema de información contable I: ( ed.). Editorial Maipue. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/147944',
    },
    {
      referencia:
        'Dueñas Nogueras, J. (2023). Sistemas de información y bases de datos: COMT0110: (1 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/229144 ',
    },
    {
      referencia:
        'Izaguirre Castro, A. (2024). Proyectos exitosos de sistemas de información financiera: (1 ed.). Editorial Alfil, S. A. de C. V.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280570',
    },
    {
      referencia:
        'Carmona Romera, G. (2021). Sistema Operativo, búsqueda de información: Internet/Intranet y correo electrónico. ADGG0208: (1 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222252',
    },
    {
      referencia:
        'Chicano Tejada, E. (2024). Gestionar el crecimiento y las condiciones ambientales. IFCT0510: (1 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/274766',
    },
    {
      referencia:
        'Lazzati, S. C. & Tailhade, M. (2019). Liderazgo gerencial: ( ed.). Ediciones Granica.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151212',
    },
    {
      referencia:
        'Molero Suárez, L. M. (Il.). (2024). Casos empresariales desde una mirada académica responsable: investigación enfocada a empresas y sus necesidades gerenciales: (1 ed.). Editorial Politécnico Grancolombiano.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279918',
    },
    {
      referencia:
        'Becerra Bizarrón, M. E. Neri Guzmán, J. C. & Domínguez Valdez, B. M. (2020). Gestión empresarial y aprendizaje organizacional: herramientas para el desarrollo de habilidades gerenciales en un contexto de competitividad regional: ( ed.). Plaza y Valdés (México).  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/174181',
    },
    {
      referencia:
        'Macías Joven, M. T. (2020). Guía del gerente financiero: desde el diagnóstico hasta la toma de decisiones: ( ed.). Universidad de La Sabana.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/137823',
    },
    {
      referencia:
        'Ramírez, M. & Tejada Betancourt, L. (Il.). (2020). Gerencia estratégica: ( ed.). Universidad Abierta para Adultos (UAPA). ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175881',
    },
    {
      referencia:
        'Espinosa Manríquez, N. (2022). Contabilidad financiera y gerencial. Tomo III: Casos y ejercicios: (1 ed.). Editorial Universidad Alberto Hurtado.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226848',
    },
    {
      referencia:
        'Espinosa Manríquez, N. (2022). Contabilidad financiera y gerencial. Tomo II: Aplicaciones prácticas y soluciones: (1 ed.). Editorial Universidad Alberto Hurtado.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226847',
    },
    {
      referencia:
        'De la Rosa Curiel, E. O., Rodríguez Torres, E. D., & Acero Sánchez, F. (2020). Plan estratégico para fomentar el uso de las TIC en el sector agrícola. Corporación Universitaria Minuto de Dios. ',
      link:
        'https://repository.uniminuto.edu/bitstream/10656/12583/5/TE.PRO_DelaRosaEddie-RodriguezErika-AceroFernando_2020.pdf',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2021). Propuesta metodológica para implementar un marco de referencia para la alineación estratégica de los sistemas de información. ',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/80772/75065742.2021.pdf?isAllowed=y&sequence=2',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2020). Diagnóstico sobre el nivel de madurez de alineación estratégica de las tecnologías de la información en las organizaciones. ',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/78595/1121819190.2020.pdf?isAllowed=y&sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'proceso de inspección, limpieza y modelado de datos con el objetivo de descubrir información útil.',
    },
    {
      termino: 'Análisis de tendencias',
      significado:
        'identificación de patrones o cambios significativos en los datos a lo largo del tiempo.',
    },
    {
      termino: 'Análisis predictivo',
      significado:
        'uso de modelos estadísticos para prever eventos futuros basados en datos históricos.',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto de datos organizados que se almacenan y se pueden consultar electrónicamente.',
    },
    {
      termino: 'Big Data',
      significado:
        'grandes volúmenes de datos que no pueden ser tratados por herramientas tradicionales.',
    },
    {
      termino: 'Business Intelligence',
      significado:
        'conjunto de procesos y herramientas que convierten datos en información útil para la toma de decisiones.',
    },
    {
      termino: 'Ciclo de vida del dato',
      significado:
        'fases por las que pasa un dato desde su creación hasta su eliminación.',
    },
    {
      termino: 'CRM',
      significado:
        'sistema que permite gestionar las relaciones y la información de los clientes.',
    },
    {
      termino: 'Dashboard',
      significado:
        'panel visual que muestra indicadores clave de rendimiento en tiempo real.',
    },
    {
      termino: 'Data Mining',
      significado:
        'proceso de extracción de patrones útiles desde grandes conjuntos de datos.',
    },
    {
      termino: 'Data Warehouse',
      significado:
        'almacén centralizado que integra datos provenientes de diversas fuentes para su análisis.',
    },
    {
      termino: 'ERP',
      significado:
        'sistema de planificación de recursos empresariales que integra la información de las distintas áreas de la organización.',
    },
    {
      termino: 'Indicador clave (KPI)',
      significado:
        'medida que evalúa el desempeño de una actividad o proceso en relación con sus objetivos.',
    },
    {
      termino: 'Integración de sistemas',
      significado:
        'conexión y coordinación de sistemas diferentes para que funcionen como uno solo.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'simulación de procesos de inteligencia humana mediante sistemas computacionales.',
    },
    {
      termino: 'Interoperabilidad',
      significado:
        'capacidad de diferentes sistemas para comunicarse y compartir datos de manera efectiva.',
    },
    {
      termino: 'Power BI',
      significado:
        'herramienta de Microsoft para la visualización de datos y creación de informes interactivos.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'proceso mediante el cual se elige una acción entre varias posibles.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'proceso de adopción de tecnologías digitales para mejorar procesos empresariales.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'representación gráfica de información para facilitar su comprensión.',
    },
  ],
}
