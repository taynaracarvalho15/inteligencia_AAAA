const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. Qual a diferença entre IA fraca e IA forte?",
        alternativas: [
            "IA fraca faz tarefas específicas; IA forte tem inteligência geral.",
            "IA fraca usa redes neurais; e IA forte usa lógica simbólica."
        ]
    },
    {
        enunciado: "2. O que é aprendizado supervisionado?",
        alternativas: [
            "Aprende com dados rotulados.",
            "Aprende sem saber os rótulos dos dados."
        ]
    },
    {
        enunciado: "3. O que são redes neurais artificiais?",
        alternativas: [
            "Modelos inspirados no cérebro que aprendem padrões.",
            "Conexões físicas que simulam neurônios."
        ]
    },
    {
        enunciado: "4. Qual o papel dos dados na IA?",
        alternativas: [
            "Treinar e melhorar o modelo.",
            "Ajustar apenas a interface."
        ]
    },
    {
        enunciado: "5. Por que linguagem natural é difícil para IA?",
        alternativas: [
            "É ambígua e cheia de contexto.",
            "É só lógica gramatical, mas lenta."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.textContent = ""; // 🔥 limpa os botões antigos
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa; // 🔥 corrigido
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    if (atual < perguntas.length) {
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quiz finalizado!";
    caixaAlternativas.textContent = "";
}

mostraPergunta();
