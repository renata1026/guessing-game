// Get references to the buttons
const normalButton = document.getElementById('normalButton');
const bonusButton = document.getElementById('bonusButton');

// Define the maximum attempts
const maxAttempts = 5;

// Add click event listeners to the buttons for desktops
normalButton.addEventListener('click', () => startGame('normal'));
bonusButton.addEventListener('click', () => startGame('bonus'));

// Add touch event listeners to the buttons for touch-enabled devices
normalButton.addEventListener('touchend', (event) => {
  event.preventDefault(); // Prevent the default touch behavior
  startGame('normal');
});
bonusButton.addEventListener('touchend', (event) => {
  event.preventDefault(); // Prevent the default touch behavior
  startGame('bonus');
});

// Function to start the game based on the chosen edition
function startGame(edition) {
  if (edition === 'normal') {
    playNormalEdition();
  } else if (edition === 'bonus') {
    playBonusEdition();
  } else {
    alert('You have to choose between normal and bonus editions.');
  }
}

// Function for the normal edition of the game
function playNormalEdition() {
  const random = Math.ceil(Math.random() * 10);

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const guess = parseInt(
      prompt(`Attempt ${attempt}/${maxAttempts}: Enter your guess (1-10):`)
    );

    if (guess < random) {
      alert('Your number was too low. Try again.');
    } else if (guess > random) {
      alert('Your number was too high. Try again.');
    } else if (guess === random) {
      alert(`Congratulations! You guessed the correct number ${random}!`);
      break;
    }

    if (attempt === maxAttempts) {
      alert(
        `Sorry, you've reached the maximum number of attempts. The correct number was ${random}.`
      );
    }
  }
}

// Function for the bonus edition of the game
function playBonusEdition() {
  const min = parseInt(prompt('Please input the minimum number: '));
  const max = parseInt(prompt('Please input the maximum number: '));
  const random = Math.ceil(Math.random() * (max - min)) + min;

  for (let attempt = 1; attempt <= 5; attempt++) {
    const guess = parseInt(
      prompt(
        `Attempt ${attempt}/5: Please guess a number between ${min} and ${max}:`
      )
    );

    if (guess < random) {
      alert(
        `Your guess was too low. You have ${5 - attempt} attempts remaining.`
      );
    } else if (guess > random) {
      alert(
        `Your guess was too high. You have ${5 - attempt} attempts remaining.`
      );
    } else if (guess === random) {
      alert(`Congratulations! You guessed the correct number ${random}!`);
      break;
    }

    if (attempt === 5) {
      alert(
        `Sorry, you've reached the maximum number of attempts. The correct number was ${random}.`
      );
    }
  }
}
