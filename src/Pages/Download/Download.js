import React from 'react'
import cvFile from '../../assets/pdf/cv-full-stack.pdf';

export default function Download() {
    return (
        <div>
            <h1>Download.....</h1>
            <p>Si desea toda la informacion detallada y cree que mi perfil es valido para el puesto vacante pulse en el siguiente boton y descarge mi Curriculum. Gracias</p>
            <a href={cvFile} download='cv.DavidDiaz.pdf'>descargar</a>
        </div>
    )
}
