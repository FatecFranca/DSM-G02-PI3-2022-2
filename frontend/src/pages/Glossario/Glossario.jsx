import React from "react";
import Header from "../../components/Header/header";
import imgbooks from "../../img/Books.png";
import imgvoltar from "../../img/voltar.png";
import { Link } from "react-router-dom";
import "./glossario.css";

//Pagina Questoes da Aplicação
export default function Glossario() {

    return (
        <div className="app">
            <Header />

            <div className="glossario">
                <img className="volt" src={imgvoltar} />
                <img className="boks" src={imgbooks} />
                <h2> Glossario </h2>
            </div>
            <div className='conteudo'>
                <p>
                    O glossário aqui apresentado não tem a intenção de ser uma obra de referência completa. O seu objetivo é esclarecer os significados de alguns termos usados nesse trabalho.  Um termo pode ser incluído nesse glossário, se utilizado inconsistentemente na literatura em geral,  ou se o seu significado nesse trabalho for mais específico do que o normal.
                </p>

            </div>
            <button className='cri'><Link to="/Sobre">SOBRE</Link></button>
            <button className='ter'> Termos </button>
            <input className='in' type={"text"} placeholder='Digite algo para realizar a pesquisa'></input>
            <div className="cont">
                <h2>Condução</h2>
                <p>A condução refere-se aos meios disponíveis para aconselhar, orientar, informar e conduzir o usuário na interação com o computador (mensagens, alarmes, rótulos, etc.). Quatro subcritérios participam da condução: a presteza, o agrupamento/distinção entre itens, o feedback imediato e a legibilidade.</p>
                <h2>Presteza</h2>
                <p>Esse critério engloba os meios utilizados para levar o usuário a realizar determinadas ações, como, por exemplo, entrada de dados. Esse critério engloba também todos os mecanismos ou meios que permitem ao usuário conhecer as alternativas, em termos de ações, conforme o estado ou contexto nos quais ele se encontra. A presteza diz respeito igualmente às informações que permitem ao usuário identificar o estado ou contexto no qual ele se encontra, bem como as ferramentas de ajuda e seu modo de acesso.</p>
                <h2>Agrupamento/Distinção de Itens</h2>
                <p>O critério Agrupamento/Distinção de Itens diz respeito à organização visual dos itens de informação relacionados uns com os outros de alguma maneira. Esse critério leva em conta a localização e algumas características gráficas (formato) para indicar as relações entre os vários itens mostrados, para indicar se eles pertencem ou não a uma dada classe, ou ainda para indicar diferenças entre classes. Esse critério também diz respeito à organização dos itens de uma classes. O critério agrupamento/distinção de itens está subdividido em dois critérios: agrupamento/distinção por localização e agrupamento/distinção por formato.</p>
                <h2>Agrupamento/Distinção por Localização</h2>
                <p>O critério de Agrupamento/Distinção por Localização diz respeito ao posicionamento relativo dos itens, estabelecido para indicar se eles pertencem ou não a uma dada classe, ou, ainda, para indicar diferenças entre classes. Esse critério também diz respeito ao posicionamento relativo dos itens dentro de uma classe.</p>
                <h2>Agrupamento/Distinção por Formato</h2>
                <p>O critério de Agrupamento/Distinção por Formato diz respeito mais especificamente às características gráficas (formato, cor, etc.) que indicam se itens pertencem ou não a uma dada classe, ou que indicam ainda distinções entre classes diferentes ou distinções entre itens de uma dada classe.</p>
                <h2>Feedback Imediato</h2>
                <p>O Feedback Imediato diz respeito às respostas do sistema às ações do usuário. Tais entradas podem ir do simples pressionar de uma tecla até uma lista de comandos. Em todos os casos, respostas do computador devem ser fornecidas, de forma rápida, com passo (timing) apropriado e consistente para cada tipo de transação. De todo modo, uma resposta rápida deve ser fornecida com informações sobre a transação solicitada e seu resultado.</p>
                <h2>Legibilidade</h2>
                <p>A Legibilidade diz respeito às características lexicais das informações apresentadas na tela que possam dificultar ou facilitar a leitura dessa informação (brilho do caractere, contraste letra/fundo, tamanho da fonte, espaçamento entre palavras, espaçamento entre linhas, espaçamento de parágrafos, comprimento da linha, etc.). Por definição, o critério Legibilidade não abrange mensagens de erro ou de feedback.</p>
                <h2>Carga de Trabalho</h2>
                <p>Carga de Trabalho O critério Carga de Trabalho diz respeito a todos os elementos da interface que têm um papel importante na redução da carga cognitiva e perceptiva do usuário e no aumento da eficiência do diálogo. O critério Carga de Trabalho está subdividido em dois critérios: Brevidade (que inclui Concisão e Ações Mínimas) e Densidade Informacional.</p>
                <h2>Brevidade</h2>
                <p>O critério de Brevidade diz respeito à carga de trabalho perceptiva e cognitiva, tanto para entradas e saídas individuais, quanto para conjuntos de entradas (isto é, conjuntos de ações necessárias para se alcançar uma meta). A Brevidade corresponde ao objetivo de limitar a carga de trabalho de leitura e entradas, e o número de passos. O critério de Brevidade está subdividido em dois critérios: Concisão e Ações Mínimas.</p>
            </div>
        </div>
    );
}
