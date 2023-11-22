import { Layout } from './components/Layout';
import {
  ChakraProvider,
  Input,
  Box,
  Button,
} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box display='flex' justifyContent='center' alignItems='start' minHeight='100vh' backgroundColor='#9413dc' padding='10px'>
        <Box backgroundColor="#fff" maxWidth='450px' padding='10px' borderRadius='15px'>
          <h1>Faça o login</h1>
          <Input placeholder="Email" type='email'/>
          <Input placeholder="Senha" type='password' marginTop='10px' />
          <Button colorScheme='teal' size='sm' width='100%' marginTop='10px'>
            Entrar
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
