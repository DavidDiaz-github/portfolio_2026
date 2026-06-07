import React from 'react';
import { Link } from 'react-router-dom';

import cvFile from '../../assets/pdf/David_Curriculum_2026.pdf';
import { legacyProjects } from '../../data/legacyProjects';
import './Evolution.scss';

const earlyMilestones = [
    {
        title: 'Formación y primeros proyectos',
        description:
            'Mi etapa inicial estuvo muy ligada a MERN, React, Node y proyectos personales. Ahí construí la base visual y técnica que me llevó a profundizar en desarrollo web.',
    },
    {
        title: 'Proyectos antiguos',
        description:
            'Aplicaciones como Movies-ddf, Clash Royale, Boat vs Submarine, Web Personal y el primer portfolio reflejan ese momento de aprendizaje y experimentación.',
    },
    {
        title: 'Lo que me aportó',
        description:
            'Esa etapa me dio soltura con frontend, APIs, despliegues y estructuras simples de producto, además de la costumbre de iterar y publicar rápido.',
    },
];

const currentMilestones = [
    {
        title: 'Full Stack JavaScript con backend Java',
        description:
            'En mi etapa actual trabajo con frontend en React y Vue.js, y backend con Java, Spring Boot, APIs REST y SQL, con una orientación mucho más corporativa.',
    },
    {
        title: 'Entorno productivo',
        description:
            'Tengo experiencia con validación previa, mantenimiento, despliegue, scripts de automatización, Tomcat, Linux y soporte técnico a clientes.',
    },
    {
        title: 'Enfoque actual',
        description:
            'Busco aportar una mezcla de backend sólido, integración de sistemas y capacidad de mantenimiento en entornos empresariales exigentes.',
    },
];

export default function Evolution() {
    return (
        <div className="evolution">
            <section className="evolution__hero">
                <span className="evolution__eyebrow">Trayectoria</span>
                <h1>De mis primeros pasos como junior a Full Stack JavaScript</h1>
                <p>
                    Mantengo visible la etapa junior para no perder identidad ni contexto, pero la combino con mi perfil
                    actual como Full Stack JavaScript con experiencia en backend Java, Spring Boot, APIs REST y trabajo en entornos corporativos.
                </p>
                <div className="evolution__actions">
                    <Link className="evolution__button" to="/profile">
                        Ver perfil actual
                    </Link>
                    <a className="evolution__button evolution__button--ghost" href={cvFile} download="David_Diaz_Fueyo_CV.pdf">
                        Descargar CV
                    </a>
                </div>
            </section>

            <section className="evolution__section">
                <h2>Primeros pasos</h2>
                <div className="evolution__grid">
                    {earlyMilestones.map((item) => (
                        <article className="evolution-card" key={item.title}>
                            <span className="evolution-card__badge">Junior</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="evolution__section evolution__section--accent">
                <h2>Etapa actual</h2>
                <div className="evolution__grid">
                    {currentMilestones.map((item) => (
                        <article className="evolution-card evolution-card--dark" key={item.title}>
                            <span className="evolution-card__badge evolution-card__badge--dark">Actual</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="evolution__section">
                <h2>Proyectos de la etapa junior</h2>
                <div className="evolution__project-grid">
                    {legacyProjects.map((item) => (
                        <article className="evolution-project" key={item.title}>
                            <img src={item.img} alt={item.title} />
                            <div className="evolution-project__body">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    Ver proyecto
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
