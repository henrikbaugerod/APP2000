import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter, useLocation } from "react-router-dom";
import App from './App';
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
);