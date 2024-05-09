import { Checkbox } from "@material-tailwind/react";

const BaseCheckbox = (props) => {
  const { children } = props;

  return (
    <>
      <Checkbox label={children} />
    </>
  );
};

export default BaseCheckbox;
