import React, {useRef, useEffect} from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const netlifyFunctionUrl = window.location + '.netlify/functions/base64Encode'

const RequestForm = ({encodedValue}) => {
    const _userName = useRef(null)
    const _password = useRef(null);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        let payLoad = {username:_userName.current.value, password:_password.current.value}
        if(payLoad.username==="" || payLoad.password===""){
            return;
        }

        getData(payLoad);
    }

    const getData =async(payLoad)=>{
        const response = await fetch(netlifyFunctionUrl,{method:"POST", body:JSON.stringify(payLoad)})
        const responseValue = await response.json();
        encodedValue(responseValue.Authorization);
    }

    useEffect(() => {
        _userName.current.focus();
    }, [])



    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"  ref={_userName}/>
                    <Form.Text className="text-muted">
                        We'll never share your details with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  ref={_password}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default RequestForm
