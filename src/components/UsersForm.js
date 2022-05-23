import React, { useEffect, useState } from 'react';

const UsersForm = ({addUser, userSelected, deselectUser, editUser, close}) => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[birthday, setBirthday] = useState("");

    useEffect(()=>{
        if(userSelected !== null){
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        } else {
            reset();
        }
    }, [userSelected])

    const submit = e => {
        e.preventDefault()
        const user = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            birthday: birthday
        }
        if(userSelected === null){
            addUser(user);
            reset();
        } else {
            editUser(user);
            deselectUser();
        }
    }

    const reset = ()=> {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setBirthday("")    
    }

    return (
        <div className='user-form-container'>
            <form onSubmit={submit}>
                <h3 className='form-title'>New User</h3>
                <div className="name-container">
                <div className="input-container">
                    <label htmlFor="firt-name"><i className='bx bxs-user'></i></label>
                    <input
                    placeholder='first name'
                    type="text" 
                    id='first-name'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="last-name"></label>
                    <input
                    placeholder='last name'
                    type="text" 
                    id='last-name'
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    />
                </div>
                </div>
                <div className="input-container">
                    <label htmlFor="email"><i className='bx bxl-gmail'></i></label>
                    <input 
                    placeholder='email'
                    type="email" 
                    id='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password"><i className='bx bxs-lock-alt'></i></label>
                    <input 
                    placeholder='password'
                    type="password" 
                    id='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="birthday"><i className='bx bxs-cake'></i></label>
                    <input 
                    type="date" 
                    id='birthday'
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                    />
                </div>
                <button className='btn-upload'>Add new user</button>
                {
                    userSelected !== null && (
                        <button 
                        className="btn-cancel"
                        type='button' 
                        onClick={deselectUser}>
                            Cancel
                        </button>
                    )
                }
            </form>
        </div>
    );
};

export default UsersForm;