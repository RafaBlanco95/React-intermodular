import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

export default function HomeExams() {

    const [exams, setExams] = useState([]);

    useEffect(() => {
        loadExams();
    }, []);

    const loadExams = async () => {
        const result = await axios.get("https://rafa-blanco-spring-intermodular.up.railway.app/api/controles");
        setExams(result.data);
    };

    const deleteExam = async (id) => {
        await axios.delete(`https://rafa-blanco-spring-intermodular.up.railway.app/api/controles/eliminar/${id}`)
        loadExams()
    }

    return (
        <div className="container">
            <div className="py-4">
                <h3 className='mb-3'><b>Listado de Exámenes</b></h3>

                <table class="table shadow">
                    <thead>
                        <tr class="table-primary">
                            <th scope="col">Id del Examen </th>
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
                                        <Link className="btn btn-primary mx-2" to={`/viewexam/${exam.numeroControl}`}>Detalles</Link>
                                        <Link className="btn btn-outline-primary mx-2" to={`/editexam/${exam.numeroControl}`}>Editar</Link>
                                        <button className="btn btn-danger mx-2" onClick={() => deleteExam(exam.numeroControl)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link class="btn btn-outline-success" to="/addexam">Añadir Examen</Link>
            </div>

        </div>
    )
}
