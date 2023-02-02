import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import { logInOut } from '../store/authSlice';

const Header = () => {
  const {isLoggedIn} = useSelector(state => state.auth)
  const {isError}= useSelector(state=> state.books)
  const dispatch = useDispatch()

  return (
    <>
     
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button onClick={()=>dispatch(logInOut())} className='btn btn-outline-primary' type='submit'>
        {isLoggedIn ? 'logOut': "logIn"}
      </button>
    </nav>
    

    </>
  );
};

export default Header;
