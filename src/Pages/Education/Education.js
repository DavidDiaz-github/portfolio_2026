import React from 'react';

import './Education.scss';

const studies = [
    {
        title: 'WEB DEVELOPER Full-Stack MERN.',
        subtitle: 'Ironhack Madrid · 2020',
        description: 'Bootcamp de Programador web full stack MERN, trabajando con React, Express, Nodejs, MongoDB, JavaScript, Handlebars, Bootstrap, Bulma, Ajax y Jasmine para testing. Control de versiones con Git y GitHub. Integración de API`s de terceros. Código limpio, modular y eficiente. Metodologías ágiles.',
        image: 'https://pbs.twimg.com/profile_images/1286260896629751808/598SrDML_400x400.jpg',
    },
    {
        title: 'Sistemas microinformáticos y redes.',
        subtitle: 'MasterD · 2019',
        description: 'Curso en sistemas microinformaticos y redes. Certificado ECDL y certificado de Microsoft MTA. Arquitectura de ordenadores, microinformática, periféricos, seguridad y colaboración en línea.',
        image: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5b548c1501a50a0001464a37/0x0.png',
    },
    {
        title: 'Curso profesional de Python.',
        subtitle: 'AEPI · 2019',
        description: 'Conocimientos adquiridos: estructura y elementos del lenguaje, métodos principales del objeto string, tipos de datos complejos, funciones, módulos, paquetes, namespaces, programación orientada a objetos, SQL, Django y aplicaciones web.',
        image: 'https://lh3.googleusercontent.com/CaeEIGj1Zf72ku-7bHeF99Zw6mHwyaLf5nkzlFK3lKev2FHn5PF8odeEEFDPPWP5YQ',
    },
];

const certifications = [
    {
        title: 'WEB full Stack Bootcamp August 2020',
        company: 'Ironhack',
        date: 'Expedición: oct. 2020',
        credential: 'ID de la credencial 24878950',
        link: 'https://www.credential.net/52f48a4d-adab-417f-8031-a1c072d6671b#gs.mex9p3',
        badge: 'Certificación',
    },
    {
        title: 'Curso profesional de Python',
        company: 'Asociación española de programadores informáticos',
        date: 'Expedición: nov. 2019',
        badge: 'Certificación',
    },
    {
        title: 'Networking fundamentals MTA',
        company: 'Microsoft',
        date: 'Expedición: feb. 2019',
        credential: 'ID de la credencial Sp8c-uGHK',
        badge: 'Certificación',
    },
    {
        title: 'Sistemas microinformaticos y redes',
        company: 'MasterD',
        date: 'Expedición: feb. 2019',
        badge: 'Certificación',
    },
    {
        title: 'Certificacion ECDL sistemas microinformaticos y redes.',
        company: 'ECDL Spain',
        date: 'Expedición: nov. 2018',
        badge: 'Certificación',
    },
];

const courses = [
    {
        title: 'Web Personal MERN Full Stack: MongoDB, Express, React y Node',
        description: 'Desarrollo Full Stack, creando una web personal con el Stack MERN (MongoDB, Express, React y NodeJS) la ultima tecnología.',
        date: '11/2020',
        badge: 'Curso',
    },
    {
        title: 'React JS - Curso de introducción desde cero y primeros pasos',
        description: 'Aprende los fundamentos básicos de React desde cero y paso a paso con Víctor Robles. Instalación, Componentes, JSX y más.',
        date: '02/2020',
        badge: 'Curso',
    },
];

export default function Education() {
    return (
        <div className="education">
            <section className="education__section">
                <h2 className="education__title">Formación Académica</h2>

                <div className="education__study-grid">
                    {studies.map((item) => (
                        <article className="education-card education-card--study" key={item.title}>
                            <div className="education-card__content">
                                <span className="education-card__badge">Estudio</span>
                                <h3>{item.title}</h3>
                                <p className="education-card__meta">{item.subtitle}</p>
                                <p>{item.description}</p>
                            </div>
                            <div className="education-card__media">
                                <img src={item.image} alt={item.title} />
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="education__section education__section--accent">
                <h2 className="education__title education__title--light">Certificaciones</h2>

                <div className="education__grid">
                    {certifications.map((item) => (
                        <article className="education-card" key={item.title}>
                            <span className="education-card__badge">{item.badge}</span>
                            <h3>{item.title}</h3>
                            <p className="education-card__meta">{item.company}</p>
                            <p>{item.date}</p>
                            {item.credential && <p className="education-card__credential">{item.credential}</p>}
                            {item.link && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    Ver certificación
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <section className="education__section">
                <h2 className="education__title">Cursos</h2>

                <div className="education__grid">
                    {courses.map((item) => (
                        <article className="education-card" key={item.title}>
                            <span className="education-card__badge">{item.badge}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p className="education-card__meta">Fecha: {item.date}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
