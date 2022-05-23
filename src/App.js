import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const[users, setUsers] = useState([]);
  const[userSelected, setUserSelected] = useState(null);

  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }, [])

  const getUsers = ()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }

  const addUser = userItem =>{
    axios.post('https://users-crud1.herokuapp.com/users/', userItem)
    .then(() => getUsers())
    .catch(error => console.log(error.response))
  }

  const deleteUser = id =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers())
  }

  const selectUser = user =>{
    setUserSelected(user);
  }

  const deselectUser = ()=> setUserSelected(null);

  const editUser = userEdited => {
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, userEdited)
    .then(()=>getUsers())
  }

  return (
    <div className="App">
      <UsersForm 
      addUser={addUser}
      userSelected={userSelected}
      deselectUser={deselectUser}
      editUser={editUser}
      />

      <div className='component-container'>
      <UsersList 
      users={users}
      deleteUser={deleteUser}
      selectUser={selectUser}
      />
      </div>
    </div>
  );
}

export default App;
