// Definições do canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = 400;
canvas.height = 400;

// Definições do jogo
const gridSize = 20;
const snake = [{ x: 5, y: 5 }];
let direction = "right";

// Função para atualizar o jogo
function update() {
  // Atualizar a posição da cobra com base na direção
  const head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case "up":
      head.y -= 1;
      break;
    case "down":
      head.y += 1;
      break;
    case "left":
      head.x -= 1;
      break;
    case "right":
      head.x += 1;
      break;
  }
  snake.unshift(head);

  // Verificar colisões com as bordas e o próprio corpo da cobra
  if (head.x < 0 || head.x >= canvas.width / gridSize ||
      head.y < 0 || head.y >= canvas.height / gridSize) {
    // Game over - tratamento das colisões
    return;
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      // Game over - colisão com o próprio corpo
      return;
    }
  }

  // Atualizar a posição da comida
  
  // Limpar o canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Desenhar a cobra
  snake.forEach(segment => {
    ctx.fillStyle = "green";
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  });
  
  // Desenhar a comida
  
  // Chamar a próxima atualização
  requestAnimationFrame(update);
}

// Função de controle de teclas
function handleKey(event: KeyboardEvent) {
  switch (event.key) {
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
  }
}

// Iniciar o jogo e o loop de atualização
function startGame() {
  document.addEventListener("keydown", handleKey);
  update();
}

// Iniciar o jogo quando a página carregar
window.addEventListener("load", startGame);

