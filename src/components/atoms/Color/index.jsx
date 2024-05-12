const ColorTheme = ({ color, children }) => {
  return (
    <>
      <div className={`bg-${color}-500`}>{children}</div>
    </>
  );
};

export default ColorTheme;
