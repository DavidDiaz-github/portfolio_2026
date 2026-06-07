import React from 'react';
import './Project.scss';
import { legacyProjects } from '../../data/legacyProjects';

export default function Project() {
    return (
        <div className='project'>
            <h1 className='project__title'>Proyectos</h1>
            
            <div className='project__grid'>
                {legacyProjects.map((item) => <article className='project__card' key={item.title}><div className="dtl27">
                    <img src={item.img} alt={item.title} className='project__image' />
                    <div className="dtl">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.url} target='_blank' rel="noopener noreferrer">Ver proyecto</a>
                        
                    </div>
                    <div className='min'>
                        <h3 >{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.url} target='_blank' rel="noopener noreferrer">Ver proyecto</a>
                    </div>
                </div>
                </article>)}
            </div>
        </div>
    )
}
