import React from 'react';
import { Button } from 'antd';

import imageProfile from '../../assets/jpg/profile.JPG';
import cvFile from '../../assets/pdf/David_Curriculum_2026.pdf';
import { skills } from '../../data/skills';

import './Profile.scss';
export default function Profile() {
    const marqueeSkills = [...skills, ...skills];

    return (
        <div className='profile'>
            <img src={imageProfile} alt='Foto de perfil' className='foto' />
            <h2  className='title'>David Díaz Fueyo</h2>
            <h2>Desarrollador Full Stack JavaScript</h2>
            <p>Desarrollador Full Stack JavaScript con experiencia en frontend y backend, trabajando con React, Vue.js, APIs REST, SQL y Spring Boot. He participado en el desarrollo y mantenimiento de aplicaciones internas en entornos corporativos, además de scripts de automatización, despliegues en Windows y Linux y soporte técnico a clientes.</p>
            <p>Mi etapa anterior en MERN, React y proyectos personales me dio una base sólida en frontend, integración con APIs y publicación de aplicaciones, que ahora complemento con una visión más orientada a producto, integración y entornos productivos.</p>
            <Button href={cvFile} download='David_Diaz_Fueyo_CV.pdf' className='btn-cv' >Ver curriculum</Button>
            <div className='profile__container'>
                <h1 className='profile__skills-title'>SKILL</h1>
                <div className='profile__skills-marquee'>
                    <div className='profile__skills-track'>
                    {marqueeSkills.map((item, index) => (
                        <div className='profile__skill' key={`${item.title}-${index}`}>
                            <div>
                                <img src={item.png ? item.png : item.img} alt={item.title} />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
