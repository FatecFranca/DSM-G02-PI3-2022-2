import React from "react";
import Header from "../../components/header/header";
import seta from "../../img/check.png";


import "./glossario.css";

//Pagina Questoes da Aplicação
export default function Glossario() {

    return (
        <div className="info">
            <Header />

            <div className="glossario">
                <h1> Glossário </h1>
            </div>
            <div className="conteudo">
                <p>
                    O glossário aqui apresentado não tem a intenção de ser uma obra de referência completa. O seu objetivo é esclarecer os significados de alguns termos usados nesse trabalho.  Um termo pode ser incluído nesse glossário,se utilizado inconsistentemente na literatura em geral,ou se o seu significado nesse trabalho for mais específico do que o normal.
                </p>

            </div>

            <h2 className="termos-button">Termos</h2>

            <div className="informacao">

                <h2> <img className="seta" src={seta} />Animação</h2>
                <p>Conjunto de imagens que, apresentadas em sequência, dão efeito de animação. As animações visam chamar a atenção do usuário.
                </p>
                <h2><img className="seta" src={seta} />Apresentação</h2>
                <p>Saída de dados de um computador para o usuário. Geralmente, esse termo denota uma saída de dados visual, mas pode ser qualificada para indicar uma modalidade diferente, como por exemplo, uma apresentação sonora.
                </p>
                <h2><img className="seta" src={seta} />Apresentação Analógica </h2>
                <p>Estilo de apresentação gráfica baseada em analogias com dispositivos físicos de apresentação, como velocímetros, altímetros, etc.
                </p>
                <h2> <img className="seta" src={seta} />Apresentação Digital
                </h2>
                <p>Estilo de apresentação baseada em dígitos.</p>
                <h2><img className="seta" src={seta} />Apresentação Sonora </h2>
                <p>Apresentação de dados e informações realizadas através de dispositivos de apresentação sonora.
                </p>
                <h2> <img className="seta" src={seta} />Área</h2>
                <p>Região ou seção de uma tela ou janela que está localizada em uma posição consistente e é utilizada consistentemente para atingir um objetivo específico.
                </p>
                <h2><img className="seta" src={seta} />Atributo</h2>
                <p>Propriedade de um objeto ou sua representação que pode ser modificado pelo usuário em determinados contextos, por exemplo, cor, tamanho, padrão ou fonte.
                </p>
                <h2><img className="seta" src={seta} />Barra de Rolagem </h2>
                <p>Controle que permite ao usuário visualizar objetos que extrapolam o tamanho da área disponível para visualização.</p>
                <h2><img className="seta" src={seta} />Botão</h2>
                <p>Figura representando botões materiais e que, normalmente, é selecionada por um dispositivo de apontamento (mouse) ou teclas de cursor, e executada por um botão do dispositivo de apontamento ou a tecla "Enter".</p>
                <h2><img className="seta" src={seta} />Botão de Rádio </h2>
                <p>Componente gráfico que simula os botões de um rádio real. Cada botão representa uma alternativa mutuamente exclusiva.</p>
                <h2><img className="seta" src={seta} />Cabeçalho</h2>
                <p>Rótulo identificativo posicionado na parte superior de uma tabela ou lista.</p>
                <h2><img className="seta" src={seta} />Caixa de agrupamento</h2>
                <p>Linhas que formam um retângulo vazado envolvendo um conjunto de objetos relacionados.</p>
                <h2><img className="seta" src={seta} />Caixa de Diálogoo</h2>
                <p>Painel que apresenta um conjunto de diferentes tipos de mostradores de dados, informações, mensagens, controles e comandos para apoiar o usuário em uma ação específica.</p>
                <h2><img className="seta" src={seta} />Caixa de Mensagem</h2>
                <p>Nome genérico dado a qualquer caixa de diálogo que forneça informação, ou o estado corrente de um processamento em andamento, ou faça uma pergunta, ou apresente um aviso, ou chame atenção para um erro.</p>

            </div>
        </div>
    );
}
