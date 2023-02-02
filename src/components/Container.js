import React from 'react';
import {useDispatch} from "react-redux"
const Container = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default Container;
