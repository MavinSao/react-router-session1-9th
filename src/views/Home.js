import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Redirect, useHistory } from 'react-router'
import auth from '../auth/auth'

function Home() {

    // const [auth, setAuth] = useState(false)
    let history = useHistory()
    return (
        <Container>
            {/* {auth ? <h1>Home</h1> : <Redirect to="/login" />} */}
            <h1>Home</h1>
            <Button
                onClick={() =>
                    auth.logout(() => {
                        history.push('/login')
                    })
                }
            >Logout</Button>
        </Container>
    )
}

export default Home
