import React from "react";

const Button = ({ label, onClick, type, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className + " " +"border-transparent border-2 focus:border-black active:bg-[#388E3B] disabled:bg-[#F5F7FA] disabled:text-[#c2c2c2]"}      
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'button',
  className: '',
};
export default Button;

