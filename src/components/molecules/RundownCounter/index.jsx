import BaseTypography from "../../atoms/Typography/index.jsx";

const RundownCounter = (props) => {
  const { location, nation, dd, month, yyyy } = props;
  return (
    <>
      <section>
        <BaseTypography variant="paragraph" label={location + ", " + nation} />
        <article className="flex justify-between">
          <BaseTypography label={dd} className="text-6xl" />
          <div className="flex items-center">
            <BaseTypography
              variant="paragraph"
              className="leading-tight"
              label={
                <>
                  {month}
                  <br />
                  {yyyy}
                </>
              }
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default RundownCounter;
