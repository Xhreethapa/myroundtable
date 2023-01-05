import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React,{useState} from 'react'
import './Feeds.css'

const AllFeeds = ({message, image,user}) => {

const [coments, setcoments] = useState('');
const [openComent, setOpenComent] = useState(false);
const [allComents, setAllComents] = useState([])

const handleComent =()=>{
    setOpenComent(!openComent);




    
}

const postComent=()=>{
    let comentsArray=[];
    comentsArray.push(...allComents,coments);
   setAllComents(comentsArray);

   setcoments('');
setOpenComent(false)
}

  return (



    <div>
    
    <div className="post">
   
        <div className="post__top">
        <p>{user}</p>
          <div className="post__topinfo">
              
              <p>time</p>
          </div>
 
 
     </div>
     <div className="post__bottom">
         <p>{message}</p>
     </div>
     <div className="post__image">
         <img src={image} alt=""/>
     </div>
     <div className="post__options">
         <div className="post__option">
            
             <p>Like</p>
 
         </div>
         <div className="post__option" onClick={handleComent} >
            
             <p>Comment</p>
 
         </div>
         <div className="post__option">
             
             <p>Share</p>
 
         </div>
       
     </div>
     {allComents.map((coment)=>(<Flex key={coment} flexDirection='column' gap='3'>
        <Text>{user} . . . {coment}</Text>
       
</Flex>))}
     
     {openComent? <Flex flexDirection='column' gap='2'>
    
     <Input placeholder='please comment' value={coments} onChange={(e)=>setcoments(e.target.value)}/> <Button size='sm' py='1' px='1' colorScheme='facebook' onClick={postComent} > comment</Button>
     </Flex>
     :<></>}
     
   
 
    
</div>    
    
    </div>
  )
}

export default AllFeeds