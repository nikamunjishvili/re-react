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
  value
}) => {
  return (
    <input
      type={type}
      value={value}
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
