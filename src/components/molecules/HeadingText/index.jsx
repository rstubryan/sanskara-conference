import BaseTypography from "../../atoms/Typography/index.jsx";

const HeadingText = (props) => {
  const { label } = props;

  return (
    <>
      <BaseTypography
        variant="h2"
        color="green"
        label={label}
        className="uppercase"
      />
    </>
  );
};

export default HeadingText;
