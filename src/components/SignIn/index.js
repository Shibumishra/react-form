import React, { useState } from 'react';
import { Redirect } from 'react-router';

const SignIn = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [redirectHome, setRedirectHome] = useState(false)
    const navigateUser = {
        name: "abcd",
        pwd: "12345"
    }

    const updateValues = (e) => {
        // console.log(e.target.value, e.target.name)
        e.target.name === "username" && setUserName(e.target.value)
        e.target.name === "password" && setPassword(e.target.value)
    }
    const submitData = (e) => {
        e.preventDefault()
        console.log("sumbit", username, password);
        const {name, pwd} = navigateUser
        if(name === username && pwd === password) {
            setRedirectHome(true)
            window.localStorage.setItem("username", username)
            window.localStorage.setItem("password", password)       
        } 
     }
    return ( <div className="d-flex justify-content-center">
        {redirectHome && <Redirect to="/" />}
        <form onSubmit={submitData}>
            <label className="m-2">User Name</label>
            <input type="text" name="username" value={username} placeholder="Enter Username" onChange={updateValues}/> <br />
            <label className="m-2">Password</label>
            <input type="password" name="password" value={password} placeholder="Enter Password" onChange={updateValues}/> <br />
            <input className="m-auto" type="submit" />
        </form>
    </div> );
}
 
export default SignIn;