import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationPath from './models/NavigationPath';
import "@fontsource/montserrat";
import LayotHelper from './components/LayotHelper';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        {NavigationPath.map((el) => (
          <Route path={el.path} element={<LayotHelper hasLogo={el.hasLogo}><el.component /></LayotHelper>} key={el.path} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
