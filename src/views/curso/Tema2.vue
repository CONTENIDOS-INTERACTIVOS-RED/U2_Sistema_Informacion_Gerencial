<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Gestión de datos e inteligencia de negocios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .row.mb-5
      .col-lg-8
        p En el entorno corporativo actual, la gestión eficiente de datos se ha convertido en un factor esencial para la toma de decisiones estratégicas. La Inteligencia Empresarial (#[em Business Intelligence – BI]) permite transformar grandes volúmenes de datos en información valiosa, facilitando la identificación de oportunidades, la optimización de procesos y el fortalecimiento de la competitividad organizacional. La integración de BI en las entidades corporativas permite:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/1.svg", alt="")


    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Analizar #[b patrones de comportamiento del cliente]

    
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Predecir #[b tendencias del mercado]
    
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Optimizar la #[b eficiencia operativa]


    p Estos sistemas incorporan herramientas de:


    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Análisis predictivo
                p.mb-0 Permite anticipar escenarios futuros mediante modelos estadísticos y algoritmos de machine learning.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Análisis prescriptivo
                p.mb-0 Sugiere acciones concretas para alcanzar objetivos, basándose en simulaciones y análisis de impacto.

        
    p.mb-4 Además, una gestión adecuada de los datos asegura:

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[b Calidad:] Información precisa, actualizada y coherente.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[b Integridad:] Datos completos y sin inconsistencias.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[b Seguridad:] Protección frente a accesos no autorizados y cumplimiento normativo.
                    
    
        p(data-aos="fade-left").mb-4 Estos elementos son fundamentales para preservar la confianza de los interesados y cumplir con las regulaciones vigentes. Finalmente, la sinergia entre una administración de datos robusta y las herramientas de BI otorga a las organizaciones una ventaja competitiva significativa, especialmente en un mercado cada vez más dinámico y orientado a la información.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Fundamentos de bases de datos y gestión de la información

    .bg-full-width.bg-color-8
      .px-4.px-md-5.py-4

        .row.mb-5
          .col-lg-8
            p(data-aos="fade-left").mb-5 En el entorno corporativo actual, la información se ha convertido en uno de los activos más valiosos. La capacidad para almacenar, organizar y acceder eficazmente a los datos es esencial para la toma de decisiones tanto estratégicas como operativas. En este contexto, las bases de datos juegan un papel clave al ofrecer una estructura sistemática para administrar dicha información.

            h2 Concepto y utilidad de las bases de datos

        
            p(data-aos="fade-left").mb-5 Una #[b base de datos] es un conjunto de datos estructurados que se almacenan de manera organizada para facilitar su acceso, manipulación y gestión. Puede incluir distintos tipos de información, como datos numéricos, textos o elementos multimedia, y se utiliza en múltiples áreas empresariales: gestión de clientes, inventarios, recursos humanos, entre otros.

            h2 Sistemas de Gestión de Bases de Datos (SGBD)
        
            p(data-aos="fade-left") Los Sistemas de Gestión de Bases de Datos (SGBD) son herramientas que permiten crear, administrar y manipular bases de datos. Ofrecen funcionalidades para:


          .col-lg-4.d-none.d-sm-block
            figure
              img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in").mb-4.mb-lg-0
        

    
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-3
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Definir estructuras de datos
        
          .col-lg-3
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Ejecutar consultas
        
          .col-lg-3
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Garantizar la integridad de la información
        
          .col-lg-3
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Controlar el acceso de los usuarios


    p.mb-5 Algunos de los SGBD más utilizados en el ámbito corporativo son #[b MySQL], #[b PostgreSQL] y #[b Oracle Database].

    h2 Modelos de bases de datos
    
    p(data-aos="fade-left").mb-5 Existen distintos modelos para estructurar bases de datos. El modelo relacional es uno de los más comunes, ya que organiza la información en tablas (filas y columnas), lo cual facilita establecer relaciones entre los datos.

    .bg-full-width.bg-color-info.mb-5
      .px-4.px-md-5.pt-4
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/info.svg', alt='', style="max-width: 918px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7.5%" y="83.5%" numero="+")
                h5 Relacional
                p Organiza datos en tablas relacionadas; basado en álgebra relacional.
    
              .bg-color-white.box-shadow.p-3(x="7.5%" y="61%" numero="+")
                h5 Jerárquico
                p Estructura los datos en forma de árbol; cada elemento tiene un único padre.
    
              .bg-color-white.box-shadow.p-3(x="40.3%" y="5%" numero="+")
                h5 Orientado a objetos
                p Almacena datos como objetos, combinando características de programación orientada a objetos.
    
              .bg-color-white.box-shadow.p-3(x="92.5%" y="61%" numero="+")
                h5 De red
                p Similar al jerárquico, pero permite múltiples relaciones entre registros.
    
              .bg-color-white.box-shadow.p-3(x="92.5%" y="83.5%" numero="+")
                h5 NoSQL
                p Diseñado para datos no estructurados; altamente escalable, ideal para big data.
    
    h2 Gestión de la información

    .row.mb-5.align-items-center
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 La #[b gestión de la información] abarca la planificación, supervisión y control de los recursos informativos de una organización. Incluye todas las etapas del ciclo de vida de la información: desde su recolección y almacenamiento, hasta su análisis y distribución. Una administración eficaz de la información permite:
    
        .bg-color-3.p-4(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Mejorar la eficiencia operativa.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Cumplir con regulaciones legales.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Obtener ventajas competitivas.

    h2 Aplicaciones prácticas

    .row.mb-5.align-items-center
      .col-lg-8
        p(data-aos="fade-left") En la práctica corporativa, las bases de datos se utilizan para múltiples funciones como:
        
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Seguimiento de ventas
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Análisis de mercados
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Gestión de relaciones con clientes (CRM)

        p(data-aos="fade-left").mb-4 Por ejemplo, una empresa puede usar su base de datos para almacenar información detallada de sus clientes, lo que facilita la #[b personalización de campañas de mercadotecnia] y #[b mejora la experiencia del cliente].
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")

    .bg-full-width.bg-color-9.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/15.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Estudio de caso resuelto – Fundamentos de bases de datos

            p.mb-4(data-aos="fade-right") Se invita a leer el documento #[em Estudio de caso resuelto – Fundamentos de bases de datos], donde se aborda la optimización de la gestión de clientes en la empresa  Servicios Logísticos Integrados S.A.S.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estudio de caso resuelto – Fundamentos de bases de datos
    
    
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Introducción al #[em Big Data] y análisis predictivo en la toma de decisiones
    
    .row.mb-5.align-items-center
      .col-lg-8
        p(data-aos="fade-left") En el entorno corporativo actual, caracterizado por una creciente digitalización y una generación masiva de datos, la capacidad para recolectar, procesar y analizar información se ha convertido en un elemento crucial para mantener la competitividad organizacional. El concepto de #[b Big Data] se refiere a la gestión de grandes volúmenes de datos que, por su diversidad, velocidad y volumen, exceden las capacidades de las herramientas tradicionales de procesamiento.

        .bg-color-1.p-4.mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos datos provienen de múltiples fuentes, como redes sociales, sensores del Internet of Things (IoT) y transacciones comerciales. Su correcta explotación ofrece una oportunidad sin precedentes para obtener percepciones valiosas que respalden la toma de decisiones estratégicas.

        h2 ¿Qué es el análisis predictivo?

        p El análisis predictivo es una disciplina avanzada del análisis de datos que utiliza técnicas estadísticas, algoritmos de #[em machine learning] y minería de datos para identificar patrones y anticipar eventos futuros. Esta metodología permite a las organizaciones prever tendencias de mercado, comportamientos de consumidores y riesgos operativos, habilitando una #[b planificación proactiva y eficaz].


      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")

    h2(data-aos="flip-up").mb-4 Beneficios de integrar Big Data y análisis predictivo


    .bg-full-width.bg-color-8
      .px-4.px-md-5.py-4
        .row.mb-4
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left").mb-4 La integración de estas tecnologías en el proceso de toma de decisiones corporativas genera múltiples ventajas. Entre las más destacadas se encuentran:
        
            .bg-color-2.p-4(data-aos="fade-left").mb-4
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Mayor precisión en las proyecciones
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Optimización de recursos
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Personalización de servicios
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Identificación temprana de oportunidades y amenazas

            p Las aplicaciones por sectores son: 

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4
            .bg-color-10.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/19.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2.text-white Financiero
                  p.mb-0.text-white Evaluación de riesgos crediticios, detección de fraudes
        
          .col-lg-4
            .bg-color-10.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2.text-white #[em Marketing]
                  p.mb-0.text-white Segmentación de audiencias, personalización de campañas
        
          .col-lg-4
            .bg-color-10.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2.text-white Logística
                  p.mb-0.text-white Optimización de rutas, gestión de inventarios

    h2(data-aos="flip-up").mb-4 Retos en la implementación

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") A pesar de sus ventajas, la adopción eficaz de estas tecnologías presenta desafíos importantes, tales como:
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Calidad y veracidad de los datos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Infraestructura tecnológica adecuada.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Capacitación del personal especializado.

        p(data-aos="fade-left").mb-4 La implementación de Big Data y análisis predictivo representa una transformación profunda en la manera en que las organizaciones abordan la toma de decisiones. Al convertir grandes volúmenes de datos en información accionable, estas herramientas permiten a las empresas adaptarse rápidamente a un entorno dinámico y competitivo, fortaleciendo su capacidad de innovación y sostenibilidad a largo plazo.

          
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
    

    .titulo-figura.mb-2
      h5 Tabla 2. 
      span #[em Big Data] y análisis predictivo en la toma de decisiones

    .tabla-a.color-acento-contenido.mb-5#Tabla2
      table
        thead
          tr
            th.bg-color-tabla.text-white Concepto
            th.bg-color-tabla.text-white Descripción
            th.bg-color-tabla.text-white Aplicación Empresarial
            th.bg-color-tabla.text-white Ejemplo Real
        tbody
          tr
            td #[em Big Data]
            td Conjunto masivo de datos que se generan a gran velocidad, en formatos variados y en volúmenes elevados.
            td Permite identificar patrones de comportamiento del consumidor y mejorar la eficiencia operativa.
            td Amazon utiliza #[em Big Data] para recomendar productos personalizados basados en el historial de compras del cliente.
          tr
            td Análisis Predictivo
            td Técnica que utiliza modelos estadísticos y algoritmos para prever eventos futuros con base en datos históricos.
            td Ayuda en la toma de decisiones estratégicas anticipando tendencias y comportamientos futuros.
            td Netflix utiliza análisis predictivo para sugerir contenido que probablemente el usuario quiera ver, basándose en sus hábitos de visualización.
          tr
            td #[em Big Data] + Análisis Predictivo
            td Combinación que permite procesar grandes volúmenes de datos para anticiparse a escenarios futuros.
            td Potencializa la toma de decisiones en áreas como marketing, finanzas, logística y RR. HH.
            td Zara analiza grandes volúmenes de datos de ventas y preferencias para ajustar rápidamente su producción y distribución de prendas.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Herramientas y procesos clave en inteligencia de negocios


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/22b.png", alt="")
      .col-lg-8
        .bg-color-2.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 La inteligencia de negocios (#[em Business Intelligence], BI) es un conjunto de metodologías, procesos, arquitecturas y tecnologías que permiten transformar datos en información significativa y útil para la toma de decisiones empresariales. Su objetivo principal es mejorar la eficiencia operativa, identificar nuevas oportunidades de negocio y facilitar decisiones estratégicas basadas en datos concretos.
                

    h2(data-aos="flip-up").mb-4 Procesos fundamentales en BI

    p(data-aos="fade-left").mb-4 Los procesos clave de la inteligencia de negocios pueden resumirse de la siguiente manera:

    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Recopilación de datos")
            p Obtención de datos desde fuentes internas y externas, como sistemas ERP, CRM o redes sociales.
    
          .div(titulo="Almacenamiento de datos")
            p Organización de los datos en #[em data warehouses] que facilitan su acceso y posterior análisis.
    
          .div(titulo="Procesamiento y análisis")
            p Aplicación de herramientas analíticas para identificar patrones, tendencias y relaciones.
    
          .div(titulo="Visualización de datos")
            p Presentación de la información en dashboards, informes o gráficos interactivos.

          .div(titulo="Toma de decisiones")
            p Uso de la información obtenida para respaldar decisiones estratégicas, tácticas y operativas.


    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/23a.png", alt="").mb-4.mb-lg-0


    h2 Herramientas clave de BI
    
    
    p(data-aos="fade-left").mb-4 La implementación de estos procesos requiere herramientas especializadas que permitan gestionar grandes volúmenes de datos y generar valor a partir de ellos. Algunas de las más destacadas son:


    .bg-full-width.bg-color-12
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/23.png', alt='')
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/24.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Power BI
                p.text-center De Microsoft; permite crear informes interactivos y se integra con el ecosistema Office.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/25.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tableau
                p.text-center Reconocida por su facilidad de uso y potentes capacidades de visualización interactiva.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/26.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 QlikView
                p.text-center Ofrece análisis en tiempo real y una interfaz intuitiva para la exploración de datos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 SAP BusinessObjects
                p.text-center Suite robusta para análisis, generación de informes y gestión del rendimiento empresarial.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/28.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pentaho
                p.text-center Plataforma #[em open source] que integra análisis, minería de datos e informes.

    .bg-full-width.bg-color-8
      .px-4.px-md-5.pt-4


        h2 Aplicación práctica en el contexto empresarial

        .row.mb-5.align-items-center
          .col-lg-8
            p(data-aos="fade-left") Por ejemplo, una empresa del sector #[em retail] puede implementar soluciones de BI para optimizar su cadena de suministro. Esto le permite:

            .bg-color-2.p-4(data-aos="fade-left").mb-4
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Monitorear en tiempo real] los niveles de inventario en diversas tiendas.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Analizar patrones de compra] para prever la demanda.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Identificar proveedores más eficientes] en tiempos y costos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Visualizar el desempeño de ventas] por región, producto o periodo.
              
            p(data-aos="fade-left").mb-4 Este enfoque basado en datos permite #[b reducir costos, tomar decisiones informadas y mejorar la experiencia del cliente].
        
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/29.png", data-aos="zoom-in")
        
        h2(data-aos="flip-up").mb-4 Desarrollo de habilidades blandas

        p(data-aos="fade-left").mb-4 El aprovechamiento efectivo de BI no solo requiere competencias técnicas, sino también habilidades interpersonales esenciales para el trabajo en entornos empresariales dinámicos:

        div.row.justify-content-center.align-items-stretch.mb-0
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/30.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-3.text-center Pensamiento crítico
              p.mb-0.text-center Evaluar la calidad y relevancia de los datos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/31.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-3.text-center Comunicación efectiva
              p.mb-0.text-center Presentar hallazgos de manera clara y persuasiva.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/32.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-3.text-center Colaboración
              p.mb-0.text-center Participar activamente en equipos multidisciplinarios.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/33.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-3.text-center Adaptabilidad
              p.mb-0.text-center Afrontar con flexibilidad los cambios tecnológicos y metodológicos.



    

        

          
    
        
        
    

    


</template>
