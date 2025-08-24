import { 
  Center,
  ChakraProvider,
  Input,
  Box
} from '@chakra-ui/react'

import { MyButton } from './MyButton';

import { login } from '../services/login';

interface ICard {
  text: string
}

export const Card = ({ text }: ICard) => {
  return(
    <div>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>{text}</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <MyButton text='Login' action={login}/>
          </Center>
        </Box>
      </Box>
    </div>
  )
}