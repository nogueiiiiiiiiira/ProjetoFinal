import style from './Multas.module.css'
import Menu from './components/Menu'

export const Multas = () => {
    return(
        <div className={style.wrapMultas}>
            <Menu />
            <div className={style.wrapInputsMultas}>
                <input placeholder='Digite o CPF do leitor(a):' type="text" name="multasCPFLeitor" id="multasCPFLeitor" />
                <input placeholder='Digite o ID do livro:' type="text" name="multasIDLivro" id="multasIDLivro" />
                <h2>OU</h2>
                <input placeholder='Digite o número do empréstimo: ' type="text" name="numeroEmprestimo" id="numeroEmprestimo" />
            </div>
            <div className={style.wrapButtonsMultas}>
                <button>Pagar Multa</button>
            </div>

        </div>
    )
}