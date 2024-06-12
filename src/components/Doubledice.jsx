export default function Doubledice() {

    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;

    return (
        <>
            <h2>Double Dice</h2>
            {num1 === num2 && <h3> You Win! </h3>}
            <p>num1 : {num1}</p>
            <p>num1 : {num2}</p>
        </>
    );
}