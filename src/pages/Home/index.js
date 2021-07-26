import { Header } from "../../components/Header";
import { QualityAndVoiceSelection } from "../../components/QualityAndVoiceSelection";
import { Suggestions } from "../../components/ContainerSuggestions";
import { SectionDescription } from "../SectionDescription";

const Home = () => {
  return (
    <>
      <Header title="Bohemian Rhapsody" />
      <QualityAndVoiceSelection />
      <SectionDescription />
      <Suggestions sectionTitle="Similar films" />
    </>
  );
};
export { Home };
