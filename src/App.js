import React, { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <ToastContainer />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </Fragment>
  );
};

export default App;
