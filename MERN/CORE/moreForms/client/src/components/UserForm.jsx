import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setconfPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confPassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
                {
                    username.length < 2 && username.length > 0 ? <p className="text-danger">Username must be 2 characters or longer </p> : ""
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {
                    email.length < 5 && email.length > 0 ? <p className="text-danger">Email must be 5 characters or longer </p> : ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input className="pass1" type="text" onChange={ (e) => setPassword(e.target.value) } />
                {
                    password.length < 8 && password.length > 0 ? <p className="text-danger">Password must be 8 characters or longer </p> : ""
                }
                {password != confPassword && password.length > 0 ? <p className="text-danger">Password must match </p> : ""}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input className="pass2" type="text" onChange={ (e) => setconfPassword(e.target.value) } />
                {password != confPassword && password.length > 0 ? <p className="text-danger">Password must match </p> : ""}
            </div>
            <input type="submit" value="Create User" />
            

        </form>
    );
};
    
export default UserForm;
