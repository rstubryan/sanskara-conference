import PlaceholderCountdown from "../PlaceholderCountdown/index.jsx";

const CountdownCounter = ({ dd, hh, mm, ss }) => {
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
