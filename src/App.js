import {Search} from "./components/Search/Search";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main} from "./pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
        <Search />
        <Switch>
            <Route path="/city/:id" component={Main} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
