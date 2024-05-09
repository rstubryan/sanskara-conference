import { Typography } from "@material-tailwind/react";

const BaseTypography = (props) => {
  const { variant, color, label, className } = props;

  return (
    <>
      <Typography variant={variant} color={color} className={className}>
        {label}
      </Typography>
    </>
  );
};

export default BaseTypography;
