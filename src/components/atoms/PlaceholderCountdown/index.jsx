import BaseTypography from "../Typography/index.jsx";

const PlaceholderCountdown = (props) => {
  const { number, label } = props;
  return (
    <>
      <div className="text-center">
        <BaseTypography variant="h3" label={number} />
        <BaseTypography
          variant="paragraph"
          color="black"
          label={label}
          component="div"
        />
      </div>
    </>
  );
};

export default PlaceholderCountdown;
