import BaseTypography from "../../atoms/Typography/index.jsx";

const SubheadingText = ({ variant = "h4", label, color = "green" }) => {
  return (
    <>
      <BaseTypography
        variant={variant}
        color={color}
        label={label}
        className="text-xl lg:text-2xl"
      />
    </>
  );
};

export default SubheadingText;
