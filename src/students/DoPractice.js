import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function DoPractice() {

    let navigate=useNavigate()

    const {id, id2}=useParams()

        const [practice, setPractice]=useState({
            fecha:"",
            nota:0
        });

        const {fecha, nota}=practice

        const onInputChange=(e)=>{
            setPractice({...practice,[e.target.name]:e.target.value})
        }

        const onSubmit= async(e)=>{
            e.preventDefault();
            await axios.post(`https://rafa-blanco-spring-intermodular.up.railway.app/api/alumnos/${id}/hacerPractica/${id2}`,practice)
            navigate(`/viewstudent/${id}`)
        }


       
  return (
    <div className="container">
        <div className='row mb-5'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                <h2 className='text-center m-4 '>Registrar Práctica</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='fecha' className='form-label'>
                        Fecha
                    </label>
                    <input type={"date"} className="form-control"  placeholder='2023-02-25' name="fecha" value={fecha} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='nota' className='form-label'>
                        Nota
                    </label>
                    <input type={"number"} className="form-control"  placeholder='0-10' name="nota" value={nota} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                <Link className='btn btn-outline-danger mx-2' to={`/student/${id}/dopractice`}>Cancelar</Link>
                </form>            
            </div>
        </div>
    </div>
  )
}
