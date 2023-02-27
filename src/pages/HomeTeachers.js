import React, { useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

export default function HomeTeachers() {

    const [teachers, setTeachers]=useState([]);


    useEffect(()=>{
        loadTeachers();
    },[]);

    const loadTeachers=async ()=>{
        const result= await axios.get("https://rafa-blanco-spring-intermodular.up.railway.app/api/profesores");
        setTeachers(result.data);
    };

    const deleteTeacher=async (id)=>{
      await axios.delete(`https://rafa-blanco-spring-intermodular.up.railway.app/api/profesores/eliminar/${id}`)
      loadTeachers()
    }

  return (
    <div className="container">
        <div className="py-4">
          <h3 className='mb-3'><b>Profesores</b></h3>

<table class="table shadow">
  <thead>
    <tr class="table-primary">
      <th scope="col">Nº de Docente</th>
      <th scope="col">Nombre</th>
      <th scope="col">Dni</th>
      <th scope="col">Acciones</th>
  
    </tr>
  </thead>
  <tbody>
{
    teachers.map((teacher,index)=>(
        <tr>
      <th scope="row" key={index}>{teacher.numeroDocente}</th>
      <td>{teacher.nombre}</td>
      <td>{teacher.dni}</td>
      <td> 
          <Link className="btn btn-primary mx-2" to={`/viewteacher/${teacher.numeroDocente}`}>Detalles</Link>
          <Link className="btn btn-outline-primary mx-2" to={`/editteacher/${teacher.numeroDocente}`}>Editar</Link>
          <button className="btn btn-danger mx-2" onClick={()=>deleteTeacher(teacher.numeroDocente)}>Eliminar</button>
      </td>
    </tr>
    ))
}   
  </tbody>
</table>
<Link class="btn btn-outline-success" to="/addteacher">Añadir Profesor</Link>
        </div>

    </div>
  )
}
