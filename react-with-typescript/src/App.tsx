import { Box, Button, Center} from "@chakra-ui/react"
import './App.css'
import { InputField } from "./components/InputField"
import styled from "styled-components"
function App() {
  const Title = styled.h1`
    font-size: 24px;
    color: white;
    margin-bottom: 20px;
    font-weight: 700;
  `;
  return (
    <Center>
      <Box width={450} padding={10} background={'gray.900'} borderRadius={8} boxShadow={'md'} marginTop={40}>
        <Title>Faça o login</Title>
        <InputField nameField="Email" placeholder="Digite seu email" styles={{paddingBottom: 20}} />

        <InputField nameField="Senha" placeholder="Digite sua senha" styles={{paddingBottom: 20}} />

        <Button width={'100%'}>
          Entrar
        </Button>
      </Box>
    </Center>
  )
}

export default App
