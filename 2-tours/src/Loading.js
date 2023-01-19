import React from 'react'
import DotLoader from "react-spinners/DotLoader";


const Loading = () => {
  return (
    <div className="text-center loading">
      <DotLoader color="#6C00FF" />
    </div>
  );
}

export default Loading