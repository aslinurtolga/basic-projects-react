import React from 'react'
import DotLoader from "react-spinners/DotLoader";


const Loading = () => {
  return (
    <div className="text-center loading">
      <DotLoader color="#E26A2C" />
    </div>
  );
}

export default Loading