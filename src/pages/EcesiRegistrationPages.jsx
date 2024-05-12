import FormLayout from "../components/templates/FormLayout.jsx";
import HeadingText from "../components/molecules/HeadingText/index.jsx";
import NavbarSimple from "../components/templates/Navbar.jsx";
import Footer from "../components/templates/Footer.jsx";
import Header from "../components/templates/Header.jsx";
import ContainerLayout from "../components/templates/ContainerLayout.jsx";

const EcesiRegistrationPages = ({ color = "green" }) => {
  return (
    <>
      <header>
        <Header color={color} />
        <NavbarSimple />
      </header>
      <main>
        <ContainerLayout>
          <div className="my-10 text-center">
            <HeadingText color={color} label="Registration" />
          </div>
          <div className="mb-10">
            <FormLayout color={color} />
          </div>
        </ContainerLayout>
      </main>
      <footer>
        <Footer color={color} />
      </footer>
    </>
  );
};

export default EcesiRegistrationPages;
