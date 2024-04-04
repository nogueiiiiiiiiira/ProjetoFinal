import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Login/Login.jsx'
import { CadastrarLivros } from "./Livros/CadastrarLivros.jsx";
import { CadastrarLeitores } from "./Leitores/CadastrarLeitores.jsx";
import { CadastrarBibliotecarios } from "./Bibliotecarios/CadastrarBibliotecario.jsx";
import { Multas } from "./Multas.jsx";
import { Emprestimos } from "./Emprestimos/Emprestimos.jsx";
import { Devolucoes } from "./Devolucoes/Devolucoes.jsx";
import './index.css'

const router = createBrowserRouter([

  {
    path: "/",
    element:  <Login />
  },

  {
    path: "/CadastrarBibliotecarios",
    element:  <CadastrarBibliotecarios />
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
    path: "/Emprestimos",
    element:  <Emprestimos />
  },
  
  {
    path: "/Devolucoes",
    element:  <Devolucoes />
  },

  {
    path: "/Multas",
    element:  <Multas />
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)