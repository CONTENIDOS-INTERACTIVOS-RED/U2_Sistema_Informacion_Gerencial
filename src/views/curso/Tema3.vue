<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Seguridad de la información y normativas vigentes'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.overflow-hidden

    .row.mb-4.align-items-center
      .col-lg-8
        .bg-color-3.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En un entorno empresarial altamente digitalizado y globalizado, la seguridad de la información se ha convertido en un elemento esencial para las organizaciones. Proteger la confidencialidad, integridad y disponibilidad de los activos informativos no solo garantiza la continuidad operativa, sino que también refuerza la confianza de clientes y socios comerciales.
    
        h2 Sistemas de gestión de seguridad de la información (SGSI)
    
        p(data-aos="fade-left") Para gestionar los riesgos asociados a la información, las organizaciones adoptan Sistemas de Gestión de Seguridad de la Información (SGSI) basados en normas internacionales. Entre las más relevantes se encuentran:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")


    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 ISO/IEC 27001
              p.mb-0 Establece políticas, procedimientos y controles para identificar, evaluar y gestionar riesgos.
    
      .col-lg-6
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 ISO/IEC 27701
              p.mb-0 Extiende la 27001 para incorporar la gestión de la Personally Identifiable Information (PII).
    
    p.mb-4 Estos marcos normativos fomentan una #[b cultura de seguridad organizacional], facilitando el cumplimiento de normativas de protección de datos y demostrando compromiso con la privacidad.


    h2(data-aos="flip-up").mb-4 Normativas en América Latina

    .bg-full-width.bg-color-8
      .px-4.px-md-5.py-4

        .row.mb-4
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left").mb-4 En la región latinoamericana, varios países han desarrollado marcos normativos para fortalecer la seguridad de la información. Por ejemplo, en Ecuador se han implementado regulaciones que abordan:
        
            .bg-color-2.p-4(data-aos="fade-left").mb-4
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | La #[b gestión de riesgos].
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | La #[b planificación de la seguridad].
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | La #[b evaluación de amenazas].

            p(data-aos="fade-left").mb-4 Estas iniciativas buscan optimizar el entorno laboral y proteger la información crítica en todos los niveles organizativos.

        h2(data-aos="flip-up").mb-4 Importancia para los futuros profesionales

        p(data-aos="fade-left").mb-4 Comprender la seguridad de la información y las normativas vigentes es crucial para los futuros administradores. Esta comprensión les permite:

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/icono-1.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Tomar decisiones informadas
        
          .col-lg-4
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/icono-2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Implementar buenas prácticas
        
          .col-lg-4
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/icono-2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Contribuir a la resiliencia organizacional

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Principios básicos de ciberseguridad en entornos empresariales

    p(data-aos="fade-left").mb-4 Ante la creciente digitalización y dependencia de las tecnologías de la información, la ciberseguridad se convierte en un pilar estratégico para proteger los activos digitales y garantizar la continuidad del negocio. Los principios fundamentales: Confidencialidad, Integridad y Disponibilidad (CIA) son: 

    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Confidencialidad
                p.mb-0 Garantiza el acceso solo a personas autorizadas, protegiendo contra divulgación indebida.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Integridad
                p.mb-0 Asegura que la información sea precisa y no sufra alteraciones no autorizadas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Disponibilidad
                p.mb-0 Los datos y sistemas deben estar accesibles cuando se necesiten, sin interrupciones.


        .row.mb-5
          .col-lg-8
            p(data-aos="fade-left").mb-4 Estos principios constituyen la base de cualquier sistema de seguridad robusto. Otras prácticas esenciales de ciberseguridad son: 

            .bg-color-white.p-4(data-aos="fade-left")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Autenticación y control de accesos]: Verificar la identidad de los usuarios y establecer permisos apropiados evita accesos no autorizados.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Concienciación y formación del personal]: Capacitar a los empleados reduce riesgos humanos, como caer en phishing o usar contraseñas débiles.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Gestión de riesgos y planes de contingencia]: Identificar amenazas y contar con planes de recuperación minimiza el impacto de incidentes.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Actualización y mantenimiento de sistemas]: Aplicar parches de seguridad y realizar mantenimiento periódico protege contra vulnerabilidades conocidas.
              

        
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")


        h2(data-aos="flip-up").mb-4 Ejemplo práctico: Ciberseguridad en una pyme

        p(data-aos="fade-left").mb-4 Una pequeña empresa del sector retail detecta vulnerabilidades en sus sistemas y decide actuar:

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-3
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Implementa políticas de control de accesos
        
          .col-lg-3
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Capacita a su personal en buenas prácticas
          
          .col-lg-3
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Establece un plan de respaldo de datos
        
          .col-lg-3
            .bg-color-1.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Actualiza regularmente sus sistemas y software

    p(data-aos="fade-left").mb-4 Como resultado, reduce significativamente los incidentes de seguridad y aumenta la confianza de sus clientes.

    .titulo-figura.mb-2
      h5 Tabla 3. 
      span Similitudes y diferencias entre principios de ciberseguridad

    .tabla-a.color-acento-contenido.mb-5#Tabla3
      table
        thead
          tr
            th.bg-color-tabla.text-white Elemento Comparado
            th.bg-color-tabla.text-white Similitudes
            th.bg-color-tabla.text-white Diferencias
        tbody
          tr
            td Confidencialidad vs. Integridad
            td Ambos protegen la información de accesos o cambios no autorizados.
            td La confidencialidad se enfoca en quién puede ver la información, mientras que la integridad se enfoca en que los datos no se alteren.
          tr
            td Disponibilidad vs. Confidencialidad
            td Ambos buscan proteger los activos de información dentro de la empresa.
            td La disponibilidad garantiza el acceso a la información cuando se necesita; la confidencialidad limita ese acceso a usuarios autorizados.
          tr
            td Autenticación vs. Control de Accesos
            td Ambos procesos están diseñados para proteger la entrada a los sistemas.
            td La autenticación verifica la identidad; el control de accesos define qué puede hacer el usuario autenticado.

    h2(data-aos="flip-up").mb-4 Ejemplo práctico

    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left").mb-4 Una empresa de servicios financieros detecta intentos frecuentes de acceso no autorizado a su plataforma web. Decide aplicar principios básicos de ciberseguridad para fortalecer su protección. 
    
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 Primero, implementa autenticación multifactor (MFA) para garantizar la identidad de los usuarios. Luego, revisa sus políticas de control de acceso y limita los permisos de los usuarios a lo estrictamente necesario. Finalmente, establece respaldos automáticos y asegura la disponibilidad de los servicios ante posibles incidentes. Gracias a estas acciones, la empresa logra reducir los intentos de intrusión y mejora la confianza de sus clientes en la plataforma digital.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Identificación de amenazas y vulnerabilidades tecnológicas

    
    .row.mb-5.align-items-center
      .col-lg-8
        p(data-aos="fade-left").mb-5 En el entorno empresarial actual, caracterizado por una creciente digitalización y dependencia de las tecnologías de la información, la identificación de amenazas y vulnerabilidades tecnológicas se ha convertido en una tarea esencial para garantizar la seguridad y continuidad de las operaciones. Las amenazas representan eventos potenciales que pueden comprometer la integridad, confidencialidad o disponibilidad de los activos de información, mientras que las vulnerabilidades son debilidades inherentes en los sistemas que pueden ser explotadas por dichas amenazas.

        h2 Tipos comunes de amenazas y vulnerabilidades

        p(data-aos="fade-left").mb-4 Las amenazas pueden clasificarse en diversas categorías, entre las que se incluyen:

    
        .bg-color-1.p-4(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[b Malware]: programas maliciosos diseñados para dañar o acceder sin autorización a sistemas informáticos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[b Phishing]: técnicas de ingeniería social que buscan engañar a los usuarios para obtener información confidencial.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[b Ataques de denegación de servicio (DDoS)]: intentos de hacer que un servicio en línea no esté disponible al sobrecargarlo con tráfico.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Por otro lado, las vulnerabilidades pueden surgir debido a:
    
        .bg-color-6.p-4.py-lg-5(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[b Software desactualizado]: la falta de actualizaciones puede dejar sistemas expuestos a exploits conocidos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[b Configuraciones incorrectas]: ajustes inapropiados que permiten accesos no autorizados.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[b Falta de capacitación del personal]: el desconocimiento de buenas prácticas de seguridad puede facilitar ataques exitosos.

    .row.mb-5
      .col-lg-8
        h2 Importancia de la identificación proactiva

        p(data-aos="fade-left").mb-5 La identificación proactiva de amenazas y vulnerabilidades permite a las organizaciones anticiparse a posibles incidentes de seguridad, minimizando riesgos y protegiendo sus activos críticos. Implementar evaluaciones periódicas y utilizar herramientas de análisis de vulnerabilidades son prácticas recomendadas para mantener una postura de seguridad robusta.

        h2 Ejemplo práctico: Evaluación de seguridad en una #[em pyme]
    
        p(data-aos="fade-left") Una pequeña empresa del sector de servicios decide llevar a cabo una evaluación de seguridad tras detectar actividades inusuales en su red. Mediante el uso de herramientas de escaneo de vulnerabilidades, identifica que uno de sus servidores utiliza una versión obsoleta de un sistema operativo, lo que representa una vulnerabilidad crítica. 
    

        .bg-color-3.p-4.py-lg-5
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, se detecta que varios empleados han sido víctimas de correos electrónicos de #[em phishing]. Como respuesta, la empresa actualiza sus sistemas, implementa autenticación multifactor y realiza sesiones de capacitación en ciberseguridad para su personal.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
    

    .bg-full-width.bg-color-9.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/19.png', alt='')
    
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Evaluación de riesgos tecnológicos en la empresa IntegraSoft S.A.S.
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Evaluación de riesgos tecnológicos en la empresa IntegraSoft S.A.S., donde se aborda el análisis de vulnerabilidades tecnológicas dentro de una empresa colombiana dedicada al desarrollo de software financiero. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación de riesgos tecnológicos en la empresa IntegraSoft S.A.S.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Normativas y buenas prácticas en la protección de la infraestructura de TI

    .row.mb-5
      .col-lg-8
        .bg-color-2.px-4.py-5(data-aos="fade-left").mb-5
          p.mb-0 La infraestructura de Tecnologías de la Información (TI) constituye el núcleo operativo de las organizaciones modernas, facilitando la gestión de datos, la comunicación y la ejecución de procesos críticos. Su protección es esencial para garantizar la continuidad del negocio, la integridad de la información y la confianza de los #[em stakeholders].
        
        h2 Normativas clave en la protección de la infraestructura de TI

        p Existen diversas normativas internacionales que establecen directrices para salvaguardar la infraestructura de TI:
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in").mb-4.mb-lg-0

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="ISO/IEC 27001")
            p Establece los requisitos para implementar un Sistema de Gestión de Seguridad de la Información (SGSI), promoviendo un enfoque basado en riesgos para proteger la confidencialidad, integridad y disponibilidad de la información. (ISO/IEC 27001, 2022)

          .div(titulo="ISO/IEC 27002")
            p Proporciona un conjunto de controles y buenas prácticas para la gestión de la seguridad de la información, complementando la norma ISO/IEC 27001. (ISO/IEC 27002, 2022)
    
          .div(titulo="ISO/IEC 27033")
            p Ofrece directrices específicas para la seguridad de redes, abordando la gestión de riesgos, el diseño de arquitecturas seguras y la implementación de controles técnicos. (ISO/IEC 27033, 2015)
    
    .bg-full-width.bg-color-9.mb-lg-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Normativas y buenas prácticas en la protección de la infraestructura de TI
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Normativas y buenas prácticas en la protección de la infraestructura de TI, donde se aborda la importancia de proteger los sistemas tecnológicos dentro de las organizaciones.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Normativas y buenas prácticas en la protección de la infraestructura de TI
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/22.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
    
              
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            //- p.d-flex.my-4
            //-   img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            //-   a(href="https://ve.scielo.org/scielo.php?pid=S2739-00632024000200013&script=sci_arttext" target="_blank" rel="noopener noreferrer") Loor Macías, M. G., & Mendoza Cevallos, M. G. (2024). Perspectivas sobre seguridad, salud ocupacional de los trabajadores y el mejoramiento del medio ambiente laboral en el periodo 2019-2023. Revista Científica de Salud Ocupacional, 2(2).

            //- p.d-flex.my-4
            //-   img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            //-   a(href="https://www.redalyc.org/journal/6378/637869113010/htm/" target="_blank" rel="noopener noreferrer") Redalyc. (2024). Modelo para la gestión de la seguridad de la información basado en la norma ISO/IEC 27001. Revista de Tecnología e Innovación, 10(3).

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dspace.ups.edu.ec/handle/123456789/20966" target="_blank" rel="noopener noreferrer") Miranda Jiménez, J. N. (2021). Mapeo sistemático de metodologías de Seguridad de la Información para el control de la gestión de riesgos informáticos (Bachelor's thesis).



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.uleam.edu.ec/index.php/business_science/article/view/221" target="_blank" rel="noopener noreferrer") Zambrano, K. B. Á., Vidal, W. E. B., & Vera, R. R. T. (2022). Vulnerabilidades en los sistemas informáticos owasp top 10: revisión bibliográfica: Vulnerabilities in computer systems owasp top 10: bibliographic review. Journal Business Science-ISSN: 2737-615X, 3(2), 1-8.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/ISO/IEC_27701" target="_blank" rel="noopener noreferrer") Wikipedia. (2023). ISO/IEC 27701.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://preyproject.com/es/blog/fundamentos-de-ciberseguridad" target="_blank" rel="noopener noreferrer") Prey Project. (2025). Principios de la ciberseguridad: la base para tu negocio.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://unirfp.unir.net/revista/ingenieria-y-tecnologia/principios-seguridad-informatica/" target="_blank" rel="noopener noreferrer") UNIR Formación Profesional. (2023). Los 4 principios de la seguridad informática y su implementación.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ambit-bierzo.com/blog/tipos-de-vulnerabilidades-y-amenazas-inform%C3%A1ticas" target="_blank" rel="noopener noreferrer") Ambit BST. (2020). Tipos de Vulnerabilidades y Amenazas informáticas.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ginzo.tech/analisis-amenazas-vulnerabilidades-informaticas/" target="_blank" rel="noopener noreferrer") Ginzo Tech. (2024). Análisis de Amenazas y Vulnerabilidades Informáticas.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=tZMmP8EiC4Q" target="_blank" rel="noopener noreferrer") Docentesposgrados UEES. (2021, 28 de agosto). Sistemas de información de salud – aspectos legales. [Vídeo] YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


</template>
<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes términos describe una debilidad que puede ser explotada por una amenaza?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Confidencialidad', esCorrecta: false },
              { id: 'b', texto: 'Integridad', esCorrecta: false },
              { id: 'c', texto: 'Disponibilidad', esCorrecta: false },
              { id: 'd', texto: 'Vulnerabilidad', esCorrecta: true },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué técnica convierte la información en un formato ilegible para protegerla?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Autenticación', esCorrecta: false },
              { id: 'b', texto: 'Encriptación', esCorrecta: true },
              { id: 'c', texto: 'Backup', esCorrecta: false },
              { id: 'd', texto: 'Análisis predictivo', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes es un software malicioso diseñado para dañar sistemas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Cortafuegos', esCorrecta: false },
              { id: 'b', texto: 'Big Data', esCorrecta: false },
              { id: 'c', texto: 'Malware', esCorrecta: true },
              { id: 'd', texto: 'Red', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué concepto se refiere a garantizar que los datos estén disponibles cuando se necesitan?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Autenticación', esCorrecta: false },
              { id: 'b', texto: 'Acceso', esCorrecta: false },
              { id: 'c', texto: 'Disponibilidad', esCorrecta: true },
              { id: 'd', texto: 'Normativa', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué término describe la práctica de hacer copias de seguridad de los datos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Phishing', esCorrecta: false },
              { id: 'b', texto: 'Backup', esCorrecta: true },
              { id: 'c', texto: 'Ciberseguridad', esCorrecta: false },
              { id: 'd', texto: 'Red', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
