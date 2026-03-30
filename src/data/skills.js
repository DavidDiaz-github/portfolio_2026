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
import hooks from '../assets/svg/skill-hooks.svg';
import antDesign from '../assets/svg/skill-antdesign.svg';
import handlebars from '../assets/svg/skill-handlebars.svg';
import apis from '../assets/svg/skill-apis.svg';

export const skills = [
  {
    img: 'https://b.marfeelcache.com/statics/i/ps/www.muylinux.com/wp-content/uploads/2019/01/mongodb.png?width=1200&enable=upscale',
    title: 'MongoDB',
    png: mongo,
    description:
      'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de codigo abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON(una especificacion similar a JSON) con un esquema dinamico, haciendo que la integracion de los datos en ciertas aplicaciones sea mas facil y rapida.'
  },
  {
    img: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Lgyno4NC7rhy49BAEjN%2F-Lh14lb3LH4C886qWxYA%2F-Lh1DZeIUQennGd9RiHe%2FScreen%20Shot%202019-06-10%20at%2011.30.20%20AM.png?alt=media&token=784b79f6-81b5-4308-97a2-155afb9d496f',
    title: 'Express',
    png: express,
    description:
      'Express es una infraestructura de aplicaciones web Node.js minima y flexible que proporciona un conjunto solido de caracteristicas para las aplicaciones web y moviles.'
  },
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png',
    title: 'React Js',
    png: react,
    description:
      'React es una biblioteca Javascript de codigo abierto disenada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola pagina. Es mantenido por Facebook y la comunidad de software libre.'
  },
  {
    img: 'https://www.silversites.es/wp-content/uploads/2019/06/node-js.jpg',
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
    img: 'https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg',
    title: 'JavaScript',
    png: js,
    description:
      'JavaScript (abreviado comunmente JS) es un lenguaje de programacion interpretado, dialecto del estandar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, debilmente tipado y dinamico.'
  },
  {
    img: 'https://i.blogs.es/46244e/python/1366_521.jpg',
    title: 'Python',
    png: python,
    description:
      'Python es un lenguaje de programacion interpretado cuya filosofia hace hincapie en la legibilidad de su codigo. Se trata de un lenguaje de programacion multiparadigma, ya que soporta orientacion a objetos, programacion imperativa y, en menor medida, programacion funcional. Es un lenguaje interpretado, dinamico y multiplataforma.'
  },
  {
    img: 'https://disenowebakus.net/imagenes/articulos/html5.jpg',
    title: 'Html 5',
    png: html,
    description:
      'HTML 5 (HyperText Markup Language, version 5) es la quinta revision importante del lenguaje basico de la World Wide Web, HTML. HTML5 especifica dos variantes de sintaxis para HTML: una clasica, HTML (text/html), conocida como HTML5, y una variante XHTML conocida como sintaxis XHTML 5 que debera servirse con sintaxis XML (application/xhtml+xml).'
  },
  {
    img: 'https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png',
    title: 'CSS',
    png: css,
    description:
      'CSS son las siglas de Cascading Style Sheets (hojas de estilo en cascada). CSS es un lenguaje para la composicion y estructuracion de paginas web (HTML o XML).'
  },
  {
    img: 'https://el.javier.pro/wp-content/uploads/2016/10/sass-logo-wall.jpg',
    title: 'SASS',
    png: sass,
    description:
      'Sass es un metalenguaje de Hojas de Estilo en Cascada (CSS). Es un lenguaje de script que es traducido a CSS. SassScript es el lenguaje de script en si mismo.'
  },
  {
    img: 'https://serv3.raiolanetworks.es/blog/wp-content/uploads/bootstrap-social-share.png',
    title: 'Bootstrap',
    png: bootstrap,
    description:
      'Bootstrap es un framework front-end utilizado para desarrollar aplicaciones web y sitios mobile first.'
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
    img: 'https://blog.trescomatres.com/wp-content/uploads/2017/03/banner-mysql.jpg',
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
