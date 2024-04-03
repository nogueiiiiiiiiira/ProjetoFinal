import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([

  {
    path: "/",
    element:  <App />
  },

  {
    path: "/multas",
    element:  <App />
  },

  {
    path: "/livros",
    element:  <App />
  },

  {
    path: "/leitores",
    element:  <App />
  },

  {
    path: "/bibliotecarios",
    element:  <App />
  },

  {
    path: "/emprestimos",
    element:  <App />
  },

  {
    path: "/devolucoes",
    element:  <App />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
