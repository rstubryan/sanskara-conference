import { Select, Option } from "@material-tailwind/react";

const BaseSelect = ({ color = "green", label, options }) => {
  return (
    <>
      <Select label={label} color={color}>
        {options.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </Select>
    </>
  );
};

export default BaseSelect;
