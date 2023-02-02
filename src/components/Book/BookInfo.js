import React, { Fragment } from 'react';

const BookInfo = ({getSelectedData,selectedBookInfo}) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {selectedBookInfo ? (<div>
        <p className='fw-bold'>Title:{selectedBookInfo.title}</p>
        <p className='fw-light'>Description:{selectedBookInfo.description}</p>
        <p className='fst-italic'>Price:{selectedBookInfo.price}</p>
      </div>): (<div className='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div>)}
      
      {/*  */}
    </Fragment>
  );
};

export default BookInfo;
