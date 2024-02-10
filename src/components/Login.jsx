import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [input,setInput] = new useState(
        {   
            "emailid":"",
            "password":""
        }   
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const navigate = useNavigate()
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/blog/signin",input).then(
            (Response)=>{
                console.log(Response.data.status)
                if (Response.data.status=="success") {
                    alert("Login success")
                    navigate("/home")
                } else if (Response.data.status=="invalid email")
                {
                    alert("Invalid Email")
                }
                else{
                    alert("incorect password")
                }
        
    })
        }
    
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h3 className='text-info'>Register</h3>
                    <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EmailId</label>
                            <input type="email" className="form-control" name='emailid' value={input.emailid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                        </div>
                        </div>
                    </div>
                </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-info" onClick={readvalues}>Login</button>
            <h6 className='text-dark'><Link to="/">Register here</Link></h6>

            </div>

        </div>
    </div>
  )
}

export default Login