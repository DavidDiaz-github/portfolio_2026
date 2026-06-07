import React from 'react';
import { DownloadOutlined, FileTextOutlined } from '@ant-design/icons';

import cvFile from '../../assets/pdf/David_Curriculum_2026.pdf';
import './Download.scss';

export default function Download() {
    return (
        <div className="download">
            <section className="download__hero">
                <span className="download__eyebrow">
                    <FileTextOutlined /> Curriculum
                </span>
                <h1>Descarga mi CV actualizado</h1>
                <p>
                    Aquí tienes la versión más reciente de mi curriculum, con mi perfil actual como Full Stack JavaScript
                    y mi experiencia en backend Java, Spring Boot, APIs REST y entornos corporativos.
                </p>
                <a className="download__button" href={cvFile} download="David_Curriculum_2026.pdf">
                    <DownloadOutlined />
                    Descargar CV
                </a>
            </section>

            <section className="download__notes">
                <article className="download-card">
                    <h2>Qué encontrarás</h2>
                    <p>Resumen profesional, experiencia, competencias técnicas, formación y datos de contacto actualizados.</p>
                </article>
                <article className="download-card">
                    <h2>Formato</h2>
                    <p>PDF listo para compartir en procesos de selección, entrevistas o envío directo por correo.</p>
                </article>
                <article className="download-card">
                    <h2>Actualizado</h2>
                    <p>La versión enlazada es la misma que se usa desde `Profile` y `Evolution`.</p>
                </article>
            </section>
        </div>
    );
}
