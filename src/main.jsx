// Importation du composant StrictMode pour detecter les erreurs
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Importation du composant principal de l'application
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
