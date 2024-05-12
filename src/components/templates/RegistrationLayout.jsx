import HeadingText from "../molecules/HeadingText/index.jsx";
import SubheadingText from "../molecules/SubheadingText/index.jsx";
import BaseTypography from "../atoms/Typography/index.jsx";
import BaseButton from "../atoms/Button/index.jsx";
import ContainerLayout from "./ContainerLayout.jsx";

const RegistrationLayout = ({ color = "green" }) => {
  return (
    <>
      <ContainerLayout>
        <div className="text-center">
          <HeadingText color={color} label="Registration" />
          <section>
            <div className="my-10 ">
              <SubheadingText color="black" label="Indonesia" />
            </div>
            <LocalPriceListCard color={color} />
          </section>
          <section>
            <div className="my-10">
              <SubheadingText color="black" label="International" />
            </div>
            <InterPriceListCard color={color} />
          </section>
        </div>
      </ContainerLayout>
    </>
  );
};

const localPriceList = [
  {
    id: "1",
    as: "PRESENTER",
    price: "IDR3.000.000",
    location: "onsite & online",
  },
  {
    id: "2",
    as: "AUDIENCE",
    price: "IDR1.000.000",
    location: "onsite",
  },
  {
    id: "3",
    as: "AUDIENCE",
    price: "IDR100.000",
    location: "online",
  },
];

const internationalPriceList = [
  {
    id: "1",
    as: "PRESENTER",
    price: "USD 250",
    location: "onsite & online",
  },
  {
    id: "2",
    as: "AUDIENCE",
    price: "USD 75",
    location: "onsite",
  },
];

const LocalPriceListCard = ({ color }) => {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {localPriceList.map((price) => (
          <div
            key={price.id}
            className="rounded-2xl p-10 text-center shadow-md"
          >
            <SubheadingText color={color} label={price.as} />
            <div className="mb-3 mt-7">
              <SubheadingText color="black" label={price.price} />
            </div>
            <div className="mb-7">
              <BaseTypography
                color="gray"
                label={price.location}
                className="text-opacity-60"
              />
            </div>
            <div className="">
              <BaseButton color={color} label="pay" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const InterPriceListCard = ({ color }) => {
  return (
    <>
      <div className="mx-auto max-w-xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {internationalPriceList.map((price) => (
            <div
              key={price.id}
              className="rounded-2xl p-10 text-center shadow-md"
            >
              <SubheadingText color={color} label={price.as} />
              <div className="mb-3 mt-7">
                <SubheadingText color="black" label={price.price} />
              </div>
              <div className="mb-7">
                <BaseTypography
                  color="gray"
                  label={price.location}
                  className="text-opacity-60"
                />
              </div>
              <div className="">
                <BaseButton color={color} label="pay" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RegistrationLayout;
