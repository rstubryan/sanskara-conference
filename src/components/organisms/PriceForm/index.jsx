import BaseButton from "../../atoms/Button/index.jsx";
import ButtonToS from "../../molecules/ButtonToS/index.jsx";

const PriceForm = () => {
  return (
    <>
      <section id="price">
        <h1 className="text-black text-xl font-semibold text-start mb-3">
          Price
        </h1>

        <div className="flex flex-col">
          <ButtonToS /> <BaseButton color="green">pay</BaseButton>
        </div>
      </section>
    </>
  );
};

export default PriceForm;
