
import { useState } from "react";
import { Alert, Jumbotron, Button, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import AlertCopy from "./components/AlertCopy";
const { default: RequestForm } = require("./components/RequestForm");



function App() {

  const [response, setResponse] = useState('');

  const updateUI = (text) => {
    setResponse(text);
  }

  const rightCSS = {
    display: 'flex', justifyContent: 'space-between'
  };


  return (
    <div className="App">
      <>
        <Jumbotron>
        <Container style={rightCSS}>
            <h4> Makes Basic Authentication Header</h4>
            <a href="https://github.com/kamrul1/basic-password-to-base64" target="_blank" rel="noreferrer"><Button variant="dark"><FaGithub/></Button></a>
        </Container>
          {
            response !== '' && (
              <><br/>
                <AlertCopy response={response} />
              </>
            )
          }
        </Jumbotron>
        <RequestForm encodedValue={updateUI} />

      </>
    </div>
  );
}

export default App;
