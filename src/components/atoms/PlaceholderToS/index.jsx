import { Typography } from "@material-tailwind/react";

const BasePlaceholderToS = () => {
  return (
    <>
      <Typography color="black" className="flex font-medium text-gray-500">
        Saya menyetujui
        <Typography
          as="a"
          href="https://google.com"
          target="_blank"
          color="gray"
          className="font-semibold transition-colors text-gray-500 hover:text-gray-700"
        >
          &nbsp;Syarat dan Ketentuan dan Kebijakan Privasi&nbsp;
        </Typography>
        yang berlaku.
      </Typography>
    </>
  );
};

export default BasePlaceholderToS;
