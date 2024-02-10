import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [input,setInput] = new useState(
        {   
            "name":"",
            "age":"",
            "phonenumber":"",
            "address":"",
            "pincode":"",
            "emailid":"",
            "password":""
        }   
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const navigate=useNavigate()
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/blog/register",input).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status=="empty") {
                    alert("please fill up")
                }
                else if (Response.data.status=="success") {
                    alert ("Submitted successfully")
                    setInput(
                        {    "name":"",
                        "age":"",
                        "phonenumber":"",
                        "address":"",
                        "pincode":"",
                        "emailid":"",
                        "password":""
        }
                    )
                    navigate("/login")
                        
                } else {
                    alert("Soemthing went wrong");
                }
            }
            
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h3 className='text-info'>Register</h3>
                    <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name'value={input.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">age</label>
                            <input type="text" className="form-control" name='age'value={input.age} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">phone number</label>
                            <input type="number" className="form-control" name='phonenumber'value={input.phonenumber} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">address</label>
                            <input type="text" className="form-control" name='address'value={input.address} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">pincode</label>
                            <input type="number" className="form-control" name='pincode'value={input.pincode} onChange={inputHandler} />
                        </div>
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
            <button className="btn btn-info" to="/" onClick={readvalues}>Register</button>
            <h6 className='text-dark'><Link to="/login">Loginhere</Link></h6>
            </div>
        </div>
    </div>
  )
}

export default Register