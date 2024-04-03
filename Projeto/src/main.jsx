import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { CadastrarLivros } from "./CadastrarLivros.jsx";
import { CadastrarLeitores } from "./CadastrarLeitores.jsx";
import { CadastrarBibliotecarios } from "./CadastrarBibliotecario.jsx";
import { Multas } from "./Multas.jsx";
import { Emprestimos } from "./Emprestimos.jsx";
import './index.css'

const router = createBrowserRouter([

  {
    path: "/",
    element:  <App />
  },

  {
    path: "/CadastrarLivros",
    element:  <CadastrarLivros />
  },

  {
    path: "/CadastrarLeitores",
    element:  <CadastrarLeitores />
  },

  {
    path: "/CadastrarBibliotecarios",
    element:  <CadastrarBibliotecarios />
  },

  {
    path: "/Multas",
    element:  <Multas />
  },

  {
    path: "/Emprestimos",
    element:  <Emprestimos />
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)