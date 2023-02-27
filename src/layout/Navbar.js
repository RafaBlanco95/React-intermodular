import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Calígula</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/students">Portal de Alumnos</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/teachers">Portal de Profesores</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/exams">Calendario de Exámenes</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/practices">Listado de Prácticas </Link>
              </li>
            </ul>
            <form class="d-flex">

              <Link class="btn btn-outline-success" to="/login">Inicio de Sesión</Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
