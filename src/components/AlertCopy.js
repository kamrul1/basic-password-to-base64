import { useState } from "react";
import { Alert} from "react-bootstrap";
import {FiCopy} from "react-icons/fi";

const AlertCopy = ({response}) => {

    const [alertVarientColor, setAlertVarientColor] = useState('success')

    const handleClick = ()=>{
        navigator.clipboard.writeText(response)
        setAlertVarientColor("light")
        setTimeout(() => {
            setAlertVarientColor("success")
        }, 300);
    }

    

    return (
        <>
        <Alert 
            variant={alertVarientColor} 
            style={{display:"flex", justifyContent:"space-between"}}
            >
                {response}<FiCopy onClick={handleClick}/>
        </Alert>
        </>
    )
}

export default AlertCopy
