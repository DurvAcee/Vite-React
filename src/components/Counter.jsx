import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    const increment = () => {
        setNum((n)=>(n+1));
    }
    return (
        <>
            <p> The count is: {num}</p>
            <button onClick = {increment}> Increment </button>
        </>
    );
}