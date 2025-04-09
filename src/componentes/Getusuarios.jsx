import React, { useEffect, useState } from 'react';

function GetUsuarios() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <div>
            <img
              src={user.avatar}
              alt={`Avatar de ${user.name}`}
              style={{ width: "50px", borderRadius: "50%" }}
            />
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Rol: {user.role}</p>                     
          </div>
        </li>
      ))}
    </ul>
  );
}

export default GetUsuarios;



    
    