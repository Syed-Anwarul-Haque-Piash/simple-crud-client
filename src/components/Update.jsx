import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadeduser=useLoaderData()
    const handleUpdate=(e)=>{
        e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email}
    console.log(user);
    fetch(`http://localhost:5000/users/${loadeduser._id}`,{
        method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
            alert("User updated successfully")
        }
    })
    }
    return (
        <div>
            <h1>Loaded User: {loadeduser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadeduser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadeduser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;