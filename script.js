const caixaPrincipal = document.querySelector(".caixa-principal"); 
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere:",
        alternativas: [
            {
                texto: "Silêncio e tranquilidade",
                afirmacao: "Você valoriza momentos de paz."
            },
            {
                texto: "Movimento e agito",
                afirmacao: "Você adora estar em movimento"
            }
        ]
    },
    {
        enunciado: "Para decidir alguma questão, você é mais:",
        alternativas: [
            {
                texto: "Racional",
                afirmacao: "Você costuma analisar antes de agir, com foco e lógica"
            },
            {
                texto: "Emocional",
                afirmacao: "Você segue o coração e valoriza o que sente nas decisões"
            }
        ]
    },
    {
        enunciado: "Você se sente melhor em:",
        alternativas: [
            {
                texto: "Lugares com muita gente",
                afirmacao: "Você gosta de socializar e estar rodeado(a) de pessoas"
            },
            {
                texto: "Lugares mais reservados",
                afirmacao: "Você prefere ambientes tranquilos e momentos mais reservados"
            }
        ]
    },
    {
        enunciado: "Em seu tempo livre você prefere:",
        alternativas: [
            {
                texto: "Ler ou ver um filme",
                afirmacao: "Você aprecia atividades calmas e momentos de reflexão"
            },
            {
                texto: "Sair ou fazer algo novo",
                afirmacao: "Você adora explorar, sair e viver novas experiências"
            }
        ]
    },
    {
        enunciado: "Você se considera mais:",
        alternativas: [
            {
                texto: "Planejado",
                afirmacao: "Você gosta de organizar e planejar cada detalhe"
            },
            {
                texto: "Espontâneo",
                afirmacao: "Você se joga nas oportunidades e vive o momento"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual>=perguntas.length) {
        mostraResultado();
            return;
        }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativa();
}

function mostraAlternativa() {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Suas respostas indicam que você";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
} 
        



mostraPergunta();