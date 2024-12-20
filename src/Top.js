import React from 'react';
import './Top.css';
import { Link } from 'react-router-dom';


export default function Top() {
    return (
        <header className='top-leka-header'>
            <div className='top-leka py-3 font-mono font-bold text-white flex justify-center flex-row border-sky-900 border-1 border-b-2 rounded-lg'>
                <Link to='/' className='header-text hover:text-sky-500 cursor-pointer'>Home</Link>
                <Link to='/buy-reviews' className='header-text hover:text-sky-500 cursor-pointer'>Buy Reviews</Link>
                <Link to='/contact' className='header-text hover:text-sky-500 cursor-pointer'>Contact</Link>
            </div>
        </header>
    )
}
