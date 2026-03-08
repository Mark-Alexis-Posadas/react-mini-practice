const Flex = ({
  children,
  justify = "center",
  align = "center",
  className = "",
}) => {
  return (
    <div className={`flex justify-${justify} items-${align} ${className}`}>
      {children}
    </div>
  );
};

export default Flex;
