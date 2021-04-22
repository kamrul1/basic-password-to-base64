import { useState } from "react";
import { Alert } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { FiCopy } from "react-icons/fi";
import { useToasts } from 'react-toast-notifications'

const AlertCopy = ({ response }) => {

    const [alertVarientColor, setAlertVarientColor] = useState('success');
    const { addToast } = useToasts();

    const handleClick = () => {
        navigator.clipboard.writeText(response)
        setAlertVarientColor("light")

        addToast("copied to clipboard", {
            appearance: 'info',
            autoDismiss: true,
        });
        setTimeout(() => {
            setAlertVarientColor("success")
        }, 300);
    }



    return (
        <>
            <Alert
                variant={alertVarientColor}
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                {response}
                <OverlayTrigger placement="bottom" 
                    overlay={<Tooltip id={`tooltip-bottom`}>copy</Tooltip>}>
                        <FiCopy onClick={handleClick} />
                </OverlayTrigger>
            </Alert>
        </>
    )
}

export default AlertCopy
