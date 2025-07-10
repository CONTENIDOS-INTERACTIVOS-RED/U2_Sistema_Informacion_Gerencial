export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Infraestructura de la Tecnología de la Información',
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
        titulo: 'Infraestructura de TI y tecnologías emergentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Concepto y componentes de la infraestructura tecnológica en las organizaciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Tecnologías emergentes y su impacto en la competitividad empresarial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de datos e inteligencia de negocios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fundamentos de bases de datos y gestión de la información',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Introducción al <em>Big Data</em> y análisis predictivo en la toma de decisiones',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas y procesos clave en inteligencia de negocios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Seguridad de la información y normativas vigentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Principios básicos de ciberseguridad en entornos empresariales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Identificación de amenazas y vulnerabilidades tecnológicas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Normativas y buenas prácticas en la protección de la infraestructura de TI',
            hash: 't_3_3',
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
        'López Ortuño, E. (2020). Sistema de información de mercados: (1 ed.). Marcombo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280238',
    },
    {
      referencia:
        'Lezanski, P. Mattio, A. & Merino, S. (2020). Sistema de información contable I: ( ed.). Editorial Maipue.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/147944',
    },
    {
      referencia:
        'Dueñas Nogueras, J. (2023). Sistemas de información y bases de datos: COMT0110: (1 ed.). IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/229144',
    },
    {
      referencia:
        'Izaguirre Castro, A. (2024). Proyectos exitosos de sistema información financiera: (1 ed.). Editorial Alfil, S. A. de C. V.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280570',
    },
    {
      referencia:
        'Carmona Romera, G. (2021). Sistema Operativo, búsqueda de información: Internet/Intranet y correo electrónico. ADGG0208: (1 ed.). IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222252',
    },
    {
      referencia:
        'Chicano Tejada, E. (2024). Gestionar el crecimiento y las condiciones ambientales. IFCT0510: (1 ed.). IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/274766',
    },
    {
      referencia:
        'Lazzati, S. C. & Tailhade, M. (2019). Liderazgo gerencial: ( ed.). Ediciones Granica.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151212',
    },
    {
      referencia:
        'Molero Suárez, L. M. (Il.). (2024). Casos empresariales desde una mirada académica responsable: investigación enfocada a empresas y sus necesidades gerenciales: (1 ed.). Editorial Politécnico Grancolombiano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279918',
    },
    {
      referencia:
        'Becerra Bizarrón, M. E. Neri Guzmán, J. C. & Domínguez Valdez, B. M. (2020). Gestión empresarial y aprendizaje organizacional: herramientas para el desarrollo de habilidades gerenciales en un contexto de competitividad regional: ( ed.). Plaza y Valdés (México).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/174181',
    },
    {
      referencia:
        'Macías Joven, M. T. (2020). Guía del gerente financiero: desde el diagnóstico hasta la toma de decisiones: ( ed.). Universidad de La Sabana.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/137823',
    },
    {
      referencia:
        'Ramírez, M. & Tejada Betancourt, L. (Il.). (2020). Gerencia estratégica: ( ed.). Universidad Abierta para Adultos (UAPA).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175881',
    },
    {
      referencia:
        'Espinosa Manríquez, N. (2022). Contabilidad financiera y gerencial. Tomo III: Casos y ejercicios: (1 ed.). Editorial Universidad Alberto Hurtado.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226848',
    },
    {
      referencia:
        'Espinosa Manríquez, N. (2022). Contabilidad financiera y gerencial. Tomo II: Aplicaciones prácticas y soluciones: (1 ed.). Editorial Universidad Alberto Hurtado.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226847',
    },
    {
      referencia: 'AppMaster. (2023). Tipos de integración de sistemas.',
      link: 'https://appmaster.io/es/blog/tipos-de-integracion-de-sistemas',
    },
    {
      referencia:
        'Jitbit. (2023). ¿Qué es la integración de sistemas? Tipos, ejemplos y desafíos.',
      link: 'https://www.jitbit.com/es/blog/what-is-system-integration/',
    },
    {
      referencia:
        'Alumio. (2024). Integración de sistemas: métodos, herramientas y ventajas.',
      link:
        'https://www.alumio.com/es/blog/system-integration-methods-tools-and-benefits',
    },
    {
      referencia:
        'International Organization for Standardization. (2022). ISO/IEC 27002:2022 - Information security, cybersecurity and privacy protection — Information security controls.',
      link: 'https://www.iso.org/standard/75652.html',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). ISO/IEC 27033-1:2015 - Information technology — Security techniques — Network security — Part 1: Overview and concepts.',
      link: 'https://www.iso.org/standard/63461.html',
    },
    {
      referencia:
        'Wikipedia. (2023, abril 15). ISO/IEC 27001. Wikipedia, la enciclopedia libre. Recuperado el 6 de mayo de 2025, de https://es.wikipedia.org/wiki/ISO/IEC_27001',
      link: 'https://es.wikipedia.org/wiki/ISO/IEC_27001',
    },
    {
      referencia:
        'CCN-CERT. (2018). Principios y recomendaciones básicas en ciberseguridad.',
      link:
        'https://www.ucm.es/data/cont/media/www/pag-114974/CCN-CERT_BP_01.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acceso',
      significado:
        'permiso otorgado a usuarios o sistemas para utilizar recursos o información dentro de una red o aplicación.',
    },
    {
      termino: 'Amenaza',
      significado:
        'cualquier evento potencial que pueda causar daño a los sistemas de información o comprometer la seguridad de los datos.',
    },
    {
      termino: 'Análisis predictivo',
      significado:
        '<em>técnica</em> que utiliza datos históricos y algoritmos estadísticos para anticipar resultados futuros y apoyar la toma de decisiones.',
    },
    {
      termino: 'Autenticación',
      significado:
        '<em>proceso</em> mediante el cual un sistema verifica la identidad de un usuario antes de permitirle el acceso.',
    },
    {
      termino: 'Backup',
      significado:
        'copia de seguridad de datos que se realiza para evitar su pérdida en caso de fallos del sistema o incidentes.',
    },
    {
      termino: 'Big Data',
      significado:
        '<em>conjunto</em> de datos masivos, variados y generados a gran velocidad, cuya gestión requiere tecnologías especializadas.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        '<em>conjunto</em> de prácticas, herramientas y procesos diseñados para proteger los sistemas informáticos de ataques o accesos no autorizados.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        '<em>principio</em> de seguridad que asegura que la información solo sea accesible por personas autorizadas.',
    },
    {
      termino: 'Cortafuegos',
      significado:
        'dispositivo o <em>software</em> que controla y filtra el tráfico de red para proteger sistemas contra accesos indebidos.',
    },
    {
      termino: 'Datos',
      significado:
        'representación simbólica de hechos, cifras o información que puede ser procesada por sistemas informáticos.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        '<em>garantía</em> de que la información y los servicios estén accesibles y operativos cuando los usuarios los necesiten.',
    },
    {
      termino: 'Encriptación',
      significado:
        '<em>técnica</em> que convierte la información en un formato ilegible para protegerla durante su transmisión o almacenamiento.',
    },
    {
      termino: 'Gestión de riesgos',
      significado:
        'proceso de identificar, analizar y mitigar amenazas que pueden afectar los activos tecnológicos de una organización.',
    },
    {
      termino: 'Integridad',
      significado:
        'propiedad que asegura que la información se mantiene completa y sin alteraciones no autorizadas.',
    },
    {
      termino: 'Malware',
      significado:
        '<em>software</em> malicioso diseñado para dañar, <em>infiltrarse</em> o robar información de los sistemas informáticos.',
    },
    {
      termino: 'Normativa',
      significado:
        '<em>conjunto</em> de reglas y estándares que regulan la protección y el uso seguro de la tecnología en una organización.',
    },
    {
      termino: 'Phishing',
      significado:
        '<em>técnica</em> de fraude digital que busca obtener información confidencial engañando al usuario a través de correos o sitios falsos.',
    },
    {
      termino: 'Red',
      significado:
        '<em>conjunto</em> de dispositivos interconectados que comparten recursos e información entre sí.',
    },
    {
      termino: 'Sistema de información',
      significado:
        '<em>conjunto</em> organizado de elementos que recopilan, procesan, almacenan y distribuyen información para apoyar decisiones empresariales.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'debilidad en un sistema que puede ser <em>explotada</em> por una amenaza para comprometer su seguridad.',
    },
  ],
}
