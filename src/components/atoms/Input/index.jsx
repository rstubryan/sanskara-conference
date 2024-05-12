import { Input } from "@material-tailwind/react";

const BaseInput = ({ name, type, color = "green", label }) => {
  return (
    <>
      <Input
        name={name}
        type={type}
        color={color}
        label={label}
        icon={<i className="fas fa-heart" />}
      />
    </>
  );
};

export default BaseInput;
