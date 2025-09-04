const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:
        "1. Qual a diferença entre IA fraca e IA forte?",

        alternativas:[
            "IA fraca faz tarefas específicas; IA forte tem inteligência geral.",
             "IA fraca usa redes neurais; e IA forte usa logica simbólica."
        ]
    },
    {
        enunciado:
        "2. O que é aprendizado supervisionado?",

        alternativas:[
            "Aprende com dados rotulados.",
             "Aprende sem saber os rótulos dos dados."
        ]
    },
    {
        enunciado:
        "3. O que são redes neurais artificiais?",

        alternativas:[
            "Modelos inspirados no cérebro que aprendem padrões.",
             "Conexões físicas que simulam neurônios."
        ]
    },
    {
        enunciado:
        "4. Em relação à ética na IA, qual tendência está ganhando mais atenção globalmente?",

        alternativas:[
            "Tornar todos os modelos de IA de código fechado obrigatoriamente",
             "Desenvolvimento de regulamentações e IA responsável"
        ]
    },
    {
        enunciado:
        "5. Qual é uma tendência no uso de IA em ambientes corporativos?",

        alternativas:[
            "Automação inteligente de processos (como RH, jurídico, finanças)",
             "Exclusivamente uso da IA em marketing e vendas"
        ]
    },
    {
        enunciado:
        "6. O que se espera sobre os modelos de linguagem no futuro próximo?",

        alternativas:[
            "Serão mais eficientes, personalizados e com menor consumo de energia",
             "Serão sempre maiores, mais lentos e inacessíveis ao público geral"
        ]
    },
]