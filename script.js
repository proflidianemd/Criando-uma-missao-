const caixaPrincipal = document.querySelector(".caixa-principal"); 
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere:",
        alternativas:[
{
texto: "Silêncio e tranquilidade"
afirmacao: "afirmação"
},
{
texto:"Movimento e agito"
afirmacao: "afirmação"
        }
    ]
    },

    {
        enunciado: "Para decidir alguma questão, você é mais:",
        alternativas: [
            {
            texto:"Racional"
            afirmacao: "afirmação"
        },
        {
            texto: "Emocional"
            afirmacao:"afirmação"
        }
          
        ]
    },
    {
        enunciado: "Você se sente melhor em:",
        alternativas: [
            {
                texto:"Lugares com muita gente"
                afirmacao:"afirmação"
            },
            {
                texto:"Lugares mais reservados"
                afirmacao: "afirmação"
            }
             ]
    },

    {
        enunciado: "Em seu tempo livre você prefere:",
        alternativas: [
            {
                texto:"Ler ou ver um filme"
                afirmacao: "afirmação"
            },
{
    texto: "Sair ou fazer algo novo"
    afirmacao:"afirmação"
}
        ]
    },
    {
        enunciado: "Você se considera mais:",
        alternativas: [
            {texto:"Planejado"
                afirmacao: "afirmação"
            },
            {texto:"Espontâneo"
                afirmacao: "afirmação"
            }
                   ]
    },
    
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();