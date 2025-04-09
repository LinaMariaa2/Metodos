import React from 'react'

export default function PostUser() {
    function EnviarUsuario(){

    }







  return (
    <>
        <h1>registro</h1>
        <div className="bg-green-50 shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        <form className="">
            <p>Nombre</p>
        
            <input
                type='name'
                placeholder='nombre'
                className="border border-green-300"

            />
            <p>Email</p>
            <input
                type='email'
                placeholder='Correo Electronico'
                className="border border-green-300"

            />
            <p>Contraseña</p>
            <input
                type='password'
                placeholder='Contraseña'
                className="border border-green-300"
            />
            <p>Rol</p>
            <select>
            <option value="customer">customer</option>
            <option value="customer">admin</option>
            </select>

            <button></button>
        </form>
        </div>

    </>
    
  )
}
