import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { SectionDescription } from "./pages/SectionDescription";
import { SectionSuggestions } from "./pages/SectionSuggestions";
import { MovieInformationCard } from "./components/MovieInformationCard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieInformationCard} />
        <Route exact path="/descriptions" component={SectionDescription} />
        <Route exact path="/suggestions" component={SectionSuggestions} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
