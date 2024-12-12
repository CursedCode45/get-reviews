import './App.css';
import Top from './Top';
import Home from './Home';
import ReviewsPage from './ReviewsPage';
import { Link, Route, Routes } from 'react-router-dom';


function MainPage() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}


function Contact() {
  return (
  <div className="a">
      <h1>
        Contact
      </h1>
  </div>
  );
}


export default function App() {
  return (
    <>
    <Top/>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/get-reviews' element={<ReviewsPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

