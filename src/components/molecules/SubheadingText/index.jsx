import BaseTypography from "../../atoms/Typography/index.jsx";

const SubheadingText = (props) => {
  const { label, color = "green", className } = props;

  return (
    <>
      <BaseTypography
        variant="h4"
        color={color}
        label={label}
        className="text-xl lg:text-2xl"
      />
    </>
  );
};

export default SubheadingText;
