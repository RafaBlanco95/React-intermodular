
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Profile(token) {

    let navigate = useNavigate()

    function handleToken() {
        const algo = sessionStorage.removeItem('token');
        navigate("/home")
        window.location.reload();
        return algo;
    }
    console.log(token)
    return (
        <div className="container">
            <div className='row mb-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Perfil de usuario</h2>
                    <div className='card'>
                        <div className='card-header'>
                            <b> Nº de Usuario:</b>
                            {token.token.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Nombre de Usuario: </b>
                                    {token.token.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>Correo Electrónico </b>
                                    {token.token.email}
                                </li>
                                <li className='list-group-item'>
                                    <b>Contraseña: </b>
                                    {token.token.password}
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-outline-primary mx-2" to={`/edituser/${token.token.id}`}>Editar</Link>
                        <button className="btn btn-warning mx-2" onClick={handleToken}>Cerrar Sesión</button>
                        <Link className="btn btn-outline-info mx-2" to={"/register"}>Registrar Usuario Nuevo</Link>

                    </div>
                    <Link className="btn btn-primary my-2" to={"/home"}>Volver</Link>
                </div>

            </div>
        </div>
    )

}