import Header from "../components/templates/Header.jsx";
import NavbarSimple from "../components/templates/Navbar.jsx";
import ContainerLayout from "../components/templates/ContainerLayout.jsx";
import Footer from "../components/templates/Footer.jsx";
import RundownConference from "../components/organisms/RundownConference/index.jsx";
import CountdownConference from "../components/organisms/CountdownConference/index.jsx";
import HeadingText from "../components/molecules/HeadingText/index.jsx";
import SubheadingText from "../components/molecules/SubheadingText/index.jsx";
import BaseList from "../components/atoms/List/index.jsx";
import BaseTypography from "../components/atoms/Typography/index.jsx";
import BaseButton from "../components/atoms/Button/index.jsx";

const EcesiPages = () => {
  return (
    <>
      <header>
        <Header />
        <NavbarSimple />
      </header>
      <main>
        <section className="mb-5 bg-green-500">
          <div className="mx-auto flex max-w-3xl flex-col justify-between py-8 lg:flex-row">
            <div className="mb-5 text-center lg:mb-0">
              <RundownConference />
            </div>
            <div className="hidden h-24 w-1 rounded-full bg-white lg:block"></div>
            <div className="flex justify-center">
              <CountdownConference />
            </div>
          </div>
        </section>
        <ContainerLayout>
          <section className="my-5 text-center">
            <div className="my-5">
              <HeadingText label="Call For Paper" />
            </div>
            <CardLayout>
              <SubheadingText
                label="Scientific Research"
                className="font-normal"
              />
              <div>
                {scientificResearch.map(({ id, research }) => (
                  <BaseList key={id} label={research} />
                ))}
              </div>
            </CardLayout>
          </section>
          <section>
            <div className="my-10 text-center lg:flex lg:justify-between lg:text-start">
              <div className="mb-5 space-y-5 lg:space-y-0">
                <HeadingText label="Submit your Paper Now!" />
                <BaseTypography label="Eastasouth Conference On Environmental and Sustainability Issues " />
              </div>
              <div className="flex flex-row justify-center">
                <BaseButton
                  label="Submit your Paper here!"
                  className="text-md normal-case"
                />
              </div>
            </div>
          </section>
        </ContainerLayout>
        <section className="mb-5 bg-green-500">
          <ContainerLayout>
            <div className="my-5 text-center">
              <div className="mb-5">
                <HeadingText color="white" label="Important Date" />
              </div>
              <div className="">
                <div className="text-white">
                  {dateList.map((date) => (
                    <DateList key={date.date}>
                      <BaseList label={date.date} />
                      <BaseList label={date.desc} />
                    </DateList>
                  ))}
                </div>
              </div>
            </div>
          </ContainerLayout>
        </section>
        <ContainerLayout>
          <section>
            <div className="text-center">
              <HeadingText label="Registration" />
              <div className="my-10 ">
                <SubheadingText color="black" label="Indonesia" />
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {localPriceList.map((price) => (
                <div
                  key={price.id}
                  className="rounded-2xl p-10 text-center shadow-md"
                >
                  <SubheadingText label={price.as} />
                  <div className="mb-3 mt-7">
                    <SubheadingText color="black" label={price.price} />
                  </div>
                  <div className="">
                    <div className="mb-7">
                      <BaseTypography
                        color="gray"
                        label={price.location}
                        className="text-opacity-60"
                      />
                    </div>
                  </div>
                  <div className="">
                    <BaseButton label="pay" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="my-10">
                <SubheadingText color="black" label="International" />
              </div>
            </div>
            <div className="mx-auto max-w-xl">
              <div className="grid gap-6 lg:grid-cols-2">
                {internationalPriceList.map((price) => (
                  <div
                    key={price.id}
                    className="rounded-2xl p-10 text-center shadow-md"
                  >
                    <SubheadingText label={price.as} />
                    <div className="mb-3 mt-7">
                      <SubheadingText color="black" label={price.price} />
                    </div>
                    <div className="">
                      <div className="mb-7">
                        <BaseTypography
                          color="gray"
                          label={price.location}
                          className="text-opacity-60"
                        />
                      </div>
                    </div>
                    <div className="">
                      <BaseButton label="pay" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ContainerLayout>
        <section className="my-10">
          <div className="mb-5 text-center">
            <HeadingText label="Speaker" />
          </div>
          <ContainerLayout>
            <div className="grid gap-12 space-y-5 px-0 text-center lg:grid-cols-2 lg:space-y-0 lg:px-12">
              <div className="rounded-3xl p-10 py-20 shadow-md">
                <div className="my-10 grid justify-center">
                  <div className="h-40 w-40 rounded-full bg-green-500"></div>
                </div>
                <SubheadingText label="Dr. Jimmy Maming" />
                <BaseTypography label="Malay College, the Philippines" />
              </div>
              <div className="rounded-3xl p-3 py-20 shadow-md">
                <div className="my-10 grid justify-center">
                  <div className="h-40 w-40 rounded-full bg-green-500"></div>
                </div>
                <SubheadingText label="Dr. (Cd) Yusuf Iskandar, M.M." />
                <BaseTypography label="Management Program Study, Universitas Pembangunan Jaya, Indonesia" />
              </div>
            </div>
          </ContainerLayout>
        </section>
        <section>
          <ContainerLayout>
            <div className="text-center">
              <HeadingText label="Venue" />
              <SubheadingText label="Jakarta, Indonesia" />
            </div>
          </ContainerLayout>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

const scientificResearch = [
  {
    id: "1",
    research: "Ecology and Natural Ecosystems",
  },
  {
    id: "2",
    research: "Sustainable Urban Planning",
  },
  {
    id: "3",
    research: "Energy Efficiency and Waste Reduction",
  },
  {
    id: "4",
    research: "Natural Resource Economics",
  },
  {
    id: "5",
    research: "Biodiversity Conservation",
  },
];

const dateList = [
  {
    id: "1",
    date: "14 August 2023",
    desc: "Full Paper Submission",
  },
  {
    id: "2",
    date: "15 September 2023",
    desc: "Decision Notification",
  },
  {
    id: "3",
    date: "17 September 2023",
    desc: "Final Registration",
  },
  {
    id: "4",
    date: "23 September 2023",
    desc: "Camera ready",
  },
  {
    id: "5",
    date: "21 October 2023",
    desc: "Conference Day",
  },
];

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

const CardLayout = (props) => {
  const { children } = props;
  return (
    <>
      <div className="w-full rounded-2xl border-2 p-5 sm:p-5 lg:p-10">
        {children}
      </div>
    </>
  );
};

const DateList = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex items-center justify-between border-b-2 px-2 lg:px-10">
        {children}
      </div>
    </>
  );
};

export default EcesiPages;
