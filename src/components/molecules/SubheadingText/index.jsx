import BaseTypography from "../../atoms/Typography/index.jsx";

const SubheadingText = (props) => {
  const { label } = props;

  return (
    <>
      <BaseTypography variant="h4" color="green" label={label} />
    </>
  );
};

export default SubheadingText;
