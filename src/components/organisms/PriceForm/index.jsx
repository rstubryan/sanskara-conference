import BaseButton from "../../atoms/Button/index.jsx";
import ButtonToS from "../../molecules/ButtonToS/index.jsx";
import BaseTypography from "../../atoms/Typography/index.jsx";

const PriceForm = (props) => {
  const { currency, price } = props;

  return (
    <>
      <section className="w-full">
        <div className="mb-10">
          <BaseTypography variant="h2" label="USD 250" />
        </div>
        <div className="flex flex-col">
          <div className="mb-3">
            <ButtonToS />
          </div>
          <BaseButton color="green" label="pay" />
        </div>
      </section>
    </>
  );
};

export default PriceForm;
