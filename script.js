let rollCount = 0;

document.getElementById("rollButton").addEventListener("click", function () {
  const dice = document.getElementById("dice");
  const sound = document.getElementById("diceSound");
  const result = document.getElementById("result");
  const afterThreeRolls = document.getElementById("afterThreeRolls");
  const game = document.getElementById("game");

  // Список вопросов
  const questions = [
    "Какая моя цель?",
    "Кто моя аудитория?",
    "Какой мой продукт?",
    "Откуда приходят новые клиенты?",
    "Как я забочусь о рекламе в своём бизнесе?",
    "Клиенты понимают, что я делаю?"
  ];

  // Генерация случайного числа от 1 до 6
  const randomNum = Math.floor(Math.random() * 6) + 1;

  // Установка вращений, чтобы грань кубика точно легла на поверхность
  let rotateX = 0;
  let rotateY = 0;

  switch (randomNum) {
    case 1:
      rotateX = 0;
      rotateY = 0;
      break;
    case 2:
      rotateX = 0;
      rotateY = -90;
      break;
    case 3:
      rotateX = 0;
      rotateY = 180;
      break;
    case 4:
      rotateX = 0;
      rotateY = 90;
      break;
    case 5:
      rotateX = -90;
      rotateY = 0;
      break;
    case 6:
      rotateX = 90;
      rotateY = 0;
      break;
  }

  // Добавляем случайное количество оборотов
  rotateX += Math.floor(Math.random() * 4 + 3) * 360;
  rotateY += Math.floor(Math.random() * 4 + 3) * 360;

  dice.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Воспроизведение звука
  sound.play();

  // Увеличение счетчика бросков
  rollCount++;

  // Отображение результата и вопроса после завершения анимации
  setTimeout(() => {
    result.textContent = `Выпало: ${randomNum}. ${questions[randomNum - 1]}`;

    // Показ сообщения и кнопки после 3-х бросков
    if (rollCount >= 3) {
      afterThreeRolls.style.display = "flex";
      game.style.display = 'none'
    }
  }, 1500);
});
