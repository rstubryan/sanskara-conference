import { Checkbox } from "@material-tailwind/react";
import BaseTypography from "../Typography/index.jsx";

const BaseCheckbox = () => {
  return (
    <>
      <Checkbox
        label={
          <>
            <BaseTypography
              variant="small"
              label="Saya menyetujui Syarat dan Ketentuan dan Kebijakan Privasi yang berlaku"
              className="font-light opacity-50"
            />
          </>
        }
      />
    </>
  );
};

export default BaseCheckbox;
