import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import {useDispatch, useSelector} from "react-redux"
import { getBooks } from '../../store/bookSlice';
import './book.css';
import { toast } from 'react-toastify';

const PostContainer = () => {
  const {isLoading, books, isError}= useSelector((state)=> state.books)
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
          <BooksList isLoading={isLoading} books={books} isError={isError} />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
