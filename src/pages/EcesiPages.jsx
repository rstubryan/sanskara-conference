import Header from "../components/templates/Header.jsx";
import NavbarSimple from "../components/templates/Navbar.jsx";
import Footer from "../components/templates/Footer.jsx";
import RundownLayout from "../components/templates/RundownLayout.jsx";
import TopicLayout from "../components/templates/TopicLayout.jsx";
import DateLayout from "../components/templates/DateLayout.jsx";
import RegistrationLayout from "../components/templates/RegistrationLayout.jsx";
import SpeakerLayout from "../components/templates/SpeakerLayout.jsx";
import VenueLayout from "../components/templates/VenueLayout.jsx";

const EcesiPages = ({ color = "green" }) => {
  return (
    <>
      <header>
        <Header color={color} />
        <NavbarSimple />
      </header>
      <main>
        <RundownLayout color={color} />
        <TopicLayout color={color} />
        <DateLayout color={color} />
        <RegistrationLayout color={color} />
        <SpeakerLayout color={color} />
        <VenueLayout color={color} />
      </main>
      <footer>
        <Footer color={color} />
      </footer>
    </>
  );
};

export default EcesiPages;
