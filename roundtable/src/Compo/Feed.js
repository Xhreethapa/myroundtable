import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SettingIcon from '../assets/settingIcon.png'
import AllFeeds from './AllFeeds'
import Posting from './Posting'
import { useAuth } from '../firebase'

const Feed = () => {


const currentUser =useAuth();  
  return (
    <>
    {currentUser? <Box >
      <Flex justifyContent='center'><Heading>Welcome to RoundTable Feeds</Heading></Flex>
      <Flex px='10' py='100' flexDirection={{base:'column',sm:'column', md:'row'}}>
      <Flex flexDirection="column">
      <Box height={{base:'50px',sm:'50px',md:'100px'}} width={{base:'50px',sm:'50px',md:'100px'}} borderRadius='50%' backgroundColor='gray'></Box>
      <Text py='5' fontWeight='bold'>{currentUser?`${currentUser.email}`:<>zero</>}</Text>
      <Flex alignItems='center' gap='2'> <Box fontWeight='bold' color='gray'>Stettings</Box><Box height='20px' width='20px' borderRadius='50%' backgroundPosition='center' backgroundSize='cover' backgroundImage={SettingIcon}> </Box></Flex>
      </Flex>
      <Flex flex='1' justifyContent='center' flexDirection='column' px={{base:'2', sm:'2', md:'20'}}>
     
          
          
               <Posting 
               currentUser={currentUser}/>
              
            
     
      </Flex>
      <Flex flexDirection="column">
      <Box fontWeight='bold' color='gray'>conferences</Box>
      <Box fontWeight='bold' color='gray'>Publish</Box>
      </Flex>
      </Flex>
      </Box>:<></>}
    
    </>
   
  )
}

export default Feed