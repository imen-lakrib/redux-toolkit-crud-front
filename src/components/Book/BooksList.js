import React from 'react';

const BooksList = ({isLoading, books, isError}) => {
  console.log(`in booklist ${isLoading}`)
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
          <button type='button' className='btn btn-primary'>
            Read
          </button>
          <button type='button' className='btn btn-danger'>
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
