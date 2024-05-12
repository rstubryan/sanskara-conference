import AboutLayout from "../components/templates/AboutLayout.jsx";
import Header from "../components/templates/Header.jsx";
import NavbarSimple from "../components/templates/Navbar.jsx";
import ContainerLayout from "../components/templates/ContainerLayout.jsx";
import Footer from "../components/templates/Footer.jsx";
import HeadingText from "../components/molecules/HeadingText/index.jsx";

const ecesiAboutPages = ({ color = "green" }) => {
  return (
    <>
      <header>
        <Header color={color} />
        <NavbarSimple />
      </header>
      <main>
        <ContainerLayout>
          <div className="my-10 text-center">
            <HeadingText color={color} label="About" />
          </div>
          <div className="mb-10">
            <AboutLayout />
          </div>
        </ContainerLayout>
      </main>
      <footer>
        <Footer color={color} />
      </footer>
    </>
  );
};

export default ecesiAboutPages;
