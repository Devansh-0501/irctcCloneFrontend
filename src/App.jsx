
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer';
import './styles/app.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainSearch from './components/trainSearch';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      
      <Route path="/" element={<TrainSearch />} />
      
     
     
      

    </Routes>
    <Footer />
  </Router>

   
  );
}

export default App;
