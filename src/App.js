import "./App.css";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from "./ZeroZilla/Component/Home";
import Prosuctdeatils from "./ZeroZilla/Component/Prosuctdeatils";
import Header from "./ZeroZilla/Component/Header";



function App() {
  return (

    <Router>
    <div className='container-fluid'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Prosuctdeatils />} />
      
      </Routes>
    </div>
  </Router>
  
   

  );
}

export default App;


