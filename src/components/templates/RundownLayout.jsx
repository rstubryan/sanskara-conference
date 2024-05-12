import RundownConference from "../organisms/RundownConference/index.jsx";
import CountdownConference from "../organisms/CountdownConference/index.jsx";
import ColorTheme from "../atoms/Color/index.jsx";

const RundownLayout = ({ color = "green" }) => {
  return (
    <>
      <ColorTheme color={color}>
        <MainLayout>
          <div className="mb-5 text-center lg:mb-0">
            <RundownConference />
          </div>
          <DividerSpace />
          <div className="flex justify-center">
            <CountdownConference />
          </div>
        </MainLayout>
      </ColorTheme>
    </>
  );
};

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="mx-auto mb-5 flex max-w-3xl flex-col justify-between py-8 lg:flex-row">
        {children}
      </div>
    </>
  );
};

const DividerSpace = ({ children }) => {
  return (
    <>
      <div className="hidden h-24 w-1 rounded-full bg-white lg:block">
        {children}
      </div>
    </>
  );
};

export default RundownLayout;
