import { useState } from "react";
import Lightbox from "./components/LightBox/Lightbox";
import './LightboxApp.css'

const LightboxApp = function() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleIsOpen} className="run-lightbox">
                Lightbox            
            </button>
            <Lightbox isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        </>        
    )
}

export default LightboxApp;