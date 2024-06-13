export default function Clicker({msg, buttonText}) {

    const handleClick = (e) => {
        e.preventDefault();
        alert(msg);
    }
    
    return (
        <>
            <button onClick={handleClick}> {buttonText} </button>
        </>
    );
}