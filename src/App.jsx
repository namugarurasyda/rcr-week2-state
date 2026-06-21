import { useState } from 'react'
import './App.css'
import  { Counter }  from './components/Counter'
// import { CounterArrowfunc}  from './components/CounterArrowfunc'
// import { LoginCard } from './components/LoginCard'
import { SimpleCounter } from './components/SimpleCounter'
import { WithoutCounter } from './components/WithoutUseState'
import { ProductList } from './components/ProductList'
import UserProfile from './components/UserProfile'
import HeroSection from './components/HeroSection'
import MyComponent from './components/UseCounter'
import Header from './components/Header'
<link href="/src/style.css" rel="stylesheet"></link>
import  Combobox  from './components/Comboobox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <HeroSection /> 
      <Header />
      <Combobox />

{/* 
      <h1> Welcome to Research Code Respond</h1>
      <div>
        {/* <Counter /> */}
        {/* <CounterArrowfunc /> */}
         {/* <LoginCard /> */}
         {/*<SimpleCounter />  */}
         {/* <WithoutCounter />
           */}
          {/* <UserProfile /> */}
          {/* <ProductList />  */}
          {/* <MyComponent />  */}
           <h1 class="text-3xl font-bold underline">
               Hello world!
          </h1>
          <h1>Hello World</h1> 
 

      {/* </div> */}

    </>
  )
}

export default App
