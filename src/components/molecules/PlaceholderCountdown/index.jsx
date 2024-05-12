import BaseTypography from "../../atoms/Typography/index.jsx";

const PlaceholderCountdown = ({ variant, label, number }) => {
  return (
    <>
      <div className="text-center">
        <NumberCountdown variant={variant} label={number} />
        <TextCountdown variant={variant} label={label} />
      </div>
    </>
  );
};

const NumberCountdown = ({ variant, color = "white", label }) => {
  return (
    <>
      <BaseTypography
        variant={variant}
        color={color}
        label={label}
        className="text-4xl font-semibold lg:text-6xl"
      />
    </>
  );
};

const TextCountdown = ({ variant, color = "white", label }) => {
  return (
    <BaseTypography
      variant={variant}
      color={color}
      label={label}
      className="text-base font-light lg:text-2xl"
    />
  );
};

export default PlaceholderCountdown;
