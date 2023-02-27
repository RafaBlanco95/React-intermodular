import React, { useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

export default function HomeStudent() {

    const [students, setStudents]=useState([]);

   

    useEffect(()=>{
        loadStudents();
    },[]);

    const loadStudents=async ()=>{
        const result= await axios.get("https://rafa-blanco-spring-intermodular.up.railway.app/api/alumnos");
        setStudents(result.data);
    };

    const deleteStudent=async (id)=>{
      await axios.delete(`https://rafa-blanco-spring-intermodular.up.railway.app/api/alumnos/eliminar/${id}`)
      loadStudents()
    }

  return (
    <div className="container">
        <div className="py-4">
          <h3 className='mb-3'><b>Portal de Alumnos</b></h3>

<table class="table shadow">
  <thead>
    <tr class="table-primary">
      <th scope="col">Nº Matrícula</th>
      <th scope="col">Nombre</th>
      <th scope="col">Grupo</th>
      <th scope="col">Acciones</th>
  
    </tr>
  </thead>
  <tbody>
{
    students.map((student,index)=>(
        <tr>
      <th scope="row" key={index}>{student.matricula}</th>
      <td>{student.nombre}</td>
      <td>{student.grupo}</td>
      <td> 
          <Link className="btn btn-primary mx-2" to={`/viewstudent/${student.matricula}`}>Detalles</Link>
          <Link className="btn btn-outline-primary mx-2" to={`/editstudent/${student.matricula}`}>Editar</Link>
          <button className="btn btn-danger mx-2" onClick={()=>deleteStudent(student.matricula)}>Eliminar</button>
      </td>
    </tr>
    ))
}   
  </tbody>
</table>
<Link class="btn btn-outline-success" to="/addstudent">Añadir Alumno</Link>
        </div>

    </div>
  )
}
