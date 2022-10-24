import React, { useState } from 'react';
import './App.css';

//JSX 표현하는 타입이 있음. JSX.Element
let box :JSX.Element = <div></div>


function App() {
  // useState 타입지정 - 타입스크립트가 자동으로 타입을 지정해준다. 
  // 가끔 string | number을 타입으로 지정하고 싶을 땐?
  let [user, setUser] = useState<string | number>('kim');

  return (
    <div>
      <h4>안녕하십니까</h4>
      {/* component props 타입지정 */}
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}

// component 만들 때 타입지정
// 함수타입지정은 파라미터 & return 값

function Profile(props :{name :string, age :string}) :JSX.Element{
  return(
    <div>{props.name}프로필입니다.</div>
  )
}

export default App;
