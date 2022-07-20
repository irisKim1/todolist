import { useEffect } from 'react';


export const test = () => {


useEffect(() => { // 이부분 작성
  console.log('컴포넌트가 화면에 나타남');
  return () => {
    console.log('컴포넌트가 화면에서 사라짐');
  };
}, []);
  return(
    <div> hi </div>
  )
}