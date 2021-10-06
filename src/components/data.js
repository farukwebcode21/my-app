import React, {useState, useEffect } from 'react'

function Data() {
    const [users, setUsers] = useState([]);
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);


    return (
        <div>
            {
                users.map(user =><User name={user.name} email={user.email} key={user.id}/>)
            }
        </div>
    )
}

function User(props){
    return (
        <div className="person">
            <h2>Name: {props.name}</h2>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Data

