import Menu from "./components/Menu";
import style from './CadastrarLeitores.module.css'

export const CadastrarLeitores = () => {
    return(
        <div className={style.wrapCadastrarLeitores} >
            <Menu />
            <div className={style.wrapInputsLeitores} >
                <input name="nomeLeitor" id="nomeLeitor" type="text" placeholder='Digite o nome do leitor: '/>
                <input name='sobrenomeLeitor' id="sobrenomeLeitor" type="text" placeholder='Digite o sobrenome do leitor: '/>
                <input name="telefoneLeitor" id="telefoneLeitor" type="text" placeholder='Digite o telefone do leitor: '/>
                <input name='cpfLeitor' id="cpfLeitor" type="text" placeholder='Selecione o CPF do leitor: '/>
                <input name="emailLeitor" id="emailLeitor" type="text" placeholder='Selecione o email do leitor: '/>
            </div>
            <div className={style.wrapButtonLeitores} >
                <button>Cadastrar Novo(a) Leitor(a)</button>
            </div>
        </div>
    )
}