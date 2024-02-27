import React from "react";

const Input = ({
  type,
  placeholder,
  width,
  height,
  rounded,
  border,
  onChanged,
  outline,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        border: border,
        borderRadius: rounded,
        outline: outline,
        width: width,
        height: height,
      }}
      onChange={onChanged}
    />
  );
};

export default Input;
