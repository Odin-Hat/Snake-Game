const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        const snakeSize = 20;
        let snake = [{ x: 100, y: 100 }];
        let direction = "right";

        function drawSnake() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snake.forEach(segment => {
                ctx.fillStyle = "#00a";
                ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
            });
        }

        function gameLoop() {
            // Update snake position and game logic here
            drawSnake();
            requestAnimationFrame(gameLoop);
        }

        gameLoop();
