import React from 'react';
import { Button } from 'antd';

import imageProfile from '../../assets/jpg/profile.JPG';
import cvFile from '../../assets/pdf/cv-full-stack.pdf';
import { skills } from '../../data/skills';

import './Profile.scss';
export default function Profile() {
    const marqueeSkills = [...skills, ...skills];

    return (
        <div className='profile'>
            <img src={imageProfile} alt='Foto de perfil' className='foto' />
            <h2  className='title'>David Díaz Fueyo</h2>
            <h2>Programador Web</h2>
            <p>Soy Junior Web Developer Full Stack MERN, graduado en Ironhack. Hace un tiempo quise dar un giro a mi vida profesional y me adentré en el mundo de la programación, que siempre me llamó la atención. Comencé estudiando un curso de Python y me encantó, lo que me indujo a profundizar en la adquisición de conocimientos y habilidades con el objetivo de conseguir una formación más completa, especialmente en el ámbito de la programación web, para poder dedicarme profesionalmente a este mundo tan apasionante y lleno de posibilidades. Me considero una persona proactiva, que no teme enfrentarse a nuevos retos, y con capacidad para formar parte de equipos de trabajo. La responsabilidad y el compromiso son características inherentes a mi persona, al igual que el interés en alcanzar los objetivos que se me marquen. Estoy en busqueda activa de empleo, deseando involucrarme en proyectos que me hagan crecer tanto personal como profesionalmente.</p>
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
