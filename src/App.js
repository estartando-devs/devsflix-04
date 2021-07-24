import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { SectionDescription } from "./pages/SectionDescription";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/descriptions" component={SectionDescription} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
