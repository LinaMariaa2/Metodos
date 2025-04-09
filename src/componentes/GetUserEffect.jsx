import React from 'react'
import { useState, useEffect } from 'react';

export default function TraerUsuarios(){
    const[users, setUsers] =useState([])
    const[loading, setLoading]=useState(true)
    const[error, setError] =useState(null);

    useEffect(() =>{
        fetch("https://api.escuelajs.co/api/v1/users")
             //donde se alamacenan los dtos 
        .then((response) => {
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
            return response.json();
          })
        .then(data => {
            setUsers(data)
            setLoading(false)
          })
        .catch(error=>{
            setError(error.message);
            setLoading(false);
        })
    }, []);

    if (loading) return <p>Cargando usuarios </p>
    if (error) return <p>Error al cargar usuario: {error} </p>
    if (users.length === 0) return <p>no hay usuarios disponibles </p>

console.log(users)

return (
    <>
      <table className="min-w-full bg-white border border-black-400 shadow-md">
        <thead className="bg-blue-100 text-center "> 
          <th className='text-center'>Id</th>
          <th className='p-2 text '>Avatar</th>
          <th className='p-2 text-center'>Nombre</th>
          <th className='p-2'>correo</th>
          <th className='p-2'>role</th>
          <th className='p-2' >Acciones</th>
        </thead>
        {users.map((user) => (
        <tbody>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
            <img
                src={user.avatar}
                alt={`Avatar de ${user.name}`}
                style={{ width: "50px", borderRadius: "50%" }}
            />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>eliminar Actualizar</td>
  
  
          </tr>
        </tbody>
         ))}

      </table>
    
  </>
)};
