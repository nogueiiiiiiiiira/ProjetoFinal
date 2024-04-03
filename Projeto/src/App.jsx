import style from './App.module.css'
import Menu from './components/Menu'
import background from './assets/wallpaper2.jpeg';

export default function App() {

  return (
    <div className={style.wrapTelaInicial}>
        <Menu />
        <br />
        <br />
        <div className={style.wrapButtons} >
                <button className={style.buttonTelaInicial} ><a href="/CadastrarLivros">CADASTRAR LIVROS</a></button>
                <button className={style.buttonTelaInicial} ><a href="/CadastrarLeitores">CADASTRAR LEITORES</a></button>
                <button className={style.buttonTelaInicial} ><a href="/CadastrarBibliotecarios">CADASTRAR BIBLIOTECÁRIOS</a></button>
                <button className={style.buttonTelaInicial} ><a href="/Multas">MULTAS</a></button>
                <button className={style.buttonTelaInicial} ><a href="/Emprestimos">EMPRÉSTIMOS</a></button>
                <button className={style.buttonTelaInicial} ><a href="/devolucoes">DEVOLUÇÕES</a></button>    
            </div>      
      </div>
  )
}