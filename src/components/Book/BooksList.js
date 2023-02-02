import React from 'react';
import { deleteBook } from '../../store/bookSlice';
import { getSelectedData } from '../../store/bookSlice';

const BooksList = ({isLoading, books, isError, isLoggedIn, dispatch}) => {
  console.log(`in booklist ${isLoading}`)

    //delete handler
    const deleteBookHandler = (id) => {
      dispatch(deleteBook(id))
        
    };
    //selected handler
    const selected = (id) => {
      dispatch(getSelectedData(id))
        
    };
  
  return (
    <div>
      <h2>Books List</h2>
      <ul className='list-group'>
        {isLoading ? ("loading"): 
        books && books.map(book=>{
          return(
            <li key={book.id} className='list-group-item d-flex  justify-content-between align-items-center'>
        <div>{book.title}</div>
        <div className='btn-group' role='group'>
          <button onClick={()=>selected(book)} type='button' className='btn btn-primary' disabled={!isLoggedIn}>
            Read
          </button>
          <button  onClick={() => deleteBookHandler(book)} type='button' className='btn btn-danger' disabled={!isLoggedIn}>
            Delete
          </button>
        </div>
      </li>
          )
        })

        }
        {isError && !isLoading && (<li>{isError}</li>)}
      </ul>
    </div>
  );
};

export default BooksList;
