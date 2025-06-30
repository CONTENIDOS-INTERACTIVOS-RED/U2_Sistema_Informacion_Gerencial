<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La Unidad 2 del curso "Sistemas de Información Gerencial" profundiza en la infraestructura de tecnología de la información (TI) como pilar estratégico para la competitividad organizacional. Se abordan temas como hardware, software, servicios en la nube, bases de datos, inteligencia de negocios y ciberseguridad. Además, se exploran tecnologías emergentes como la inteligencia artificial, el Internet of Things y el Big Data, que transforman la forma en que las organizaciones operan, toman decisiones y responden a los cambios del entorno digital.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") El contenido se organiza en tres grandes temas: infraestructura tecnológica, gestión de datos e inteligencia de negocios, y seguridad de la información. Se explica cómo las organizaciones pueden integrar tecnología para optimizar procesos, garantizar la protección de los datos y generar ventajas competitivas mediante el uso estratégico de herramientas como sistemas de gestión de bases de datos, análisis predictivo y plataformas de inteligencia empresarial. Asimismo, se presentan casos prácticos aplicados al contexto colombiano que ilustran la transformación digital en pequeñas y medianas empresas.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Finalmente, se enfatiza la importancia de la ciberseguridad y el cumplimiento de normativas internacionales como ISO/IEC 27001, así como el desarrollo de una cultura organizacional orientada a la protección de la información. La unidad combina teoría, práctica y análisis de casos, promoviendo en el estudiante el pensamiento crítico, la capacidad de adaptación y habilidades blandas como la comunicación efectiva y el trabajo colaborativo.
</template>
