import BaseTypography from "../atoms/Typography/index.jsx";
import footer from "../../assets/footer.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-green-500 sm:h-[500px] sm:flex-col lg:h-[326px] lg:flex-row">
        <section className="align-items-center container my-20 flex space-x-10 sm:flex-col lg:flex-row">
          <div className="w-full">
            <img src={footer} alt="" />
          </div>
          <div className="w-1/2">
            <div className="mb-5">
              <BaseTypography variant="h5" color="white" label="About" />
            </div>
            <BaseTypography
              variant="paragraph"
              color="white"
              label="The Eastasouth Conference on Environmental and Sustainability Issues is an international conference organized by the Easta..."
            />
          </div>
          <div className="w-1/2">
            <div className="mb-5">
              <BaseTypography
                variant="h5"
                color="white"
                label="More Information"
              />
            </div>
            <div className="flex">
              <BaseTypography
                variant="paragraph"
                color="white"
                label={`Maresta: 0821 2121 4028`}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
