import { Button } from "@material-tailwind/react";

const BaseButton = ({
  color = "green",
  size,
  variant = "filled",
  label,
  onClick,
  className,
}) => {
  return (
    <>
      <Button
        color={color}
        size={size}
        variant={variant}
        onClick={onClick}
        className={className}
      >
        {label}
      </Button>
    </>
  );
};

export default BaseButton;
