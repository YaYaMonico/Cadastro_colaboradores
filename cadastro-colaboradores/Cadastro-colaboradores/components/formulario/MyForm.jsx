import './MyForm.css';
import { useState } from 'react';

export default function MyForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCPF] = useState("")
    const [rg, setRG] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [endereco, setEndereco] = useState("")
    const [sexo, setSexo] = useState("")
    const [escolaridade, setEscolaridade] = useState("")
    const [obs, setObs] = useState("")
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    const handleName = (e) => {
        setName(e.target.value);
    }

    // envio de forms
    const handleSubmit = () => {
        setName("")
        setEmail("")
        setTelefone("")
        setCPF("")
        setRG("")
        setDataNascimento("")
        setSexo("")
        setEndereco("")
        setSexo("")
        setEscolaridade("")
        setObs("")
        setLogin("")
        setSenha("")
    }
    return (
        <div className='container'>

            <div className="row">
                <div className="col-xs-6">
                    <form onSubmit={handleSubmit}>
                        <div>  
                            <div>
                            <label htmlFor="name">Nome:</label>
                            <input
                                type="text"
                                required
                                name='name'
                                value={name}
                                maxLength={55}
                                placeholder='Digite seu nome'
                                onChange={handleName} />
                            </div>
                            <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                required
                                name='email'
                                value={email}
                                maxLength={55}
                                placeholder='Digite seu email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="tel">Telefone:</label>
                            <input
                                type="tel"
                                required
                                name='telefone'
                                value={telefone}
                                maxLength={55}
                                placeholder='Digite seu telefone'
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="end">Endereço:</label>
                            <input
                                type="text"
                                name='end'
                                value={endereco}
                                maxLength={55}
                                placeholder='Digite seu endereço'
                                onChange={(e) => setEndereco(e.target.value)} />
                            </div>
                            <div>
                            <label htmlFor="cpf">CPF:</label>
                            <input
                                style={{ width: "200px" }}
                                name='cpf'
                                value={cpf}
                                maxLength={13}
                                placeholder='Digite seu cpf'
                                onChange={(e) => setCPF(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="rg">RG:</label>
                            <input
                                style={{ width: "200px" }}
                                name='rg'
                                value={rg}
                                maxLength={13}
                                placeholder='Digite seu RG'
                                onChange={(e) => setRG(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="dataNascimento">Data de Nascimento:</label>
                            <input
                                style={{ width: "200px" }}
                                type="date"
                                name='dataNascimento'
                                value={dataNascimento}
                                maxLength={13}
                                placeholder='Digite sua data de nascimento'
                                onChange={(e) => setDataNascimento(e.target.value)}
                            />
                            
                            </div>
                            <div>
                            <label>Sexo:</label>
                            <select
                                name="sexo"
                                id="sexo"
                                onChange={(e) => setSexo(e.target.value)}
                                value={sexo}
                            >
                                <option value="feminino">Feminino</option>
                                <option value="masculino">Masculino</option>
                                <option value="não informado">Não informar</option>
                            </select>
                            </div>
                            <div>
                            <label>Escolaridade:</label>
                            <select
                                name="escolaridade"
                                id="escolaridade"
                                onChange={(e) => setEscolaridade(e.target.value)}
                                value={escolaridade}
                            >
                                <option value="fundamental">Fundamental</option>
                                <option value="ensino médio">Ensino Médio</option>
                                <option value="superio completo">Superior completo</option>
                                <option value="superior incompleto">Superior incompleto</option>
                                <option value="mestrado">Mestrado</option>
                                <option value="doutorado">Doutorado</option>
                            </select>

                            </div>
                            <div>
                            <label htmlFor="obs">Observações:</label>
                            <textarea
                                value={obs}
                                maxLength={55}
                                placeholder='Digite suas observações'
                                onChange={(e) => setObs(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="login">Login:</label>
                            <input
                                value={login}
                                maxLength={55}
                                placeholder='Digite seu login'
                                onChange={(e) => setLogin(e.target.value)}
                            /> 
                            </div>
                            <div>

                            <label htmlFor="senha">Senha:</label>
                            <input
                                type='password'
                                value={senha}
                                maxLength={55}
                                placeholder='Digite sua senha'
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            </div>
                            
                        </div>
                    </form>
                </div>

                <div className="col-xs-6" style={{textAlign: 'start'}}>
                   <h2>
                    <p>{name !== "" ? (`Nome: ${name}`) : null}</p>
                    <p>{email !== "" ?(`E-mail: ${email}`) : null}</p>
                    <p>{telefone !== "" ?(`Telefone: ${telefone}`) : null}</p>
                    <p>{endereco !== "" ?(`Endereço: ${endereco}`) : null}</p>
                    <p>{rg !== "" ?(`RG: ${rg}`) : null}</p>
                    <p>{cpf !== "" ?(`CPF: ${cpf}`) : null}</p>
                    <p>{dataNascimento !== "" ?(`Data de Nascimento: ${dataNascimento}`) : null}</p>
                    <p>{sexo !== "" ? (`Sexo: ${sexo}`) : null}</p>
                    <p>{escolaridade !== "" ? (`Escolaridade: ${escolaridade}`) : null}</p>
                    <p>{obs !== "" ? (`Observações: ${obs}`) : null}</p>
                    </h2>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-6" style={{padding: 0}}>
                    <button className="btn btn-block btn-primary" onClick={handleSubmit}><i className="fa fa-paper-plane"></i> Enviar</button>
                </div>
                <div className="col-xs-6" style={{padding: 0}}>
                    <button className="btn btn-block btn-danger" onClick={handleSubmit}><i className="fa fa-trash"></i> Limpar dados</button>
                </div>
            </div>

        </div>
    )
}
