import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditPractice() {

    let navigate=useNavigate()

    const {id}=useParams()

        const [practice, setPractice]=useState({
            titulo:"",
            dificultad:0
        });

        const {titulo, dificultad}=practice

        const onInputChange=(e)=>{
            setPractice({...practice,[e.target.name]:e.target.value})
        }

        useEffect(()=>{
            loadPractice()
        },[])

        const onSubmit= async(e)=>{
            e.preventDefault();
            await axios.put(`https://rafa-blanco-spring-intermodular.up.railway.app/api/practicas/modificar/${id}`,practice)
            navigate("/practices")
        }


        const loadPractice=async ()=>{
            const result=await axios.get(`https://rafa-blanco-spring-intermodular.up.railway.app/api/practicas/${id}`)
            setPractice(result.data)
        }

  return (
    <div className="container">
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Modificar Práctica</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='titulo' className='form-label'>
                        Título
                    </label>
                    <input type={"text"} className="form-control"  placeholder='Título de la Práctrica' name="titulo" value={titulo} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='dificultad' className='form-label'>
                        Dificultad
                    </label>
                    <input type={"text"} className="form-control"  placeholder='0-5' name="dificultad" value={dificultad} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                <Link className='btn btn-outline-danger mx-2' to="/practices">Cancelar</Link>
                </form>            
            </div>
        </div>
    </div>
  )
}
