import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
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
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRouter;