import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from '../components/formulario/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Cadastro de Colaboradores</h1>
        <MyForm/>
    </div>
  )
}

export default App
