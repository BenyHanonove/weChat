import React, { useState } from 'react';
import { Button, Container, Form} from "react-bootstrap";
import {moveToSigninPage} from "../../functions/url.js";

import "./Signup.css";

function Signup() {

    const [user ,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const clickHandler = () =>{
        if(user.password !== user.confirmPassword){
            alert("password do not match");
            return;
        }
        console.log(user);
    };

  return (
    <Container className='signup'>
        <Form className='signup-form'>

            <h1 className='text-center'>Create Account</h1>
            <h6 className='text-center'>Create a new account</h6>

            <Form.Group>
                <Form.Label>{"First Name:"}</Form.Label>
                <Form.Control
                type='text'
                value={user.firstName}
                onChange={(event)=>{setUser({...user,firstName:event.target.value})}}
                />
            </Form.Group>


            <Form.Group>
                <Form.Label>{"Last Name:"}</Form.Label>
                <Form.Control
                type='text'
                value={user.lastName}
                onChange={(event)=>{setUser({...user,lastName:event.target.value})}}
                />
            </Form.Group>


            <Form.Group>
                <Form.Label>{"Email:"}</Form.Label>
                <Form.Control
                type='email'
                value={user.email}
                onChange={(event)=>{setUser({...user,email:event.target.value})}}
                />
            </Form.Group>


            <Form.Group>
                <Form.Label>{"Password:"}</Form.Label>
                <Form.Control
                type='password'
                value={user.password}
                onChange={(event)=>{setUser({...user,password:event.target.value})}}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>{"Confirm Password:"}</Form.Label>
                <Form.Control
                type='password'
                value={user.confirmPassword}
                onChange={(event)=>{setUser({...user,confirmPassword:event.target.value})}}
                />
            </Form.Group>

            <Button className='signup' onClick={clickHandler}>Submit</Button>

        <Container className='signin-text'>
            <label>Already have account?</label>
            <label className='signin-label' onClick={moveToSigninPage}>Login</label>
        </Container>
            
        </Form>


    </Container>
  )
}

export default Signup;