import React from 'react'
import Button from './Button'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Content = () => {

    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const history = useHistory();

    const signin = (e) =>{

      e.preventDefault();
      
      if(username===""|| password===""){
        alert("Enter username and password");
       }
    else{
      const res = fetch("/api/user/login",{
          method:"POST",
          headers:{
               "Content-Type" : "application/json"
          },
          body:JSON.stringify({
              "username":username,
              "password":password
          })
      }).then(res => res.json())
      .then(resp=>{
        if(resp.msg === "You are logged in"){
              history.push('/Employee');
        }
        else{
            alert("Invalid Credentials ! Please Try Again");
            setUsername("");
            setpassword("");
        }
      })
    }
    }

    const signup = () =>{
      history.push('/NewUser');
  }

    return (
      <div>
        <div className="container">
      <h1 style={{marginLeft:150}}>Log in</h1>
      <br></br>
      <form>
        <div className="form-control">
           <label>Username</label>
           <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        </div>
        <div className="form-control">
           <label>Password</label>
           <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
        </div>
        <br></br>
        <Button color="#FF416C" value="Sign in" onclick={signin}/>
      </form>
    </div>
    <div className="containerone">
      <h1 style={{marginTop:70,marginLeft:100}}> New User ?</h1>
      <h2 style={{marginLeft:80}}>Register Yourself !</h2>
    <button className="btn-signup" style={{marginTop:50,marginLeft:130}} onClick={signup}>Sign up</button>
    </div>
    </div>
    )
}

export default Content
