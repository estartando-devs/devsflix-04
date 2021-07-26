import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { SectionDescription } from "./pages/SectionDescription";
import { SectionSuggestions } from "./pages/SectionSuggestions";
import { MovieList } from "./pages/MovieList";
import { SectionMovies } from "./pages/SectionMovies";
import { SectionIcons } from "./pages/SectionIcons";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/descriptions" component={SectionDescription} />
        <Route exact path="/suggestions" component={SectionSuggestions} />
        <Route exact path="/movieList" component={MovieList} />
        <Route exact path="/movies" component={SectionMovies} />
        <Route exact path="/icons" component={SectionIcons} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
