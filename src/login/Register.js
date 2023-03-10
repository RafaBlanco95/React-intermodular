import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        username: "",
        password: "",
        email:""
    });

    const { username, password, email } = user
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://rafa-blanco-spring-intermodular.up.railway.app/api/usuarios/nuevo", user)
        navigate("/home")
    }

    return (
        <div className="container">
            <div className='row mb-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Registro de Usuario</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>
                                Nombre de Usuario
                            </label>
                            <input type={"text"} className="form-control" placeholder='Nombre de Usuario' name="username" value={username} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>
                                E-mail
                            </label>
                            <input type={"email"} className="form-control" placeholder='example@gmail.com' name="email" value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>
                                Contraseña
                            </label>
                            <input type={"password"} className="form-control" placeholder='pass' name="password" value={password} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>Registrar Nuevo Usuario</button>
                        <Link className='btn btn-outline-danger mx-2' to="/profile">Volver</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
