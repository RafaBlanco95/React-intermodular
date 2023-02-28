import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ProfileUpdated() {


    const {id}=useParams()

        const [user, setUser]=useState({
            id:0,
            username:"",
            email:"",
            password:""
            
        });

        const {username, password, email}=user

        useEffect(()=>{
            const loadUser=async ()=>{
                const result=await axios.get(`https://rafa-blanco-spring-intermodular.up.railway.app/api/usuarios/${id}`)
                setUser(result.data)
            };
            loadUser();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        

  
    return (
        <div className="container">
            <div className='row mb-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Perfil Modificado</h2>
                    <div className='card'>
                        <div className='card-header'>
                            
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Nombre de Usuario: </b>
                                    {username}
                                </li>
                                <li className='list-group-item'>
                                    <b>Contraseña: </b>
                                    {password}
                                </li>
                                <li className='list-group-item'>
                                    <b>Correo Electrónico </b>
                                    {email}
                                </li>
                               
                            </ul>
                        </div>
                       

                    </div>
                    <Link className="btn btn-primary my-2" to={"/home"}>Volver</Link>
                </div>

            </div>
        </div>
    )

}