import style from './Menu.module.css'

export default function Menu(){
    
    return(
    
    <div className={style.wrapMenu}>
        <div className={style.navLinks}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/multas">Multas</a></li>
                <li><a href="/livros">Livros</a></li>
                <li><a href="/leitores">Leitores</a></li>
                <li><a href="/bibliotecarios">Bibliotecários</a></li>
                <li><a href="/emprestimos">Empréstimos</a></li>
                <li><a href="/devolucoes">Devoluções</a></li>
                </ul>   
                </div>
    </div>
    )
}