// import { MoviesGrid } from "./components/MoviesGrid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function App() {
    return (
        <Router>
            <Link to="/">
                <Header />
            </Link>
            <main>
                <Switch>
                    <Route path="/movies/:movieId"><MovieDetails /></Route>
                    <Route path="/"><LandingPage /></Route>
                </Switch>
            </main>
            <Footer />
        </Router>
        )
}