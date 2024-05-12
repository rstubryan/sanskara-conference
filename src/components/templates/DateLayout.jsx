import ContainerLayout from "./ContainerLayout.jsx";
import HeadingText from "../molecules/HeadingText/index.jsx";
import BaseList from "../atoms/List/index.jsx";
import ColorTheme from "../atoms/Color/index.jsx";

const DateLayout = ({ color = "green" }) => {
  return (
    <ColorTheme color={color}>
      <div className="mb-5">
        <ContainerLayout>
          <div className="my-5 text-center">
            <div className="mb-5">
              <HeadingText color="white" label="Important Date" />
            </div>
            <div className="text-white">
              {dateList.map((date) => (
                <DateList key={date.date}>
                  <BaseList label={date.date} />
                  <BaseList label={date.desc} />
                </DateList>
              ))}
            </div>
          </div>
        </ContainerLayout>
      </div>
    </ColorTheme>
  );
};

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

export default DateLayout;
