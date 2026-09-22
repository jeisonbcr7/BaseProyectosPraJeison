import './App.css'
import { LayoutContador } from './features/counter/LayoutContador'
import { LayoutLogin } from './features/login/LayoutLogin'

function App() {

  return (
    <>
      <h1>Ejemplo de useState</h1>
      <LayoutContador />
      <LayoutLogin />
    </>
  )
}

export default App
