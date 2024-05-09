import CountdownCounter from "../../molecules/CountdownCounter/index.jsx";

const CountdownConference = () => {
  return (
    <>
      <div className="flex items-center gap-5">
        <CountdownCounter dd="00" hh="00" mm="00" ss="00" />
      </div>
    </>
  );
};

export default CountdownConference;
