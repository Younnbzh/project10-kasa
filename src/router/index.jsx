// Importation des composants et fonctions de React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// Importation des pages de l'application
import Home from '../pages/home';
import About from '../pages/about';
import Housing from '../pages/housing';
import Error from '../pages/error';
// Importation des composants communs à toutes les pages
import Header from '../components/header';
import Footer from '../components/footer';
import logements from '../data/logements.json';
/**
 * Composant AppRouter - Configuration du routage de l'application
 */
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
/**
 * Composant HousingTester - Validation de l'ID du logement et redirige vers la page d'erreur si l'ID n'existe pas.
 */
function HousingTester() {
  const id = window.location.pathname.split('/housing/')[1];
  const logementExists = logements.some((logement) => logement.id === id);

  if (!logementExists) {
    return <Navigate to="/error" replace />;
  }

  return <Housing />;
}

export default AppRouter;
