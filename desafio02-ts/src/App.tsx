import { useState } from 'react';

import { 
  Center,
  ChakraProvider,
  Input,
  Box
} from '@chakra-ui/react'

import { Header } from './components/Header';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card text='Faça o login'/>
    </ChakraProvider>
  );
}

export default App;
