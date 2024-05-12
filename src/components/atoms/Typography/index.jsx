import { Typography } from "@material-tailwind/react";

const BaseTypography = ({ variant, color, label, className }) => {
  return (
    <>
      <Typography variant={variant} color={color} className={className}>
        {label}
      </Typography>
    </>
  );
};

export default BaseTypography;
