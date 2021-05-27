import React from 'react'
import { Container } from 'react-bootstrap'
import useQuery from '../custom/useQuery'

function QueryParameter() {

    let query = useQuery()
    console.log(query.get("name"));

    return (
        <Container>
            <h1>Name : {query.get("name")}</h1>
            <h1>Age: {query.get("age")}</h1>
        </Container>
    )
}

export default QueryParameter
