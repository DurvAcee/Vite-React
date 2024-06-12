import './App.css'
import ShoppingList from './components/ShoppingList';

const data = [
    {id: 1, item: 'Eggs', quantity: 5, completed: true},
    {id: 2, item: 'Milk', quantity: 1, completed: false},
];
function App() {

  return (
    <>
      <ShoppingList items={data}/>
    </>
  )
}

export default App
