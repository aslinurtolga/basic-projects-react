import React from 'react'
import DotLoader from "react-spinners/DotLoader";


const Loading = () => {
  return (
    <div className="text-center loading">
      <DotLoader color="#36d7b7" />
    </div>
  );
}

export default Loading