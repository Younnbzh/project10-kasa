// Importation du gestionnaire de routes principal
import AppRouter from './router';
// Importation des styles globaux de l'application 
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
