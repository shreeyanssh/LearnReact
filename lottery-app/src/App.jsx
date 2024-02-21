import './App.css'
import Lottery from './Lottery'
import {sum} from './helper.js'

function App() {
  let winCondi = (arr) =>{
    return arr.every((num) => num === arr[0]);
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondi}/>
    </>
  )
}

export default App
