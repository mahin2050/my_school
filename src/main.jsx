import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import Headers from './Components/heade.jsx'
// import Heros from './Components/hero.jsx'
import Header  from './heade.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headers />
    <Header />
  </StrictMode>,
);