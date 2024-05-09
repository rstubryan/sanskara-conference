import IdentityForm from "../organisms/IdentityForm/index.jsx";
import CategoryForm from "../organisms/CategoryForm/index.jsx";
import PriceForm from "../organisms/PriceForm/index.jsx";
import SubheadingText from "../molecules/SubheadingText/index.jsx";

const RegistrationLayout = () => {
  return (
    <>
      <div className="">
        <div className="mb-5">
          <CardLayout>
            <div className="mb-5">
              <SubheadingText label="Identity" />
            </div>
            <IdentityForm />
          </CardLayout>
        </div>
        <div className="space-y-5 sm:space-x-0 sm:space-y-5 md:block lg:flex lg:space-x-5 lg:space-y-0">
          <CardLayout>
            <div className="mb-5">
              <SubheadingText label="Category" />
            </div>
            <CategoryForm />
          </CardLayout>
          <CardLayout>
            <div className="mb-5">
              <SubheadingText label="Price" />
            </div>
            <PriceForm />
          </CardLayout>
        </div>
      </div>
    </>
  );
};

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

export default RegistrationLayout;
