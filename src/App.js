import './App.css';
import Top from './Top';
import Home from './Home';
import ReviewsPage from './ReviewsPage';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


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
  </div>
  );
}


export default function App() {
  return (
    <>
    <Top/>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/buy-reviews' element={<ReviewsPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

