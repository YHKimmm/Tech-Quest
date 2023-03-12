import React from "react";

export default function Spinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
        <div className="h-9 w-9 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
}
