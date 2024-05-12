import HeadingText from "../molecules/HeadingText/index.jsx";
import SubheadingText from "../molecules/SubheadingText/index.jsx";
import BaseList from "../atoms/List/index.jsx";
import BaseTypography from "../atoms/Typography/index.jsx";
import BaseButton from "../atoms/Button/index.jsx";
import ContainerLayout from "./ContainerLayout.jsx";

const TopicLayout = ({ color = "green" }) => {
  return (
    <>
      <ContainerLayout>
        <div className="my-5 text-center">
          <div className="mb-5">
            <HeadingText color={color} label="Call For Paper" />
          </div>
          <CardLayout>
            <SubheadingText
              color={color}
              label="Scientific Research"
              className="font-normal"
            />
            <div>
              {scientificResearch.map(({ id, research }) => (
                <BaseList key={id} label={research} />
              ))}
            </div>
          </CardLayout>
        </div>
        <SubmitPaper color={color} />
      </ContainerLayout>
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

const SubmitPaper = ({ color }) => {
  return (
    <>
      <section>
        <div className="my-10 text-center lg:flex lg:justify-between lg:text-start">
          <div className="mb-5 space-y-5 lg:space-y-0">
            <HeadingText color={color} label="Submit your Paper Now!" />
            <BaseTypography label="Eastasouth Conference On Environmental and Sustainability Issues " />
          </div>
          <div className="flex flex-row justify-center">
            <BaseButton
              color={color}
              label="Submit your Paper here!"
              className="text-md normal-case"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopicLayout;
