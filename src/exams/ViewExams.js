import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ViewExams() {

    const [exam, setExam] = useState({
        
                numeroControl: 0,
                preguntas:0,
                nombre: "",
                fecha: "",
        alumnos: [
            {
                matricula: 0,
                nombre: "",
                grupo: "",
                nota:0
            }
        ]
    })

    const { id } = useParams();

    useEffect(() => {
        loadExam()
    })

    const loadExam = async () => {
        const result = await axios.get(`https://rafa-blanco-spring-intermodular.up.railway.app/api/controles/${id}`)
        setExam(result.data)
    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Detalles del Examen</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Ficha del Examen con Id:
                            {exam.numeroControl}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Nombre: </b>
                                    {exam.nombre}
                                </li>
                                <li className='list-group-item'>
                                    <b>Nº de Preguntas: </b>
                                    {exam.preguntas}
                                </li>
                                <li className='list-group-item'>
                                    <b>Fecha: </b>
                                    {exam.fecha}
                                </li>
                                <li className='list-group-item'>
                                    <b>Alumnos examinados: </b>
                                    
                                </li>


                                <li className='list-group-item'>

                                    <table class="table shadow">
                                        <thead>
                                            <tr class="table-primary">
                                                <th scope="col">Nº de Matrícula</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Grupo</th>
                                                <th scope="col">Nota</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                           
                                        exam.alumnos.map((alumnos, index)=>(
                                            <tr>
                                                <th scope="row" key={index}>{alumnos.matricula}</th>
                                                <td>{alumnos.nombre}</td>
                                                <td>{alumnos.grupo}</td>
                                                <td>{alumnos.nota}</td>
                                                </tr>
                                        ))
                                        }
                                                </tbody>
                                            
                                            </table>

                                            

                                        </li>


                                    </ul>
                                </div>
                                
                        </div>
                        <Link className="btn btn-primary my-2" to={"/exams"}>Volver</Link>
                    </div>

                </div>
            </div>
            )

}