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
import { Multas } from "./Multas/Multas.jsx";
import { Emprestimos } from "./Emprestimos/Emprestimos.jsx";
import { Devolucoes } from "./Devolucoes/Devolucoes.jsx";
import './index.css'
import { PrimeiroAcesso } from "./Login/PrimeiroAcesso.jsx";
import { EditarBibliotecarios } from "./Bibliotecarios/EditarBibliotecario.jsx";
import { ExcluirBibliotecarios } from "./Bibliotecarios/ExcluirBibliotecarios.jsx";
import { EditarLivros } from "./Livros/EditarLivros.jsx";
import { ExcluirLivros } from "./Livros/ExcluirLivros.jsx";
import { EditarLeitores } from "./Leitores/EditarLeitores.jsx";
import { ExcluirLeitores } from "./Leitores/ExcluirLeitores.jsx";


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

  {
    path: "/PrimeiroAcesso",
    element: <PrimeiroAcesso />
  },

  {
    path: "/EditarBibliotecarios",
    element: <EditarBibliotecarios />
  },

  {
    path: '/EditarLivros',
    element: <EditarLivros />
  },

  {
    path: '/ExcluirLivros',
    element: <ExcluirLivros />
  },

  {
    path: '/ExcluirBibliotecarios',
    element: <ExcluirBibliotecarios />
  },

  {
    path: '/EditarLeitores',
    element: <EditarLeitores />
  },

  {
    path: '/ExcluirLeitores',
    element: <ExcluirLeitores />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)