import React from 'react'
import { Box, Flex ,Button} from '@chakra-ui/react'

const Nav = () => {
  return (
  <Box px='20' py='2' borderBottom='1px solid black'>
  <Flex justifyContent='space-between'>
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
  <Button colorScheme='red' size='xs'>
   Create Conference
  </Button>

  <Button colorScheme='facebook' size='xs'>
   login
  </Button>
  </Flex>
  </Flex>
  </Box>
  
  )
}

export default Nav