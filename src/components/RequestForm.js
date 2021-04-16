import React, {useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const netlifyFunctionUrl = window.location + '.netlify/functions/base64Encode'

const RequestForm = ({encodedValue}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [payload, setPayload] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        setPayload({username:userName, password:password}) 
        getData();
    }

    const getData =async()=>{
        const response = await fetch(netlifyFunctionUrl,{method:"POST", body:JSON.stringify(payload)})
        const responseValue = await response.json();
        encodedValue(responseValue.Authorization);
    }




    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={(e)=>setUserName(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your details with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default RequestForm
