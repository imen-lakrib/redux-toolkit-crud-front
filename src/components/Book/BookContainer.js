import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import {useDispatch, useSelector} from "react-redux"
import { getBooks, deleteBook } from '../../store/bookSlice';
import './book.css';
import { toast } from 'react-toastify';
import { getSelectedData } from '../../store/bookSlice';


const PostContainer = () => {
  const {isLoading, books, isError, selectedBookInfo}= useSelector((state)=> state.books)
  const {isLoggedIn} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getBooks())
  },[dispatch])
  {isError && toast.error("something went wrong!")}

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
     
        <div className='col'>
          <BooksList getSelectedData={getSelectedData} deleteBook={deleteBook} dispatch={dispatch} isLoggedIn={isLoggedIn} isLoading={isLoading} books={books} isError={isError} />
        </div>
        <div className='col side-line'>
          <BookInfo getSelectedData={getSelectedData} selectedBookInfo={selectedBookInfo} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
