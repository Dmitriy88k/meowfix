//import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/header/header"
import Hours from "./components/hours/hours"
import './App.css';
import MainPic from "./assets/main.jpg"


function App() {
  return (
    <div>
      <Header/>
      <img src={MainPic} alt="" />
      <Hours/>
    </div>
  );
}

export default App;
