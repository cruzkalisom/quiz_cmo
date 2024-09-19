// Lista de 15 perguntas com opções e resposta correta
const questions = [
    { 
        question: "Qual é a ave mais comum consumida no mundo?", 
        answers: { a: "Pato", b: "Frango", c: "Peru", d: 'Codorna' }, 
        correctAnswer: "b" 
    },
    { 
        question: "Que parte do frango é mais rica em proteínas?", 
        answers: { a: "Peito", b: "Asa", c: "Coxa", d: 'Ponta da asa'}, 
        correctAnswer: "a" 
    },
    { 
        question: "Qual destas aves é considerada uma iguaria devido ao seu pequeno tamanho e sabor delicado?", 
        answers: { a: "Galinha", b: "Codorna", c: "Avestruz", d: 'Faisão' }, 
        correctAnswer: "b" 
    },
    { 
        question: "Qual é o país que mais consome carne de frango per capita?", 
        answers: { a: "Brasil", b: "Estados Unidos", c: "Austrália", d: 'China' }, 
        correctAnswer: "c" 
    },
    { 
        question: "Qual destas aves tem a carne mais escura e com sabor mais forte?", 
        answers: { a: "Frango", b: "Faisão", c: "Peru" , d: 'Pato'}, 
        correctAnswer: "d" 
    },
    { 
        question: "O que diferencia um frango “caipira” de um frango de granja?", 
        answers: { a: "A dieta e o ambiente em que é criado ", b: "O tamanho", c: "O tipo de carne", d: 'A cor das penas' }, 
        correctAnswer: "a" 
    },
    { 
        question: "Qual é o principal nutriente encontrado na clara do ovo?", 
        answers: { a: "Carboidrato", b: "Gordura", c: "Proteína", d: 'Fibra' }, 
        correctAnswer: "c" 
    },
    { 
        question: "Os ovos são frequentemente usados em vacinas porque:", 
        answers: { a: "A casca do ovo serve como proteção natural para o vírus", b: "Os ovos contêm proteínas necessárias para o desenvolvimento de vírus atenuados", c: "Os ovos têm propriedades medicinais que aumentam a eficácia das vacinas", d: 'O interior do ovo é naturalmente estéril' }, 
        correctAnswer: "b" 
    },
    { 
        question: "O OVO DE QUAL AVE TEM MAIS PROTEÍNA EM 50g", 
        answers: { a: "frango ", b: "pata", c: "codorna", d: 'peru ' }, 
        correctAnswer: "d" 
    },
    { 
        question: "Qual parte do ovo contém a maior parte das vitaminas e minerais?", 
        answers: { a: "Clara", b: "Casca", c: "Gema", d: 'Membrana interna' }, 
        correctAnswer: "c" 
    },
    { 
        question: "Em média, quantas calorias contém um ovo grande?", 
        answers: { a: "70 calorias", b: "50 calorias", c: "100 calorias", d: '120 calorias' }, 
        correctAnswer: "a" 
    },
    { 
        question: "Qual é a diferença entre ovos brancos e ovos marrons em termos de nutrição?", 
        answers: { a: "Não há diferença nutricional", b: "Os brancos são mais nutritivos", c: "Os marrons são mais nutritivos", d: 'Os brancos têm menos colesterol' }, 
        correctAnswer: "a" 
    },
    { 
        question: "Qual país é o maior produtor de frango do mundo?", 
        answers: { a: "Brasil", b: "Estados Unidos", c: "China", d: 'Índia' }, 
        correctAnswer: "b" 
    },
    { 
        question: "Qual é uma das principais vantagens do consumo de ovos na dieta?", 
        answers: { a: "Alto teor de açúcar", b: "Alta quantidade de fibras ", c: "Baixo teor de colesterol", d: 'Fonte de vitamina D' }, 
        correctAnswer: "d" 
    },
    { 
        question: "Qual é a vantagem nutricional da carne de aves em relação à carne vermelha?", 
        answers: { a: "Menor teor de gordura saturada", b: "Mais rica em ferro", c: "Maior teor de proteínas", d: 'Maior quantidade de calorias' }, 
        correctAnswer: "a" 
    }
];

// Função para selecionar 3 perguntas aleatórias
function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

// Renderiza as perguntas no HTML
function renderQuiz() {
    const quizContainer = document.getElementById('quiz');
    const selectedQuestions = getRandomQuestions();
    quizContainer.innerHTML = '';

    selectedQuestions.forEach((q, index) => {
        quizContainer.innerHTML += `
            <div class="question">
                <p><strong>${q.question}</strong></p>
                <label>
                    <input type="radio" name="question${index}" value="a"> ${q.answers.a}
                </label><br>
                <label>
                    <input type="radio" name="question${index}" value="b"> ${q.answers.b}
                </label><br>
                <label>
                    <input type="radio" name="question${index}" value="c"> ${q.answers.c}
                </label><br>
                <label>
                    <input type="radio" name="question${index}" value="d"> ${q.answers.d}
                </label>
            </div>
        `;
    });

    return selectedQuestions;
}

// Função para verificar as respostas
function checkAnswers(questions) {
    let correctCount = 0;

    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.correctAnswer) {
            correctCount++;
        }
    });

    return correctCount === questions.length;
}

// Lógica de envio e validação do quiz
document.getElementById('submit').addEventListener('click', function() {
    const selectedQuestions = renderQuiz.selectedQuestions || getRandomQuestions();
    const allCorrect = checkAnswers(selectedQuestions);

    const resultContainer = document.getElementById('result');
    if (allCorrect) {
        resultContainer.textContent = "Parabéns! Você acertou todas as perguntas!";
    } else {
        resultContainer.textContent = "Algumas respostas estão incorretas. Tente novamente.";
    }
});

// Inicializa o quiz
renderQuiz();
