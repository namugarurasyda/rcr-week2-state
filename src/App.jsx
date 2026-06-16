import { useState } from 'react'
import './App.css'
import  { Counter }  from './components/Counter'
// import { CounterArrowfunc}  from './components/CounterArrowfunc'
// import { LoginCard } from './components/LoginCard'
import { SimpleCounter } from './components/SimpleCounter'
import { WithoutCounter } from './components/WithoutUseState'
import { ProductList } from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Welcome to Research Code Respond</h1>
      <div>
        {/* <Counter /> */}
        {/* <CounterArrowfunc /> */}
         {/* <LoginCard /> */}
         {/*<SimpleCounter />  */}
         <WithoutCounter />
         <ProductList />  
      </div>

    </>
  )
}

export default App
