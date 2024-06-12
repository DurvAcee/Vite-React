import './App.css'
import Dieroll from './components/Dieroll'

function App() {


  return (
    <>
      <Dieroll />
      <Dieroll numSides = {10}/>
      <Dieroll numSides = {12}/>
    </>
  )
}

export default App
