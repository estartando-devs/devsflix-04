import { ContainerDescriptions } from "../../components/ContainerDescriptions";
import { TitleDescriptions } from "../../components/TitleDescriptions";

const SectionDescription = ({ descriptions }) => {
  return (
    <>
      <TitleDescriptions title="Bohemian Rhapsody" />
      <ContainerDescriptions descriptions={descriptions} />
    </>
  );
};

export { SectionDescription };
