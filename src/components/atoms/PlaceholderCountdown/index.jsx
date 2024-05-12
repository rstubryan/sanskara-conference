import BaseTypography from "../Typography/index.jsx";

const PlaceholderCountdown = (props) => {
  const { variant = "h3", number, label } = props;
  return (
    <>
      <div className="text-center">
        <BaseTypography
          variant={variant}
          color="white"
          label={number}
          className="text-2xl lg:text-6xl"
        />
        <BaseTypography
          variant="h4"
          color="white"
          label={label}
          className="text-base font-light lg:text-2xl"
        />
      </div>
    </>
  );
};

export default PlaceholderCountdown;
