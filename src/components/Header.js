import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Header = () => {
  const {isError}= useSelector(state=> state.books)
  return (
    <>
     
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' type='submit'>
        Log In
      </button>
    </nav>
    

    </>
  );
};

export default Header;