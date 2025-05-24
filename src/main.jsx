import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import {RouterProvider } from 'react-router-dom';
import AppRouter from './Router/AppRouter'

createRoot(document.getElementById('root')).render(
<RouterProvider router={AppRouter} />
)
