import style from './App.module.css'
import Menu from './components/Menu'
import imgBiblioteca from './assets/biblioteca.jpg';

export default function App() {

  return (
    <div className={style.wrapHome}>
        <Menu />
          <h1>HOME!</h1>
          <div className={style.wrapTelaInicial}>
            <div className={style.wrapButtons} >
                <button className={style.buttonTelaInicial} ><a href="/CadastrarLivros">Cadastrar Livros</a></button>
                <button className={style.buttonTelaInicial} ><a href="/CadastrarLeitores">Cadastrar Leitores</a></button>
                <button className={style.buttonTelaInicial} ><a href="/CadastrarBibliotecarios">Cadastrar Bibliotecários</a></button>
                <button className={style.buttonTelaInicial} ><a href="/Multas">Multas</a></button>
                <button className={style.buttonTelaInicial} ><a href="/Emprestimos">Empréstimos</a></button>
                <button className={style.buttonTelaInicial} ><a href="/devolucoes">Devoluções</a></button>    
            </div>      
        </div>
        <div className={style.wrapImg}>
          <h1>Livros são como um mundo cheio de outros mundos dentro!</h1>
          <img src={imgBiblioteca} alt="" />
        </div>
      </div>
  )
}