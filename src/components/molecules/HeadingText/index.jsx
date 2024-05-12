import BaseTypography from "../../atoms/Typography/index.jsx";

const HeadingText = ({ variant = "h2", color = "green", label }) => {
  return (
    <>
      <BaseTypography
        variant={variant}
        color={color}
        label={label}
        className="text-2xl uppercase lg:text-4xl"
      />
    </>
  );
};

export default HeadingText;
