import BaseTypography from "../atoms/Typography/index.jsx";

const AboutLayout = () => {
  return (
    <>
      <BaseTypography
        variant="paragraph"
        color="black"
        label="The Eastasouth Conference on Environmental and Sustainability Issues is an international conference organized by the Eastasouth Institute. The event serves as a platform for experts, academics, researchers, and practitioners in the field of environment and sustainability to present and discuss innovative solutions and current challenges related to environmental issues"
      />
      <BaseTypography
        variant="paragraph"
        color="black"
        label="The conference focuses on discussing environmental issues involving aspects such as climate change, natural resource conservation, waste management, biodiversity, renewable energy, and sustainability policies. Participants will gain a deep understanding of the complexity of these issues and various applicable solutions to achieve environmental sustainability."
      />
      <BaseTypography
        variant="paragraph"
        color="black"
        label="By bringing together leading thinkers, experienced researchers, and proficient practitioners, the conference provides a platform for the presentation of the latest research, workshops, and panel discussions aimed at advancing understanding and collaboration in the field of environment and sustainability. Through the Eastasouth Conference on Environmental and Sustainability Issues, participants can network with fellow professionals, share insights, and foster collaborations to address global environmental challenges."
      />
    </>
  );
};

export default AboutLayout;
