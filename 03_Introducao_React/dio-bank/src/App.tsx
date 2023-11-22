import { Layout } from './components/Layout';
import styled from 'styled-components';
import {
  ChakraProvider,
  Input,
  Button,
  ButtonGroup
} from '@chakra-ui/react'

const Box = styled.div`
  background-color: orange;
`;

function App() {
  return (
    <ChakraProvider>
      <h1>Faça o login</h1>
      <Input placeholder="Email" type='email'/>
      <Input placeholder="Senha" type='password'/>
      <Button colorScheme='teal' variant='outline'>
        Entrar
      </Button>
    </ChakraProvider>
  );
}

export default App;
