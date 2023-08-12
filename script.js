// Definindo as dimensões do tabuleiro
const gridSize = 20;
const gridWidth = 600;
const gridHeight = 400;

// Inicializando variáveis para a cobra e a comida
let snake = [{ x: 5, y: 5 }];
let food = { x: 10, y: 10 };

// Inicializando a direção da cobra
let direction = "right";

// Função para atualizar a posição da cobra e verificar colisões
function updateGame() {
  // Atualizar a posição da cobra com base na direção
  // Verificar colisão com a borda do tabuleiro ou com ela mesma

  // Verificar se a cobra comeu a comida
  if (snake[0].x === food.x && snake[0].y === food.y) {
    // Aumentar o tamanho da cobra
    // Gerar nova posição para a comida
  }
}

// Função para renderizar o jogo
function renderGame() {
  // Limpar o tabuleiro

  // Desenhar a cobra

  // Desenhar a comida
}

// Função para atualizar a direção da cobra com base nas teclas pressionadas
function changeDirection(event) {
  // Atualizar a variável 'direction' com base na tecla pressionada
}

// Configurar o evento de teclado para a função changeDirection
window.addEventListener("keydown", changeDirection);

// Função para iniciar o jogo
function startGame() {
  // Configurar o intervalo para chamar a função updateGame repetidamente
}

// Iniciar o jogo
startGame();
