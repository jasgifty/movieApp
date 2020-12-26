import "./App.css";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Nav from "./components/Nav";
import { MovieProvider } from "./context";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Liked from "./components/Liked";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/liked" exact>
              <Banner />
              <Liked />
            </Route>
            <Route path="/movie" exact>
              <MoviePage />
            </Route>

            <Route path="/" exact>
              <Banner />
              <Body />
            </Route>
          </Switch>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
