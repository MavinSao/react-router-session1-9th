import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Redirect, useHistory } from 'react-router'
import auth from '../auth/auth'

function Login() {

    let history = useHistory()

    return (
        <Container>
            <h1>Login</h1>
            <Button
                onClick={() => {
                    auth.login(() => {
                        history.push('/')
                    })
                }}
            >Login</Button>
        </Container>
    )
}

export default Login
