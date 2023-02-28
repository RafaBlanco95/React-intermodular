import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ViewStudent() {

    const [student, setStudent] = useState({
        matricula: "",
        nombre: "",
        grupo: "",
        practicas: [
            {
                codigoPractica: 0,
                titulo: "",
                dificultad: 0,
                fecha: "",
                nota: 0
            }
        ],
        controles: [
            {
                numeroControl: 0,
                nombre: "",
                preguntas: 0,
                fecha: "",
                nota: 0
            }
        ]
    })

    const { id } = useParams();

    useEffect(() => {
        loadStudent()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const loadStudent = async () => {
        const result = await axios.get(`https://rafa-blanco-spring-intermodular.up.railway.app/api/alumnos/${id}`)
        setStudent(result.data)
    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Ficha del Alumno</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Ficha del Alumno con nº de matrícula:
                            {student.matricula}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Nombre: </b>
                                    {student.nombre}
                                </li>
                                <li className='list-group-item'>
                                    <b>Grupo: </b>
                                    {student.grupo}
                                </li>
                                <li className='list-group-item'>
                                    <b>Prácticas Realizadas: </b>
                                </li>
                                <li className='list-group-item'>

                                    <table class="table shadow">
                                        <thead>
                                            <tr class="table-primary">
                                                <th scope="col">Código</th>
                                                <th scope="col">Título</th>
                                                <th scope="col">Dificultad</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Nota</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                student.practicas.map((practicas, index) => (
                                                    <tr>
                                                        <th scope="row" key={index}>{practicas.codigoPractica}</th>
                                                        <td>{practicas.titulo}</td>
                                                        <td>{practicas.dificultad}</td>
                                                        <td>{practicas.fecha}</td>
                                                        <td>{practicas.nota}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>

                                    </table>
                                </li>
                                <Link className='btn btn-outline-danger mx-2' to={`/student/${id}/dopractice`}>Hacer Practica</Link>
                                <li className='list-group-item'>
                                    <b>Exámenes Realizados: </b>
                                </li>
                                <li className='list-group-item'>

                                    <table class="table shadow">
                                        <thead>
                                            <tr class="table-primary">
                                                <th scope="col">Id del Examen</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Nº de Preguntas</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Nota</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                student.controles.map((controles, index) => (
                                                    <tr>
                                                        <th scope="row" key={index}>{controles.numeroControl}</th>
                                                        <td>{controles.nombre}</td>
                                                        <td>{controles.preguntas}</td>
                                                        <td>{controles.fecha}</td>
                                                        <td>{controles.nota}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>

                                    </table>
                                </li>


                            </ul>
                        </div>
                        
                        <Link className='btn btn-outline-danger mx-2' to={`/student/${id}/doexam`}>Hacer Examen</Link>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/students"}>Volver</Link>
                </div>

            </div>
        </div>
    )

}