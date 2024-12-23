import React from "react";

const Button = ({ children, img, style, color }) => {
  return (
    <button
      className={`${style} hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-sm bg-black text-white flex items-center`}
    >
      <span className={`${color} ml-1`}>{children}</span>
      {img && <img src={img} alt="button icon" className="ml-2 w-6 h-6" />}
    </button>
  );
};

export default Button;
