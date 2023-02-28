import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddExam() {

    let navigate = useNavigate()

    const [exam, setExam] = useState({
        preguntas: 0,
        fecha: "",
        nombre:""
    });

    const { preguntas, fecha, nombre } = exam
    const onInputChange = (e) => {
        setExam({ ...exam, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://rafa-blanco-spring-intermodular.up.railway.app/api/controles/nuevo", exam)
        navigate("/exams")
    }

    return (
        <div className="container">
            <div className='row mb-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Registrar un nuevo Examen</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='nombre' className='form-label'>
                                Nombre
                            </label>
                            <input type={"text"} className="form-control" placeholder='Nombre del Examen' name="nombre" value={nombre} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='preguntas' className='form-label'>
                                Nº de Preguntas
                            </label>
                            <input type={"number"} className="form-control" placeholder='5' name="preguntas" value={preguntas} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='preguntas' className='form-label'>
                                Fecha
                            </label>
                            <input type={"date"} className="form-control" placeholder='2023-02-23' name="fecha" value={fecha} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                        <Link className='btn btn-outline-danger mx-2' to="/exams">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
