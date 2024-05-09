import { Button } from "@material-tailwind/react";

const BaseButton = (props) => {
  const { color, size, variant = "filled", label, onClick } = props;
  return (
    <>
      <Button color={color} size={size} variant={variant} onClick={onClick}>
        {label}
      </Button>
    </>
  );
};

export default BaseButton;
