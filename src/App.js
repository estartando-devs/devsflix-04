import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { SectionDescription } from "./pages/SectionDescription";
import { SectionSuggestions } from "./pages/SectionSuggestions"
import { MovieInformationCard } from "./components/MovieInformationCard";
import { MovieList } from "./pages/MovieList";
import { SectionMovies } from "./pages/SectionMovies";
import { SectionIcons } from "./pages/SectionIcons";
import { SectionCatalogCard } from "./pages/SectionCatalogCard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieInformationCard} />
        <Route exact path="/descriptions" component={SectionDescription} />
        <Route exact path="/suggestions" component={SectionSuggestions} />
        <Route exact path="/movieList" component={MovieList} />
        <Route exact path="/movies" component={SectionMovies} />
        <Route exact path="/icons" component={SectionIcons} />
        <Route exact path="/catalog" component={SectionCatalogCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
