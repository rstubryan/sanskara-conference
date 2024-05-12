import BaseTypography from "../atoms/Typography/index.jsx";
import footer from "../../assets/footer.svg";

const Footer = () => {
  return (
    <>
      <div className="flex h-[500px] flex-col justify-center overflow-x-hidden overflow-y-hidden bg-green-500 lg:h-[326px] lg:flex-row ">
        <section className="align-items-center container my-20 flex flex-col px-6 lg:flex-row lg:space-x-10 lg:px-0">
          <div className="mb-5 grid w-full items-center justify-center lg:mb-0">
            <img src={footer} alt="" />
          </div>
          <div className="mb-5 text-center lg:mb-0 lg:w-1/2 lg:text-start">
            <div className="mb-5">
              <BaseTypography variant="h5" color="white" label="About" />
            </div>
            <div className="">
              <BaseTypography
                variant="paragraph"
                color="white"
                label="The Eastasouth Conference on Environmental and Sustainability Issues is an international conference organized by the Easta"
              />
            </div>
          </div>
          <div className="text-center lg:w-1/2 lg:text-start">
            <div className="mb-5">
              <BaseTypography
                variant="h5"
                color="white"
                label="More Information"
              />
            </div>
            <div className="">
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
