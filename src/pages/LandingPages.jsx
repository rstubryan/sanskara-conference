import BaseButton from "../components/atoms/Button/index.jsx";
import IdentityForm from "../components/organisms/IdentityForm/index.jsx";
import CategoryForm from "../components/organisms/CategoryForm/index.jsx";
import PriceForm from "../components/organisms/PriceForm/index.jsx";
import CountdownConference from "../components/organisms/CountdownConference/index.jsx";
import RundownConference from "../components/organisms/RundownConference/index.jsx";
import BaseTypography from "../components/atoms/Typography/index.jsx";

const LandingPages = () => {
  return (
    <>
      <div className="container p-5">
        <h1 className="text-black text-3xl text-center font-bold">
          Documentation (Usages)
        </h1>

        <BaseTypography
          variant="h1"
          color="green"
          label="hello"
          className="bg-red-900"
        />

        <section id="header-logo" className="mb-5">
          <h1 className="text-black text-xl font-semibold text-start mb-3">
            Header logo
          </h1>
          <div className="w-full h-24 bg-green-500 flex flex-col justify-center items-center ">
            <div className="">
              <h1 className="">Hello</h1>
            </div>
            <div className="">
              <h1 className="">Hello</h1>
            </div>
          </div>
        </section>

        <section id="rundown-countdown">
          <div className="flex justify-between max-w-xl mx-auto">
            <RundownConference />
            <div className="h-20 w-1 rounded-full bg-black"></div>
            <CountdownConference />
          </div>
        </section>

        <section id="button" className="mb-5">
          <h1 className="text-black text-xl font-semibold text-start mb-3">
            Button
          </h1>
          <BaseButton color="green" label="Hello" />
        </section>

        <IdentityForm />

        <CategoryForm />

        <PriceForm />
      </div>
    </>
  );
};

export default LandingPages;
