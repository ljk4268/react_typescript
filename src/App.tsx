import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {RootState, increment, decrement, incrementByAmount} from './index';
import {Dispatch} from 'redux';

//JSX 표현하는 타입이 있음. JSX.Element
let box :JSX.Element = <div></div>


function App() {
  const 꺼내온거 = useSelector( (state : RootState) => state );
  const dispatch = useDispatch();

  return (
    <div className='App'>
      {꺼내온거.counter1.count}
      <button onClick={()=>{dispatch(increment())}}>버튼</button>
    </div>
  );
}



export default App;
