import './App.css';
import Footer from './compo/Footer';
import Mainpage from './compo/Mainpage';
import Nav from './compo/Nav';
import Review from './compo/Review';

function App() {
  return (
    <div className="App">
   <Nav></Nav>
   <Mainpage></Mainpage>
   <Review/>
   <Footer/>
    </div>
  );
}

export default App;
