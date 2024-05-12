import BaseTypography from "../../atoms/Typography/index.jsx";

const RundownCounter = (props) => {
  const { location, nation, dd, month, yyyy } = props;
  return (
    <>
      <section>
        <BaseTypography
          variant="h5"
          color="white"
          label={location + ", " + nation}
          className="text-base font-normal lg:text-xl"
        />
        <article className="flex items-center justify-center lg:justify-between">
          <BaseTypography
            color="white"
            label={dd}
            className="font-normal lg:text-7xl lg:font-semibold"
          />
          <div className="flex items-center justify-center lg:flex-col">
            <BaseTypography
              variant="h4"
              color="white"
              className="text-base font-normal leading-tight lg:text-2xl"
              label={<>&nbsp;{month}&nbsp;</>}
            />
            <BaseTypography
              variant="h4"
              color="white"
              className="text-base font-normal font-normal leading-tight lg:text-2xl"
              label={<>{yyyy}</>}
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default RundownCounter;
