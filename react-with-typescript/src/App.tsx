import { Box } from "@chakra-ui/react"
import './App.css'
function App() {
  return (
    <Box>
      <h1>Faça o login</h1>
      <label htmlFor="emailInput">
        Email
      </label>
      <input type="email" id="emailInput" />

      <label htmlFor="passwordInput">
        Senha
      </label>
      <input type='password' id="passwordInput" />

      <button>
        Entrar
      </button>
    </Box>
  )
}

export default App
