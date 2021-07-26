import { Header } from "../../components/Header";
import { Suggestions } from "../../components/ContainerSuggestions";
import { SectionDescription } from "../SectionDescription";


const Home = () => {
  return (
    <>
      <Header title="Bohemian Rhapsody" />
      <SectionDescription />
      <Suggestions sectionTitle="Similar films" />
    </>
  );
};
export { Home };
