import React from 'react';

function Loading(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img alt="loading" className="w-10 mb-2" src="loading.gif"/>
      <span className="text-sm">Wait a moment...</span>
    </div>
  );
}

export default Loading;
