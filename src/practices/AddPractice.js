
import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddPractice() {

    let navigate = useNavigate()

    const [practice, setPractice] = useState({
        titulo: "",
        dificultad: 0
    });

    const { titulo, dificultad } = practice
    const onInputChange = (e) => {
        setPractice({ ...practice, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://rafa-blanco-spring-intermodular.up.railway.app/api/practicas/nueva", practice)
        navigate("/practices")
    }

    return (
        <div className="container">
            <div className='row mb-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Registrar Nueva Práctica</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='titulo' className='form-label'>
                                Título
                            </label>
                            <input type={"text"} className="form-control" placeholder='Título de la Práctica' name="titulo" value={titulo} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Dificultad de la Práctica' className='form-label'>
                                Dificultad
                            </label>
                            <input type={"number"} className="form-control" placeholder='Dificultad de la Práctica' name="dificultad" value={dificultad} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                        <Link className='btn btn-outline-danger mx-2' to="/practices">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
