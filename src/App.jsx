import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Shop from './component/Shop/Shop';
import Product from './component/product/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Shop></Shop>
      
    </>
  )
}

export default App
