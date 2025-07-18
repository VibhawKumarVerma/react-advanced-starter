import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';

function Users() {
  const [users, setUsers] = useState([]);
  const [formName, setFormName] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with name: ${formName}`);
    setFormName('');
  };

  return (
    <div>
      <h2>User List (Fetched from API)</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter name..." 
          value={formName} 
          onChange={(e) => setFormName(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {users.map(user => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}

export default Users;
