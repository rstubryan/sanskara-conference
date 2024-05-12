import { Button } from "@material-tailwind/react";

const BaseButton = (props) => {
  const {
    color = "green",
    size,
    variant = "filled",
    label,
    onClick,
    className,
  } = props;
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
