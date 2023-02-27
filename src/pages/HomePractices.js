import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

export default function HomePractices() {

    const [practices, setPractices] = useState([]);

    

    useEffect(() => {
        loadPractices();
    }, []);

    const loadPractices = async () => {
        const result = await axios.get("https://rafa-blanco-spring-intermodular.up.railway.app/api/practicas");
        setPractices(result.data);
    };

    const deletePractice = async (id) => {
        await axios.delete(`https://rafa-blanco-spring-intermodular.up.railway.app/api/practicas/eliminar/${id}`)
        loadPractices()
    }

    return (
        <div className="container">
            <div className="py-4">
                <h3 className='mb-3'><b>Listado de Prácticas</b></h3>

                <table class="table shadow">
                    <thead>
                        <tr class="table-primary">
                            <th scope="col">Código de Pactica</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Dificultad</th>
                            <th scope="col">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            practices.map((practice, index) => (
                                <tr>
                                    <th scope="row" key={index}>{practice.codigoPractica}</th>
                                    <td>{practice.titulo}</td>
                                    <td>{practice.dificultad}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/viewpractice/${practice.codigoPractica}`}>Detalles</Link>
                                        <Link className="btn btn-outline-primary mx-2" to={`/editpractice/${practice.codigoPractica}`}>Editar</Link>
                                        <button className="btn btn-danger mx-2" onClick={() => deletePractice(practice.codigoPractica)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link class="btn btn-outline-success" to="/addpractice">Añadir Práctica</Link>
            </div>

        </div>
    )
}
