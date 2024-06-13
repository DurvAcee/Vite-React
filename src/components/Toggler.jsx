import { useState } from "react";
import './Toggler.css';

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const changeEmote = () => {
        setIsHappy((i) => i = !i);
    }
    return (
        <>
            <p className="toggler" onClick={changeEmote}> {isHappy ? '😊' : '😢'} </p>
        </>
    );
}