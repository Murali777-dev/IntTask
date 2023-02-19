import logo from './logo.svg';
// import './App.css';
import { LoginPage } from './components/loginPage';
import { View } from './components/DashBoardPage';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/' element = {<LoginPage/>}/>
      <Route path='view' element = {<View/>}/>
    </Routes>
  );
}

export default App;