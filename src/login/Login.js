
import React, { useState } from 'react'




async function loginUser(credentials) {
 return fetch('https://rafa-blanco-spring-intermodular.up.railway.app/api/usuarios/iniciarSesion', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
export default function Login({setToken}) {

   

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
      
        setToken(token);

       
       console.log(token?.id,"pruebas")
        
      }

      
      
    
    return (
        <div className="container">
            <div className='row'>

                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                <img class=" w-100"src='nervion.png' alt="colegio"></img>
                    <h2 className='text-center m-4'>Tiberio: Inicio de Sesión</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label className='form-label'>
                                Nombre de Usuario
                            </label>
                            <input type={"text"} className="form-control" onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label  className='form-label'>
                                Contraseña
                            </label>
                            <input type={"password"} className="form-control"  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>Iniciar Sesión</button>
                       
                    </form>
                    
                </div>
            </div>
        </div>
    )
}
