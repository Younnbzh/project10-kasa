import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Housing from '../pages/housing';
import Error from '../pages/error';
import Header from '../components/header';
import Footer from '../components/footer';
import logements from '../data/logements.json';

function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<HousingTester />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
// test si logement existe bien
function HousingTester() {
  const id = window.location.pathname.split('/housing/')[1];
  const logementExists = logements.some((logement) => logement.id === id);

  if (!logementExists) {
    return <Navigate to="/error" replace />;
  }

  return <Housing />;
}

export default AppRouter;
