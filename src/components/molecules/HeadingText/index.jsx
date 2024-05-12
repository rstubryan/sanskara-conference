import BaseTypography from "../../atoms/Typography/index.jsx";

const HeadingText = (props) => {
  const { color = "green", label } = props;

  return (
    <>
      <BaseTypography
        variant="h2"
        color={color}
        label={label}
        className="text-2xl uppercase lg:text-4xl"
      />
    </>
  );
};

export default HeadingText;
