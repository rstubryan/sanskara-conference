import { Input } from "@material-tailwind/react";

const BaseInput = (props) => {
  const { name, type, label } = props;
  return (
    <>
      <Input
        name={name}
        type={type}
        label={label}
        icon={<i className="fas fa-heart" />}
      />
    </>
  );
};

export default BaseInput;
