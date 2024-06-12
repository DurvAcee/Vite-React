export default function ShoppingListItem({item, quantity, completed}) {
    return (
        <>
            <li
                style={{ color: completed ? 'grey' : 'green', 
                    textDecoration: completed ? 'line-through' : 'none' }}  
            > {item} - {quantity}
            </li>
        </>
    );
}