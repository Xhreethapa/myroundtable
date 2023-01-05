import React,{useState, useEffect} from 'react'
import { Box, Flex ,Button, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, Text,} from '@chakra-ui/react'
import Login from './Compo/Login'
import { useAuth,logout } from './firebase'
import {useNavigate, NavLink} from 'react-router-dom'



const Navbar = () => {
  
 const [login, setlogin] = useState(false)
 const [open, setopen] = useState(false)
 const currentUser =useAuth();

 async function handleLogOut(){
   try{
    logout();
   }
   catch{
    alert('error')
   }
 }
 const openLogin =()=>{

   setopen(true)
 }

 const closeLogin =()=>{

  setlogin(false)
}
const navigate= useNavigate();
useEffect(() => {
  if(!currentUser){
        navigate('/');
        alert('please login or sign up to continue');
  }
}, [])


  
  return (
  <Box px='20' py='2' borderBottom='1px solid black'>
  <Flex justifyContent='space-between' flexDirection={{base:'column', sm:'column', md:'row'}}>
  <Flex gap='0.5' align='center'>
  <Box borderRadius='12px 0px 0px 12px' h='10' width='10' backgroundColor='gray'></Box>
  <Box borderRadius='0px 12px 12px 0px' h='10' width='10' backgroundColor='black'></Box>
  <Box>Round Table</Box>
 
  </Flex>
  <Flex alignItems='center' gap='5'>
  <Box>Services</Box>
  <Box>About Us</Box>
  <Box>For Conference</Box>
  </Flex>
  <Flex gap='2' alignItems='center'>
  <NavLink to= '/feed'> <Button colorScheme='red' size='xs'>
  Create Conference
 </Button></NavLink>
  {currentUser? <>{currentUser.email} <Button onClick={handleLogOut}>'Logout'</Button></>:<> <Button colorScheme='facebook' size='xs' onClick={()=>setlogin(!login)}>
  login
 </Button> </>}
 
  </Flex>
  </Flex>
{login? (<><Modal isOpen={openLogin} onClose={closeLogin}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Round Table</ModalHeader>
    <Text px='10'> {currentUser?.email} </Text>
    <ModalCloseButton />
    <ModalBody>
   {currentUser? <></> :<Login closeLogin={closeLogin}/>}
     
    </ModalBody>

    <ModalFooter>
      
    
    </ModalFooter>
  </ModalContent>
</Modal></>):(<></>)}
  </Box>
  
  )
}

export default Navbar