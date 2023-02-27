import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddTeacher() {

    let navigate = useNavigate()

    const [teacher, setTeacher] = useState({
        nombre: "",
        dni: ""
    });

    const { nombre, dni } = teacher

    const onInputChange = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://rafa-blanco-spring-intermodular.up.railway.app/api/profesores/nuevo", teacher)
        navigate("/teachers")
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Inscribir Nuevo Profesor</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='nombre' className='form-label'>
                                Nombre
                            </label>
                            <input type={"text"} className="form-control" placeholder='Nombre del Profesor' name="nombre" value={nombre} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='dni' className='form-label'>
                                Dni
                            </label>
                            <input type={"text"} className="form-control" placeholder='77817070-C' name="dni" value={dni} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                        <Link className='btn btn-outline-danger mx-2' to="/teachers">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
