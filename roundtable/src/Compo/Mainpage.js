import { Box ,Flex, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import Red from '../assets/plus.png'
import Roundtable from '../assets/roundtable.jpeg'
import Cms from '../assets/cms.png'
import Sound from '../assets/sound.png'
import Publish from '../assets/publish.png'
import Regis from '../assets/regis.png'
import Review from '../Compo/Review'

const Mainpage = () => {
  return (
    <Box>
    <Flex py='2' gap='2' justifyContent='center'><Box backgroundImage={Red} backgroundPosition='center' backgroundSize='cover' heigth='12' width='12'></Box> <span fontWeight='bold'  > Nepal RedCross</span>
    <span>Round Table donation to support Ukrainian family in need</span>
    </Flex>
    <Box backgroundImage={Roundtable} backgroundPosition='center' backgroundSize='cover' height='400' width='100%' ></Box>

    <Box pt='20' >
    <Heading>Our Services</Heading>
    
    <Flex flexWrap='wrap' justifyContent='center' gap='10' pt='20' >
    <Flex  px='10' width='300px' height='300px ' alignItems='center' flexDirection='column'>
    <Box backgroundImage={Cms} backgroundPosition='center' backgroundSize='cover' h='50px' w='50px'></Box>
    <Text fontWeight='bold'>Conference Management System</Text>
    <text color='gray'>From managing program committees to publishing proceedings, our RoundTable system has got you covered.</text>

    </Flex>
    <Flex  px='10' width='300px' min-height='300px ' alignItems='center' flexDirection='column'>
    <Box backgroundImage={Regis} backgroundPosition='center' backgroundSize='cover' h='50px' w='50px'></Box>
    <Text fontWeight='bold'>Registration</Text>
    <text color='gray'>We can create complex registration forms to support your attendee registration and make registration up in running in a few hours. We can help you accept online payments in 14 currencies. Your authors and reviewers can register using the same environment they used for submission and reviewing.</text>

    </Flex>
    
    <Flex  px='10' width='300px' height='300px ' alignItems='center' flexDirection='column'>
    <Box backgroundImage={Sound} backgroundPosition='center' backgroundSize='cover' h='50px' w='50px'></Box>
    <Text fontWeight='bold'>Smart CFP</Text>
    <text color='gray'>Within minutes, you can publish your conference call for submissions and reach our 2 million users. With 1.8 million monthly visitors, your conference is guaranteed to reach your target audience.</text>

    </Flex>
    
    <Flex  px='10' width='300px' min-height='300px ' alignItems='center' flexDirection='column'>
    <Box backgroundImage={Publish} backgroundPosition='center' backgroundSize='cover' h='50px' w='50px'></Box>
    <Text fontWeight='bold'>Publishing</Text>
    <text color='gray'>Our publishing services range from computing to health sciences (see full list). They provide fast and flexible publication of proceedings and collections in various areas of science. Publication services are integrated with conference management, thus providing a seamless process of submission-to-publication of reviewed content.</text>

    </Flex>
   
    
    </Flex>
    </Box>
     

    <Review/>


    </Box>
  )
}

export default Mainpage