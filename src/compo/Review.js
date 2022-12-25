import { Box, Flex } from '@chakra-ui/react'
import React,{useState} from 'react'
import Asish from '../assets/asish.png'
import Rajat from '../assets/rajat.png'

const Review = () => {

 const [one, setone] = useState(false)
 
  return (
    <Box px='10' py='10' backgroundColor='blue.100'>
    {one ? (<Flex flexDirection='column' alignItems='center'>
    <Box>As you know, I consider RoundTable is critical to the success of Elitespotless Cleaning. It would be impossible to manage so many papers, programs, and proceedings without the support of roundtable.</Box>
    <Box borderRadius='50%' h='100px' w='100px' backgroundSize="cover" backgroundPosition="center" backgroundImage={Rajat}>
    </Box>
    <Box fontWeight='bold'>Rajat Chhetri</Box>
    <Box color='gray'> CEO, Elitespotless Cleaning Company.</Box>
    </Flex>):(<Flex flexDirection='column' alignItems='center'>
    <Box>As you know, I consider RoundTable is critical to the success of Elitespotless Cleaning. It would be impossible to manage so many papers, programs, and proceedings without the support of roundtable.</Box>
    <Box borderRadius='50%' h='100px' w='100px' backgroundSize="cover" backgroundPosition="center" backgroundImage={Asish}>
    </Box>
    <Box fontWeight='bold'>Ashish Bhandari</Box>
    <Box color='gray'> Director, chairPerson, Elitespotless Cleaning Company.</Box>
    </Flex>)}
    <Flex alignItems='center' justifyContent='center' gap='4'><Box borderRadius='50%' h='10px' w='10px' backgroundColor='black' onClick={()=>setone(false)}></Box><Box borderRadius='50%' h='10px' w='10px' backgroundColor='gray'onClick={()=>setone(true)}></Box></Flex>
    </Box>
  )
}

export default Review