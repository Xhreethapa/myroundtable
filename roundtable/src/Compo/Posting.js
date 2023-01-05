import { Button, Flex, Input } from '@chakra-ui/react'
import React,{useState, useEffect} from 'react'
import AllFeeds from './AllFeeds'
import './Posting.css'
import { auth, db } from '../firebase'
import {addDoc, collection, onSnapshot, query, QuerySnapshot} from 'firebase/firestore'

const Posting = ({currentUser}) => {
    const [input, setInput] = useState("")
     const [imageUrl, setImageUrl] = useState("")
   const [posts, setPosts] = useState([]);


       
        const handleSubmit = async (e)=>{
           e.preventDefault();
            alert('vayo vayo');
         await addDoc(collection(db,'posts'),{
            input: input,
            imageUrl: imageUrl,
            user: currentUser.email
          });

        setInput("");
        setImageUrl('');
        }



useEffect(() => {
 const q = query(collection(db,'posts'));
 const unSub= onSnapshot(q,(querySnapshot)=>{
    let postsArray=[];
    querySnapshot.forEach((doc)=>{
        postsArray.push({...doc.data(), id: doc.id});
    });
    setPosts(postsArray);
 })

  return () => unSub;
}, [])


  
   
  return (
    <div>
    <div className="messagesender__top">
    <div ></div>
    <form>
    <Flex  gap='5' flexDirection={{base:'column',sm:'column', md:'column'}}>
    <Input value={input} 
    onChange={(e)=> setInput(e.target.value)}   placeholder={"Write your articles or Post it??"}/>
    <Input value={imageUrl} 
    onChange={(e)=>setImageUrl(e.target.value)} placeholder={"image URL(optional)"} />
    </Flex>
    <Button onClick={handleSubmit}>submit</Button>   
       
    </form>


</div>
  {posts.map((post)=>( <AllFeeds py='10' key={post.id}
     message={post.input}
    image={post.imageUrl}
    user={post.user} />))}
   



        


    </div>
  )
}

export default Posting