import HeadingText from "../molecules/HeadingText/index.jsx";
import ContainerLayout from "./ContainerLayout.jsx";
import SubheadingText from "../molecules/SubheadingText/index.jsx";
import BaseTypography from "../atoms/Typography/index.jsx";
import ColorTheme from "../atoms/Color/index.jsx";

const SpeakerLayout = ({ color = "green" }) => {
  return (
    <>
      <section className="my-10">
        <div className="mb-5 text-center">
          <HeadingText color={color} label="Speaker" />
        </div>
        <ContainerLayout>
          <CardLayout color={color} />
        </ContainerLayout>
      </section>
    </>
  );
};

const SpeakerConference = [
  {
    id: "1",
    name: "Dr. Jimmy Maming",
    desc: "Malay College, the Philippines",
  },
  {
    id: "2",
    name: "Dr. (Cd) Yusuf Iskandar, M.M.",
    desc: "Management Program Study, Universitas Pembangunan Jaya, Indonesia",
  },
];

const CardLayout = ({ color }) => {
  return (
    <div className="grid gap-12 space-y-5 px-0 text-center lg:grid-cols-2 lg:space-y-0 lg:px-12">
      {SpeakerConference.map((speaker) => (
        <div key={speaker.id} className="rounded-3xl p-10 py-10 shadow-md">
          <div className="my-10 grid justify-center">
            <ColorTheme color={color}>
              <div className="h-40 w-40 rounded-full"></div>
            </ColorTheme>
          </div>
          <SubheadingText color={color} label={speaker.name} />
          <BaseTypography color={color} label={speaker.desc} />
        </div>
      ))}
    </div>
  );
};

export default SpeakerLayout;
