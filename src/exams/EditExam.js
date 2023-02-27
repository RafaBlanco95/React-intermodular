import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditExam() {

    let navigate=useNavigate()

    const {id}=useParams()

        const [exam, setExam]=useState({
            nombre:"",
            preguntas:0,
            fecha:""
        });

        const {nombre, preguntas, fecha}=exam

        const onInputChange=(e)=>{
            setExam({...exam,[e.target.name]:e.target.value})
        }

        useEffect(()=>{
            loadExam()
        },[])

        const onSubmit= async(e)=>{
            e.preventDefault();
            await axios.put(`https://rafa-blanco-spring-intermodular.up.railway.app/api/controles/modificar/${id}`,exam)
            navigate("/exams")
        }


        const loadExam=async ()=>{
            const result=await axios.get(`https://rafa-blanco-spring-intermodular.up.railway.app/api/controles/${id}`)
            setExam(result.data)
        }

  return (
    <div className="container">
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Modificar Examen</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='nombre' className='form-label'>
                        Nombre
                    </label>
                    <input type={"text"} className="form-control"  placeholder='Título de la Práctrica' name="nombre" value={nombre} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='preguntas' className='form-label'>
                        Nº de Preguntas
                    </label>
                    <input type={"text"} className="form-control"  placeholder='0-5' name="preguntas" value={preguntas} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='fecha' className='form-label'>
                        Fecha
                    </label>
                    <input type={"text"} className="form-control"  placeholder='0-5' name="fecha" value={fecha} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                <Link className='btn btn-outline-danger mx-2' to="/exams">Cancelar</Link>
                </form>            
            </div>
        </div>
    </div>
  )
}
