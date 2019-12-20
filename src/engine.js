import readlineSync from 'readline-sync';
import greeting from '.';

const engine = (greetText) => {
  const name = greeting(greetText);
  const gameCounter = 3;

  const iter = (gameData, iterCounter = 0) => {
    if (iterCounter === gameCounter) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }

    const answerData = gameData();
    const rigthAnswer = answerData[0];
    console.log(`Question : ${answerData[1]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rigthAnswer) {
      console.log(`\n'${answer}' is wrong answer, corrent answer was '${rigthAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return false;
    }

    console.log('Correct!\n');
    return iter(gameData, iterCounter + 1);
  };
  return iter;
};

export default engine;
