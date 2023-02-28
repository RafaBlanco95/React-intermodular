import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar(token) {

  function handleToken(){
    const algo=sessionStorage.removeItem('token');
    return algo;
  }

 
 
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Tiberio</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/students">Alumnos</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/teachers">Profesores</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/exams">Exámenes</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/practices">Prácticas </Link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
             
                <Link class="nav-link" to={"/profile"}>Perfil </Link>
              </li>
              </ul>
            <form class="d-flex">
            
              
              <button class="btn btn-outline-success" onClick={handleToken}>LogOut</button>
            </form>
            
            
          </div>
        </div>
      </nav>
    </div>
  )
}
