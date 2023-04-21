import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav__container'>
            <div className='nav__items'>
                <Link to='/comparison' className='nav__item1' >COMPARISON CHART</Link>
                <Link to='/time-series' className='nav__item2' >TIME SERIES</Link>
                <Link to='/windiest-day' className='nav__item3' >WIND GUAGE</Link>
            </div>
            <div className='nav__dark'>
                <button className='dark__btn'>DARK MODE</button>
            </div>
        </div>
    )
}

export default Navbar