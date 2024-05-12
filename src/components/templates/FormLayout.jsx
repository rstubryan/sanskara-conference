import IdentityForm from "../organisms/IdentityForm/index.jsx";
import CategoryForm from "../organisms/CategoryForm/index.jsx";
import PriceForm from "../organisms/PriceForm/index.jsx";
import SubheadingText from "../molecules/SubheadingText/index.jsx";

const FormLayout = ({ color }) => {
  return (
    <>
      <div className="mb-5">
        <CardLayout>
          <div className="mb-5">
            <SubheadingText color={color} label="Identity" />
          </div>
          <IdentityForm color={color} />
        </CardLayout>
      </div>
      <div className="space-y-5 sm:space-x-0 sm:space-y-5 md:block lg:flex lg:space-x-5 lg:space-y-0">
        <CardLayout>
          <div className="mb-5">
            <SubheadingText color={color} label="Category" />
          </div>
          <CategoryForm color={color} />
        </CardLayout>
        <CardLayout>
          <div className="mb-5">
            <SubheadingText color={color} label="Price" />
          </div>
          <PriceForm color={color} />
        </CardLayout>
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

export default FormLayout;
