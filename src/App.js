import { useState } from "react";
import { Alert, Jumbotron } from "react-bootstrap";
const { default: RequestForm } = require("./components/RequestForm");


function App() {

  const [response, setResponse] = useState('');

  const updateUI = (text)=>{
    setResponse(text);
  }

  return (
    <div className="App">
      <>
      <Jumbotron>
        <h4> Makes Basic Authentication Header</h4>
        {
          response!=='' && (
                  <Alert variant="success">
                  {response}
                  </Alert>
          )
        }
      </Jumbotron>
      <RequestForm encodedValue={updateUI}/>
      </>
    </div>
  );
}

export default App;
