import ContainerLayout from "./ContainerLayout.jsx";
import HeadingText from "../molecules/HeadingText/index.jsx";
import SubheadingText from "../molecules/SubheadingText/index.jsx";

const VenueLayout = ({ color }) => {
  return (
    <>
      <ContainerLayout>
        <div className="text-center">
          <HeadingText color={color} label="Venue" />
          <SubheadingText color={color} label="Jakarta, Indonesia" />
        </div>
      </ContainerLayout>
    </>
  );
};

export default VenueLayout;
