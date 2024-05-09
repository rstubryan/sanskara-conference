import PlaceholderCountdown from "../../atoms/PlaceholderCountdown/index.jsx";

const CountdownCounter = (props) => {
  const { dd, hh, mm, ss } = props;

  return (
    <>
      <PlaceholderCountdown number={dd} label="days" />
      <PlaceholderCountdown number={hh} label="hours" />
      <PlaceholderCountdown number={mm} label="minutes" />
      <PlaceholderCountdown number={ss} label="seconds" />
    </>
  );
};

export default CountdownCounter;
