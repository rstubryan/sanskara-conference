import BaseTypography from "../../atoms/Typography/index.jsx";

const RundownCounter = ({ location, nation, dd, month, yyyy }) => {
  return (
    <>
      <section>
        <LocationEvent location={location} nation={nation} />
        <article className="flex items-center justify-center lg:justify-between">
          <DayEvent dd={dd} />
          <div className="flex items-center justify-center lg:flex-col">
            <MonthEvent month={month} />
            <YearEvent yyyy={yyyy} />
          </div>
        </article>
      </section>
    </>
  );
};

const LocationEvent = ({
  location,
  nation,
  variant = "h5",
  color = "white",
}) => {
  return (
    <BaseTypography
      variant={variant}
      color={color}
      label={location + ", " + nation}
      className="text-base font-normal lg:text-xl"
    />
  );
};

const DayEvent = ({ dd, variant = "h1", color = "white" }) => {
  return (
    <BaseTypography
      variant={variant}
      color={color}
      label={dd}
      className="font-normal lg:text-7xl lg:font-semibold"
    />
  );
};

const MonthEvent = ({ month, variant = "h4", color = "white" }) => {
  return (
    <BaseTypography
      variant={variant}
      color={color}
      label={<>&nbsp;{month}&nbsp;</>}
      className="text-base font-normal leading-tight lg:text-2xl"
    />
  );
};

const YearEvent = ({ yyyy, variant = "h4", color = "white" }) => {
  return (
    <BaseTypography
      variant={variant}
      color={color}
      className="text-base font-normal leading-tight lg:text-2xl"
      label={<>{yyyy}</>}
    />
  );
};

export default RundownCounter;
