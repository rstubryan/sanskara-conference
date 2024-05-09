import { Typography } from "@material-tailwind/react";

const BasePlaceholderToS = () => {
  return (
    <>
      <Typography
        color="black"
        className="flex font-medium text-gray-500"
        variant="small"
      >
        Saya menyetujui&nbsp;
        <Typography
          as="a"
          href="https://google.com"
          target="_blank"
          color="gray"
          variant="small"
          className="font-semibold text-gray-500 transition-colors hover:text-gray-700"
        >
          Syarat dan Ketentuan dan Kebijakan Privasi&nbsp;
        </Typography>
        yang berlaku.
      </Typography>
    </>
  );
};

export default BasePlaceholderToS;
