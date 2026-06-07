import mongo from '../assets/png/mongo.png';
import express from '../assets/png/express.png';
import react from '../assets/png/react.png';
import node from '../assets/png/node.png';
import bootstrap from '../assets/png/bootstrap.png';
import js from '../assets/png/js.png';
import python from '../assets/png/python.png';
import mysql from '../assets/png/mysql.png';
import html from '../assets/png/html.png';
import css from '../assets/png/css.png';
import sass from '../assets/png/sass.png';
import java from '../assets/svg/skill-java.svg';
import springBoot from '../assets/svg/skill-spring-boot.svg';
import vue from '../assets/svg/skill-vue.svg';
import vuex from '../assets/svg/skill-vuex.svg';
import angular from '../assets/svg/skill-angular.svg';
import javaee from '../assets/svg/skill-javaee.svg';
import hibernate from '../assets/svg/skill-hibernate.svg';
import git from '../assets/svg/skill-git.svg';
import postman from '../assets/svg/skill-postman.svg';
import jmeter from '../assets/svg/skill-jmeter.svg';
import linux from '../assets/svg/skill-linux.svg';
import tomcat from '../assets/svg/skill-tomcat.svg';
import h2 from '../assets/svg/skill-h2.svg';
import hooks from '../assets/svg/skill-hooks.svg';
import antDesign from '../assets/svg/skill-antdesign.svg';
import handlebars from '../assets/svg/skill-handlebars.svg';
import apis from '../assets/svg/skill-apis.svg';

export const skills = [
  {
    img: mongo,
    title: 'MongoDB',
    png: mongo,
    description:
      'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de codigo abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON(una especificacion similar a JSON) con un esquema dinamico, haciendo que la integracion de los datos en ciertas aplicaciones sea mas facil y rapida.'
  },
  {
    img: express,
    title: 'Express',
    png: express,
    description:
      'Express es una infraestructura de aplicaciones web Node.js minima y flexible que proporciona un conjunto solido de caracteristicas para las aplicaciones web y moviles.'
  },
  {
    img: react,
    title: 'React Js',
    png: react,
    description:
      'React es una biblioteca Javascript de codigo abierto disenada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola pagina. Es mantenido por Facebook y la comunidad de software libre.'
  },
  {
    img: node,
    title: 'Node.js',
    png: node,
    description:
      'Node.js es un entorno en tiempo de ejecucion multiplataforma, de codigo abierto, para la capa del servidor (pero no limitandose a ello) basado en el lenguaje de programacion JavaScript, asincrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.'
  },
  {
    img: hooks,
    png: hooks,
    title: 'Hooks',
    description:
      'Los Hooks son una nueva incorporacion en React 16.8. Te permiten usar estado y otras caracteristicas de React sin escribir una clase.'
  },
  {
    img: js,
    title: 'JavaScript',
    png: js,
    description:
      'JavaScript (abreviado comunmente JS) es un lenguaje de programacion interpretado, dialecto del estandar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, debilmente tipado y dinamico.'
  },
  {
    img: python,
    title: 'Python',
    png: python,
    description:
      'Python es un lenguaje de programacion interpretado cuya filosofia hace hincapie en la legibilidad de su codigo. Se trata de un lenguaje de programacion multiparadigma, ya que soporta orientacion a objetos, programacion imperativa y, en menor medida, programacion funcional. Es un lenguaje interpretado, dinamico y multiplataforma.'
  },
  {
    img: html,
    title: 'Html 5',
    png: html,
    description:
      'HTML 5 (HyperText Markup Language, version 5) es la quinta revision importante del lenguaje basico de la World Wide Web, HTML. HTML5 especifica dos variantes de sintaxis para HTML: una clasica, HTML (text/html), conocida como HTML5, y una variante XHTML conocida como sintaxis XHTML 5 que debera servirse con sintaxis XML (application/xhtml+xml).'
  },
  {
    img: css,
    title: 'CSS',
    png: css,
    description:
      'CSS son las siglas de Cascading Style Sheets (hojas de estilo en cascada). CSS es un lenguaje para la composicion y estructuracion de paginas web (HTML o XML).'
  },
  {
    img: sass,
    title: 'SASS',
    png: sass,
    description:
      'Sass es un metalenguaje de Hojas de Estilo en Cascada (CSS). Es un lenguaje de script que es traducido a CSS. SassScript es el lenguaje de script en si mismo.'
  },
  {
    img: bootstrap,
    title: 'Bootstrap',
    png: bootstrap,
    description:
      'Bootstrap es un framework front-end utilizado para desarrollar aplicaciones web y sitios mobile first.'
  },
  {
    img: java,
    png: java,
    title: 'Java',
    description:
      'Java es un lenguaje de programacion orientado a objetos, ampliamente utilizado en entornos empresariales por su robustez, portabilidad y ecosistema de herramientas.',
  },
  {
    img: springBoot,
    png: springBoot,
    title: 'Spring Boot',
    description:
      'Spring Boot simplifica la creacion de aplicaciones Java listas para produccion, con configuracion minima y un ecosistema muy extendido para APIs y microservicios.',
  },
  {
    img: vue,
    png: vue,
    title: 'Vue.js',
    description:
      'Vue.js es un framework progresivo de JavaScript para construir interfaces de usuario de forma sencilla, flexible y mantenible.',
  },
  {
    img: vuex,
    png: vuex,
    title: 'Vuex',
    description:
      'Vuex es la libreria de gestion centralizada de estado para aplicaciones Vue, util cuando la aplicacion crece y necesita compartir informacion entre componentes.',
  },
  {
    img: angular,
    png: angular,
    title: 'Angular 9',
    description:
      'Angular es un framework para aplicaciones web de gran escala, estructurado y orientado a proyectos con fuerte arquitectura de frontend.',
  },
  {
    img: javaee,
    png: javaee,
    title: 'Java EE',
    description:
      'Java EE agrupa especificaciones y APIs para desarrollar aplicaciones empresariales Java, especialmente en arquitecturas de servicios y backend corporativo.',
  },
  {
    img: hibernate,
    png: hibernate,
    title: 'Hibernate',
    description:
      'Hibernate es una solucion ORM que facilita el mapeo entre objetos Java y bases de datos relacionales, reduciendo trabajo repetitivo en persistencia.',
  },
  {
    img: git,
    png: git,
    title: 'Git',
    description:
      'Git es el sistema de control de versiones distribuido que permite gestionar ramas, historiales y trabajo colaborativo de forma fiable.',
  },
  {
    img: postman,
    png: postman,
    title: 'Postman',
    description:
      'Postman es una herramienta para probar, documentar y validar APIs REST de forma rapida durante desarrollo y mantenimiento.',
  },
  {
    img: jmeter,
    png: jmeter,
    title: 'JMeter',
    description:
      'JMeter permite realizar pruebas de carga y rendimiento sobre aplicaciones y APIs para comprobar su comportamiento bajo distintos niveles de uso.',
  },
  {
    img: linux,
    png: linux,
    title: 'Linux',
    description:
      'Linux es un sistema operativo ampliamente usado en servidores, despliegues y automatizacion, muy habitual en entornos profesionales.',
  },
  {
    img: tomcat,
    png: tomcat,
    title: 'Apache Tomcat',
    description:
      'Apache Tomcat es un contenedor web muy extendido para desplegar aplicaciones Java y gestionar entornos de ejecucion web.',
  },
  {
    img: h2,
    png: h2,
    title: 'H2',
    description:
      'H2 es una base de datos relacional ligera, muy util en entornos de desarrollo, pruebas y prototipado de aplicaciones Java.',
  },
  {
    img: antDesign,
    png: antDesign,
    title: 'Ant-design',
    description:
      'Un sistema de diseno para productos de nivel empresarial. Cree una experiencia laboral eficiente y agradable.'
  },
  {
    img: handlebars,
    png: handlebars,
    title: 'Handlebars',
    description:
      'Handlebars.js es un popular motor de plantillas que es potente, facil de usar y tiene una gran comunidad. Se basa en el lenguaje de plantillas de Moustache, pero lo mejora de varias formas importantes. Con Handlebars, puede separar la generacion de HTML del resto de su JavaScript y escribir codigo mas limpio.'
  },
  {
    img: mysql,
    title: 'MySql',
    png: mysql,
    description:
      'MySQL es un sistema de gestion de base de datos (SGBD) de codigo abierto. El SGBD MySQL pertenece actualmente a Oracle. Funciona con un modelo cliente-servidor.'
  },
  {
    img: apis,
    png: apis,
    title: 'API`s',
    description:
      'API es el acronimo utilizado para Application Programming Interface, o en espanol, Interfaz de Programacion de Aplicaciones. Basicamente es una interfaz que permite la comunicacion entre dos sistemas o plataformas diferentes, lo que permite agregar diversas funciones a sitios web y aplicaciones.'
  }
];
