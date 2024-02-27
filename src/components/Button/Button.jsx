const Button = ({
  onClickFoo,
  children,
  width,
  height,
  backgroundColor,
  rounded,
  textColor,
}) => {
  return (
    <button
      onClick={onClickFoo}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: rounded,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
