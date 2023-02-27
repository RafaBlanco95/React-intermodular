import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
    return (

        <div class="footer-basic bg-primary">
            <footer>
                <div class="social"><a href="https://www.linkedin.com/in/rafael-blanco-aranda-56676960/"><i class="fa-brands fa-linkedin"></i></a><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a><a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a><a href="https://es-es.facebook.com/"><i class="fa-brands fa-facebook"></i></a></div>
                <ul class="list-inline">
                    <li class="list-inline-item text-light"><Link to="/">Inicio</Link></li>
                    <li class="list-inline-item text-light"><Link to="/students">Portal de Alumnos</Link></li>
                    <li class="list-inline-item text-light"><Link to="/teachers">Portal de Profesores</Link></li>
                    <li class="list-inline-item text-light"><Link to="/exams">Calendario de Exámenes</Link></li>
                    <li class="list-inline-item text-light"><Link to="/practices">Listado de Prácticas</Link></li>
                </ul>
            </footer>
            <p class="copyright text-black bg-light"> <i class="fa-brands fa-react"></i> <b> Calígula © 2023</b><i class="fa-brands fa-react"></i></p>
        </div>

    )
}
