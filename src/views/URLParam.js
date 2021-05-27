import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'

function URLParam() {

    let { id } = useParams()

    return (
        <Container>
            <h1>ID: {id}</h1>
        </Container>
    )
}

export default URLParam
