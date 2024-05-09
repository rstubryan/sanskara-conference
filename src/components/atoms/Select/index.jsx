import { Select, Option } from "@material-tailwind/react";

const BaseSelect = (props) => {
  const { label, options } = props;

  return (
    <>
      <Select label={label}>
        {options.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </Select>
    </>
  );
};

export default BaseSelect;
