const div$$ = document.querySelector('[data-function="gameboard"]');
const TrivialUrl = "https://opentdb.com/api.php?type=multiple&amount=4";
const input$$ = document.querySelector('[data-function="question-number"]');
const button$$ = document.querySelector('[data-function="start-game"]');

const getGame = async () => {
  const gameRes = await fetch(TrivialUrl);
  const gameJson = await gameRes.json();

  const questions = [];
  for (let i = 0; i < gameJson.results.length; i++) {
    const question = gameJson.results[i];
    questions.push(question);
  }
  console.log(questions);

  trivial = [];
  questions.forEach((data) => {
    const trivialData = {
      question: data.question,
    };
    trivial.push(trivialData);
  });
  printGame(trivial);
};

const printGame = (trivial) => {
  const trivialHTML = trivial
    .map(
      (triv) => `
    <h1>${triv.question}</h1>
    
    `
    )
    .join("");
  trivial.innerHTML = trivialHTML;
};

button$$.addEventListener("click", getGame);
