import React from 'react';
import { createRoot } from 'react-dom/client';
import ParticleBackground from './components/utilities/ParticleBackground';
import App from './App';
import './fonts/Montserrat-Regular.ttf';
import './fonts/Montserrat-Bold.ttf';
import "./sass/styles.scss";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ParticleBackground />
    <App />
  </React.StrictMode>,
);
