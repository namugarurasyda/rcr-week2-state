import { useState } from 'react'
import './App.css'
import  { Counter }  from './components/Counter'
import { CounterArrowfunc}  from './components/CounterArrowfunc'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Welcome to Research Code Respond</h1>
      <div>
        <Counter />
        <CounterArrowfunc />

      </div>

    </>
  )
}

export default App
