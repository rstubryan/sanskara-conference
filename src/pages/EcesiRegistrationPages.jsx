import RegistrationLayout from "../components/templates/RegistrationLayout.jsx";
import HeadingText from "../components/molecules/HeadingText/index.jsx";
import NavbarSimple from "../components/templates/Navbar.jsx";
import Footer from "../components/templates/Footer.jsx";
import Header from "../components/templates/Header.jsx";
import ContainerLayout from "../components/templates/ContainerLayout.jsx";

const EcesiRegistrationPages = () => {
  return (
    <>
      <header>
        <Header />
        <NavbarSimple />
      </header>
      <main>
        <ContainerLayout>
          <div className="my-10 text-center">
            <HeadingText label="Registration" />
          </div>
          <div className="mb-10">
            <RegistrationLayout />
          </div>
        </ContainerLayout>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default EcesiRegistrationPages;
