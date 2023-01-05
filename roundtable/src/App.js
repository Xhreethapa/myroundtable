import './App.css';
import Footer from './Compo/Footer';
import Mainpage from './Compo/Mainpage';
import Navbar from './Navbar';
import Rotate from './Compo/Rotate';
import RotateMe from './assets/rotateme.png'
import Rotatetive from './Compo/Rotatetive';
import Tablerotate from './assets/tablerotate.png'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Feed from './Compo/Feed';
import { Box } from '@chakra-ui/react';

function App() {
  return (
   <Router>
   <Box>
   <Navbar/>
   <Rotatetive imageUrl={RotateMe}/>
   
  <Routes>
  <Route path='/' element={<Mainpage/>}/> 
  <Route path='/feed' element={<Feed/>}/>
  </Routes>
   
   
  
 
 <Footer/>
   </Box>
   </Router>
   
   
 

   

  );
}

export default App;
