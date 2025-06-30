<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Infraestructura de TI y tecnologías emergentes'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 En el escenario corporativo contemporáneo, marcado por la acelerada evolución tecnológica, la infraestructura de tecnología de la información (TI) se ha establecido como un elemento indispensable para la competitividad y la eficiencia de la organización. Esta infraestructura comprende componentes tanto físicos como virtuales, tales como servidores, redes, software y servicios en la nube, los cuales permiten a las empresas operar de manera eficaz y adaptarse a las exigencias de mercado. 
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/icono.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La implementación de tecnologías emergentes como la inteligencia artificial, el Internet de las Cosas (IoT) y la computación en la nube, ha revolucionado la forma en que las organizaciones administran sus recursos y procesos. Estos avances tecnológicos promueven la automatización de tareas, el análisis predictivo y la toma de decisiones fundamentadas en datos, lo que conduce a una mayor agilidad y capacidad de respuesta ante las fluctuaciones del entorno. Adicionalmente, la instauración de una infraestructura de tecnología de la información sólida y adaptable otorga a las empresas la capacidad de mejorar la experiencia del cliente, optimizar la cadena de suministro y promover la innovación en productos y servicios.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")


    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-7

        p(data-aos="fade-left").mb-4 La virtualización y los servicios basados en la nube proporcionan escalabilidad y disminución de costos operativos, al mismo tiempo que aseguran la continuidad de la empresa y la protección de la información. En este escenario, resulta esencial que los administradores futuros comprendan la relevancia de la infraestructura de Tecnología de la Información y las tecnologías emergentes como instrumentos estratégicos para la consecución de los objetivos de la organización. 
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 La comprensión y administración correcta de estos recursos tecnológicos no solo fomentan la eficiencia operativa, sino que también brindan nuevas oportunidades de crecimiento y diferenciación en un mercado de alta competitividad.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto y componentes de la infraestructura tecnológica en las organizaciones


    .row.mb-5.align-items-center
      .col-lg-8
        p La infraestructura tecnológica en las entidades organizacionales alude al conjunto de recursos físicos y virtuales que facilitan el funcionamiento eficaz de los sistemas de información y comunicación.  Esta infraestructura resulta fundamental para respaldar las operaciones cotidianas, simplificar el proceso de toma de decisiones y fomentar la innovación en los procedimientos corporativos. Las piezas fundamentales de la infraestructura tecnológica comprenden: 
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.svg", alt="")


    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7
              h5 #[em Firmware]
              p Entienda los dispositivos físicos, tales como servidores, ordenadores, dispositivos de almacenamiento y equipos de red, que constituyen el fundamento de la infraestructura tecnológica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7
              h5 Programas de aplicación
              p Comprende los sistemas operativos, las aplicaciones y los programas que facilitan la realización de tareas específicas y la administración de recursos tecnológicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 Redes
              p Incluye la conectividad entre los dispositivos, lo que facilita la comunicación y el intercambio de información tanto dentro como fuera de la organización.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-4.png")
            .col-lg-7
              h5 Establecimientos de datos
              p Se trata de instalaciones que alojan sistemas de computación y componentes relacionados, tales como sistemas de almacenamiento y telecomunicaciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-4.png")
            .col-lg-7
              h5 Aplicaciones en la nube
              p Proporcionan acceso a recursos informáticos de manera remota, proporcionando flexibilidad y escalabilidad en la administración de la infraestructura tecnológica.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La correcta administración de estos elementos es esencial para asegurar la seguridad, disponibilidad y eficiencia de los sistemas de información. Adicionalmente, una infraestructura tecnológica meticulosamente diseñada y mantenida aporta a la competitividad de la organización en un ambiente empresarial en constante evolución hacia la digitalización.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Tecnologías emergentes y su impacto en la competitividad empresarial

    
    p.mb-4 A continuación, se presenta una mirada al impacto de las tecnologías emergentes en la transformación y competitividad de las organizaciones.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9lI7qpD3v8g?si=Y1EDjWRcT6hLiPUf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Ejemplo práctico TextilAndina S.A.S.
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Ejemplo práctico TextilAndina S.A.S., donde se aborda un caso simulado de transformación digital en una pyme del sector textil en Colombia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplo práctico TextilAndina S.A.S
    

    h2 Modelos de integración tecnológica en los sistemas de información gerencial

    .row.mb-5
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La incorporación de tecnologías en los sistemas de información gerencial (SIG) es fundamental para fortalecer los procesos operativos y respaldar decisiones estratégicas dentro de las organizaciones. Para facilitar esta integración, se han desarrollado diversos modelos adaptables a las particularidades estructurales y funcionales de cada entidad.
    
        p(data-aos="fade-left") A continuación, se presenta una comparativa de los principales modelos de integración tecnológica en los SIG:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="<em>Point-to-Point</em> (P2P)")
            p Establece conexiones directas entre sistemas específicos. Su implementación es sencilla, pero se vuelve compleja y poco escalable con múltiples sistemas (AppMaster, 2023).
    
          .div(titulo="<em>Hub-and-Spoke</em>")
            p Utiliza un sistema central (hub) que actúa como intermediario entre sistemas periféricos (spokes). Reduce la complejidad y facilita la gestión centralizada (AppMaster, 2023).
    
          .div(titulo="<em>Enterprise Service Bus</em> (ESB)")
            p Proporciona una arquitectura escalable, conectando múltiples aplicaciones a través de un bus de servicios. Ideal para entornos que exigen integración flexible y consistente (AppMaster, 2023).
    
          .div(titulo="Arquitectura orientada a servicios (SOA)")
            p Favorece la interoperabilidad mediante servicios independientes que se comunican a través de interfaces estandarizadas. Promueve la reutilización de componentes (Jitterbit, 2023).

          .div(titulo="Integración en la nube (iPaaS)")
            p Basada en plataformas de integración como servicio (Integration Platform as a Service). Permite escalar fácilmente, reducir costos de infraestructura y garantizar accesibilidad remota (Alumio, 2024).
    
    
    p La elección del modelo más adecuado depende de factores como:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/icono-1.svg", style="max-width: 80px").mx-auto
            .col-lg
              p.mb-0 La complejidad de los sistemas existentes
    
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/icono-2.svg", style="max-width: 80px").mx-auto
            .col-lg
              p.mb-0 Los recursos tecnológicos y humanos disponibles
    
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/icono-2.svg", style="max-width: 80px").mx-auto
            .col-lg
              p.mb-0 Las metas estratégicas de la organización
    
    
    
    
    


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.35381/gep.v8i9.52" target="_blank" rel="noopener noreferrer") De-Armas, L. M., & Chirino-García, R. C. (2023). Sistema de información gerencial como estrategia de éxito organizacional en las empresas del sector salud. Gestio et Productio, 5(9). 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.innovaciondigital360.com/software/integracion-de-aplicaciones-empresariales-que-significa-y-los-retos-para-las-empresas/" target="_blank" rel="noopener noreferrer") InnovaciónDigital360. (2023). Integración de aplicaciones empresariales: qué significa y los retos para las empresas. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.creative-tim.com/blog/educational-tech/top-enterprise-application-examples-for-every-organization/ " target="_blank" rel="noopener noreferrer") Creative Tim. (2023). Top 10 Enterprise Application Examples For Every Organization. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://axial-erp.co/estudios-de-caso-implementaciones-exitosas-de-erp-y-lecciones-aprendidas/" target="_blank" rel="noopener noreferrer") Axial ERP. (s.f.). Estudios de Caso: Implementaciones exitosas de ERP y lecciones aprendidas.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.oracle.com/mx/erp/what-is-erp/erp-implementation-case-study/" target="_blank" rel="noopener noreferrer") Oracle México. (2023). 3 casos prácticos de implementación de sistemas de ERP. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ticnus.com/noticias/erp-y-crm/casos-de-exito-en-la-implementacion-de-erp-mejora-la-eficiencia-empresarial-y-aumenta-la-rentabilidad/ " target="_blank" rel="noopener noreferrer") TICNUS. (2024). Casos de Éxito en la Implementación de ERP: Mejora la Eficiencia Empresarial y Aumenta la Rentabilidad. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Alephoo" target="_blank" rel="noopener noreferrer") Wikipedia. (2025). Alephoo. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elpais.com/economia/horizonte-4-0/2024-12-05/gigantes-a-hombros-de-gigantes.html" target="_blank" rel="noopener noreferrer") El País. (2024). Gigantes a hombros de gigantes.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.incotec.es/blog/como-gestionar-innovacion-empresarial/" target="_blank" rel="noopener noreferrer") Incotec. (2023). Cómo gestionar la innovación empresarial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=0lbsqFeJTms" target="_blank" rel="noopener noreferrer") Ministerio TIC. (2021, 3 de agosto). Plan estratégico de tecnologías de la información-Fase 2. Ministerio TIC Colombia [Vídeo] YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
