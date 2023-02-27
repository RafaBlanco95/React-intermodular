import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom';

export default function ExamList() {

    const [exams, setExams] = useState([]);

    const {id}=useParams()

    useEffect(() => {
        loadExams();
    }, []);

    const loadExams = async () => {
        const result = await axios.get("https://rafa-blanco-spring-intermodular.up.railway.app/api/controles");
        setExams(result.data);
    };

  
    return (
        <div className="container">
            <div className="py-4">
                <h3 className='mb-3'><b>Listado de Exámenes</b></h3>

                <table class="table shadow">
                    <thead>
                        <tr class="table-primary">
                            <th scope="col">Id del Examen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Nº de Preguntas</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            exams.map((exam, index) => (
                                <tr>
                                    <th scope="row" key={index}>{exam.numeroControl}</th>
                                    <td>{exam.nombre}</td>
                                    <td>{exam.preguntas}</td>
                                    <td>{exam.fecha}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/student/${id}/doexam/${exam.numeroControl}`}>Registrar Resultado</Link>
                                       
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
               
            </div>

        </div>
    )
}
