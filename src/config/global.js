export default {
  global: {
    Name: 'Formulación de proyectos',
    Description:
      'Este componente describe y orienta al aprendiz en la identificación de necesidades del entorno desde su contexto profesional. Así mismo, fortalece habilidades para reconocer e identificar los elementos fundamentales para el desarrollo de proyectos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contexto formativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Proyecto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la formulación de proyectos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características de un proyecto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Relación entre el proyecto y el contexto profesional',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Pensamiento proyectual y formulación de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elementos fundamentales de un proyecto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Beneficios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Requerimientos de un proyecto',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipos de proyectos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Términos clave en la formulación de proyectos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mejores prácticas para la gestión de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diagramas de flujo en la formulación de proyectos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: ' Metodología para la formulación de proyectos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Errores frecuentes',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Buenas prácticas',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/12310040_CF1_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alcance',
      significado:
        'delimitación que establece los límites del proyecto, definiendo qué aspectos se incluyen y cuáles quedan por fuera de la propuesta.',
    },
    {
      termino: 'Ciclo de vida del proyecto',
      significado:
        'conjunto de fases por las que transita un proyecto desde su inicio hasta su cierre, incluyendo iniciación, planificación, ejecución, control y finalización.',
    },
    {
      termino: 'Contexto formativo',
      significado:
        'espacio académico en el que el aprendiz adquiere conocimientos, desarrolla habilidades y consolida competencias relacionadas con la formulación de proyectos, integrando teoría y práctica.',
    },
    {
      termino: 'Formulación de proyectos',
      significado:
        'proceso estructurado mediante el cual se identifican necesidades, se definen objetivos y se organizan los elementos fundamentales de una propuesta.',
    },
    {
      termino: 'Necesidad o problema',
      significado:
        'situación identificada en el entorno profesional que requiere intervención mediante una solución estructurada.',
    },
    {
      termino: 'Objetivo general',
      significado:
        'propósito central del proyecto que orienta todas las acciones y define el resultado principal que se espera alcanzar.',
    },
    {
      termino: 'Objetivos específicos',
      significado:
        'propósitos concretos que desagregan el objetivo general y permiten organizar progresivamente las acciones necesarias.',
    },
    {
      termino: 'Pensamiento proyectual',
      significado:
        'enfoque estructurado que permite analizar, organizar y articular ideas orientadas a la solución de una necesidad mediante un proyecto.',
    },
    {
      termino: 'Proyecto',
      significado:
        'conjunto organizado de acciones planificadas que buscan dar solución a una necesidad identificada en un contexto específico, con inicio y cierre definidos.',
    },
    {
      termino: 'Recursos',
      significado:
        'medios humanos, técnicos, materiales o financieros requeridos para desarrollar las actividades del proyecto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Callejas, L. C. (2020). Marco de referencia para la dirección de proyectos. Universidad Militar Nueva Granada. ',
      link:
        'http://virtual.umng.edu.co/distancia/ecosistema/odin/odin_desktop.php?path=Li4vb3Zhcy9pbmdlbmllcmlhX2luZm9ybWF0aWNhL2dlcmVuY2lhX2RlX3Byb3llY3Rvcy91bmlkYWRfMS8=#slide_1',
    },
    {
      referencia:
        'Malsam, W. (2025). Definición de proyecto: ¿Qué es un proyecto y cómo debe gestionarse? ProjectManager. ',
      link: 'https://www.projectmanager.com/es/definicion-de-proyecto',
    },
    {
      referencia:
        'Martins, J. (2025). Cómo redactar objetivos de un proyecto que sean eficaces. Asana. ',
      link: 'https://asana.com/es/resources/how-project-objectives',
    },
    {
      referencia:
        'Moya, D. P. (s. f.). Beneficios de la gestión de proyectos. Gestionar Fácil. ',
      link:
        'https://www.gestionar-facil.com/beneficios-de-la-gestion-de-proyectos/',
    },
    {
      referencia:
        'Proyectos A. (2025). ¿Cómo iniciar un proyecto y tener éxito? [Video]. YouTube. ',
      link: '',
    },
    {
      referencia:
        'Rosquez, A. (2026). ¿Qué es la gestión de proyectos? CEUPE - European Business School. ',
      link: 'https://www.ceupe.com.ve/blog/que-es-la-gestion-de-proyectos.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
