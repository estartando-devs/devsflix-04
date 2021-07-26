import { Header } from "../../components/Header";
import { Suggestions } from "../../components/ContainerSuggestions";
import { SectionDescription } from "../SectionDescription";
import { Icons } from "../../components/ContainerIcons";


const Home = () => {
  return (
    <>
      <Header title="Bohemian Rhapsody" />
      <Icons />
      <SectionDescription />
      <Suggestions sectionTitle="Similar films" />
    </>
  );
};
export { Home };
