import React from "react"; // 신버전에서는 생략가능
import Card from "./UI/Card";

const Greet = (ccc) => {
  return (
    <>
    <Card className='border-green'>
      <h1>
        Hello REACT!
        {ccc.children}
      </h1>
    </Card>
    </>
  );
};

export default Greet;