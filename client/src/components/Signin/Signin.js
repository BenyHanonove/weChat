import React from 'react';
import {Container ,Form ,Button} from "react-bootstrap";
import {moveToSignupPage} from "../../functions/url.js";
import "./Signin.css";

function Signin() {
  return (
    <Container className='signin'>
        <Form className='signin-form'>

            <h1 className='text-center'>Create Account</h1>
            <h6 className='text-center'>Create a new account</h6>

            <Form.Group>
                <Form.Label>{"Email:"}</Form.Label>
                <Form.Control
                type='email'
                />
            </Form.Group>


            <Form.Group>
                <Form.Label>{"Password:"}</Form.Label>
                <Form.Control
                type='password'
                />
            </Form.Group>

            <Button className='signin'>Submit</Button>

        <Container className='signup-text'>
            <label>Don't have a account?</label>
            <label className='signup-label' onClick={moveToSignupPage}>Register</label>
        </Container>
            
        </Form>


    </Container>  )
}

export default Signin;