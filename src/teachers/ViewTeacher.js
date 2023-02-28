import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ViewTeacher() {

    const [teacher, setTeacher] = useState({
        numeroDocente: 0,
        nombre: "",
        dni: "",
        practicas: [
            {
                codigoPractica: 0,
                titulo: "",
                dificultad: 0,
            }
        ]
    })

    const { id } = useParams();

    useEffect(() => {
        loadTeacher()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const loadTeacher = async () => {
        const result = await axios.get(`https://rafa-blanco-spring-intermodular.up.railway.app/api/profesores/${id}`)
        setTeacher(result.data)
    }
    return (
        <div className="container">
            <div className='row mb-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Ficha del Profesor</h2>
                    <div className='card'>
                        <div className='card-header'>
                        <b>Ficha del Profesor con Nº de Docente:</b>
                            {teacher.numeroDocente}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Nombre: </b>
                                    {teacher.nombre}
                                </li>
                                <li className='list-group-item'>
                                    <b>Dni: </b>
                                    {teacher.dni}
                                </li>
                                <li className='list-group-item'>
                                    <b>Prácticas Diseñadas: </b>
                                </li>
                                <li className='list-group-item'>

                                    <table class="table shadow">
                                        <thead>
                                            <tr class="table-primary">
                                                <th scope="col">Código</th>
                                                <th scope="col">Título</th>
                                                <th scope="col">Dificultad</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                teacher.practicas.map((practicas, index) => (
                                                    <tr>
                                                        <th scope="row" key={index}>{practicas.codigoPractica}</th>
                                                        <td>{practicas.titulo}</td>
                                                        <td>{practicas.dificultad}</td>
                                                        
                                                    </tr>
                                                ))
                                            }
                                        </tbody>

                                    </table>
                                </li>
                                

                            </ul>
                            <div className='row'>
                    <Link className='btn btn-outline-success' to={`/teacher/${id}/asignpractice`}>Asignar Practica</Link>
                    <Link className='btn btn-outline-info' to={`/teacher/${id}/dopractice`}>Generar Practica</Link>
                    </div>
                        </div>
                        
                       
                       
                        
            
                    </div>
                    
                   
                    <Link className="btn btn-primary my-2" to={"/teachers"}>Volver</Link>
                </div>

            </div>
        </div>
    )

}