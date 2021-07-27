import { ContainerDescriptions } from "../../components/ContainerDescriptions";
import { TitleDescriptions } from "../../components/TitleDescriptions";

const SectionDescription = ({ descriptions, title }) => {
  return (
    <>
      <TitleDescriptions title={title} />
      <ContainerDescriptions descriptions={descriptions} />
    </>
  );
};

export { SectionDescription };
