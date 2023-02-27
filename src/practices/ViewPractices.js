import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ViewPractice() {

    const [practice, setPractice] = useState({
        
                codigoPractica: 0,
                titulo: "",
                dificultad: 0,
        alumnos: [
            {
                matricula: 0,
                nombre: "",
                grupo: "",
                fecha:"",
                nota:0
            }
        ],
        profesores:[
            {
                numeroDocente:0,
                nombre:"",
                dni:""
            }
        ]
    })

    const { id } = useParams();

    useEffect(() => {
        loadPractice()
    }, [])

    const loadPractice = async () => {
        const result = await axios.get(`https://rafa-blanco-spring-intermodular.up.railway.app/api/practicas/${id}`)
        setPractice(result.data)
    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Detalles de la Prácica</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Ficha de la Práctica con nº:
                            {practice.codigoPractica}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Título: </b>
                                    {practice.titulo}
                                </li>
                                <li className='list-group-item'>
                                    <b>Dificultad: </b>
                                    {practice.dificultad}
                                </li>
                                <li className='list-group-item'>
                                    <b>Alumnos que la han realizado: </b>
                                    
                                </li>


                                <li className='list-group-item'>

                                    <table class="table shadow">
                                        <thead>
                                            <tr class="table-primary">
                                                <th scope="col">Nº de Matrícula</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Grupo</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Nota</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                           
                                        practice.alumnos.map((alumnos, index)=>(
                                            <tr>
                                                <th scope="row" key={index}>{alumnos.matricula}</th>
                                                <td>{alumnos.nombre}</td>
                                                <td>{alumnos.grupo}</td>
                                                <td>{alumnos.fecha}</td>
                                                <td>{alumnos.nota}</td>
                                                </tr>
                                        ))
                                        }
                                                </tbody>
                                            
                                            </table>

                                            

                                        </li>
                                        <li className='list-group-item'>
                                    <b>Profesor encargado de la Práctica </b>
                                    
                                </li>


                                <li className='list-group-item'>

                                    <table class="table shadow">
                                        <thead>
                                            <tr class="table-primary">
                                                <th scope="col">Nº de Docente</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">DNI</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                           
                                        practice.profesores.map((profesores, index)=>(
                                            <tr>
                                                <th scope="row" key={index}>{profesores.numeroDocente}</th>
                                                <td>{profesores.nombre}</td>
                                                <td>{profesores.dni}</td>
                                               
                                                </tr>
                                        ))
                                        }
                                                </tbody>
                                            
                                            </table>

                                            

                                        </li>

                                    </ul>
                                </div>
                                
                        </div>
                        <Link className="btn btn-primary my-2" to={"/practices"}>Volver</Link>
                    </div>

                </div>
            </div>
            )

}