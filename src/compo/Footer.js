import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <Box backgroundColor='gray.500' height='300px' >
    <Box >
    <Flex justifyContent='space-evenly'>
             <Flex flexDirection="column"  >
                <Box fontWeight='bold'>Services</Box>
                <Flex flexDirection="column" height="250" justifyContent='space-evenly'>
                <Box>Conference Management</Box>
                <Box>Registration</Box>
                <Box>Publishing</Box>
                <Box>VCS</Box>
                </Flex>
             </Flex>
             <Flex flexDirection="column" >
                 <Box fontWeight='bold'>About Us</Box>
                 <Flex flexDirection="column" height="250" justifyContent='space-evenly'>
                 
                 <Box>About Us</Box>
                 <Box>Contact</Box>
                 <Box>Terms of Service</Box>
                 </Flex>
             </Flex>
             <Flex flexDirection="column">
                 <Box fontWeight='bold'>Conference</Box>
                 <Flex flexDirection="column" height="250" justifyContent='space-evenly'>
                 <Box>Create Conference</Box>
                 <Box>FAQ</Box>
                 
                 </Flex>
             </Flex>
             <Flex flexDirection="column" >

             <Box fontWeight='bold'>Follow Us</Box>

             <Flex gap='4' justifyContent='center' height='250'> <Box borderRadius='50%' h='25px' w='25px' backgroundSize="cover" backgroundPosition="center" backgroundImage={Facebook}></Box> 
             <Box borderRadius='50%' h='25px' w='25px' backgroundSize="cover" backgroundPosition="center" backgroundImage={Twitter}></Box>
             </Flex>
             </Flex>
    </Flex>

    </Box>

    </Box>
  )
}

export default Footer