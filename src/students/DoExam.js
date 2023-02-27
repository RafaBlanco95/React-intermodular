import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function DoExam() {

    let navigate=useNavigate()

    const {id, id2}=useParams()

        const [exam, setExam]=useState({
            nota:0
        });

        const {nota}=exam

        const onInputChange=(e)=>{
            setExam({...exam,[e.target.name]:e.target.value})
        }

        const onSubmit= async(e)=>{
            e.preventDefault();
            await axios.post(`https://rafa-blanco-spring-intermodular.up.railway.app/api/alumnos/${id}/hacerControl/${id2}`,exam)
            navigate(`/viewstudent/${id}`)
        }


       
  return (
    <div className="container">
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Evaluación del Examen</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='nota' className='form-label'>
                        Nota
                    </label>
                    <input type={"text"} className="form-control"  placeholder='0-10' name="nota" value={nota} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                <Link className='btn btn-outline-danger mx-2' to={`/student/${id}/doexam`}>Cancelar</Link>
                </form>            
            </div>
        </div>
    </div>
  )
}
