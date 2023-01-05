import { Box, Button, Flex, InputGroup, InputRightElement } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Input } from '@chakra-ui/react'
import { signup as Signup , login } from '../firebase';


const Login = ({closeLogin}) => {

    const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState('')
  const[loading, setLoading] = useState(false)
 
 
  async function handleSubmition(){
    setLoading(true);
     try {
      Signup(username, password);
     } catch (error) {
      alert('error')
      
     }
     setLoading(false)
    closeLogin();
  }
  async function handleLogin(){
    setLoading(true);
     try {
      login(username, password);
     } catch (error) {
      alert('error')
      
     }
     setLoading(false)
    closeLogin();
  }

  return (
    <Box>
   <h3>please sign up or login</h3>
    <Box>
    <InputGroup size='md' display='flex' flexDirection='column-reverse' gap='10'>
    <Input 
   value={username}
    onChange={(e)=>{setUsername(e.target.value)}}
    placeholder='please enter your email' type='email'></Input>

      <Input
       
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Flex>
    <Button disabled={loading} onClick={handleSubmition}>
    SignUp
    </Button>
    <Button disabled={loading} onClick={handleLogin} >Log In</Button>
    </Flex>
     
    </Box>
   
    </Box>
  )
}

export default Login