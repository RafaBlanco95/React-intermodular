import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditTeacher() {

    let navigate=useNavigate()

    const {id}=useParams()

        const [teacher, setTeacher]=useState({
            nombre:"",
            dni:"",
            practicas:[]
        });

        const {nombre, dni}=teacher

        const onInputChange=(e)=>{
            setTeacher({...teacher,[e.target.name]:e.target.value})
        }

        useEffect(()=>{
            loadTeacher()
        },[])

        const onSubmit= async(e)=>{
            e.preventDefault();
            await axios.put(`https://rafa-blanco-spring-intermodular.up.railway.app/api/profesores/modificar/${id}`,teacher)
            navigate("/teachers")
        }


        const loadTeacher=async ()=>{
            const result=await axios.get(`https://rafa-blanco-spring-intermodular.up.railway.app/api/profesores/${id}`)
            setTeacher(result.data)
        }

  return (
    <div className="container">
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Modificar Datos Profesor </h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='nombre' className='form-label'>
                        Nombre
                    </label>
                    <input type={"text"} className="form-control"  placeholder='Nombre del Alumno' name="nombre" value={nombre} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='dni' className='form-label'>
                        Dni
                    </label>
                    <input type={"text"} className="form-control"  placeholder='77817070-C' name="dni" value={dni} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                <Link className='btn btn-outline-danger mx-2' to="/teachers">Cancelar</Link>
                </form>            
            </div>
        </div>
    </div>
  )
}
