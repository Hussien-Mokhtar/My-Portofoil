import React from 'react';
import ReactDOM from 'react-dom/client';

import "./Main.css"
import { RouterProvider } from 'react-router-dom';
import routers from './Routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={routers}/>
  </React.StrictMode>
);

