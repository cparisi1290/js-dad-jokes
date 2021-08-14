const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

btn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com/', config)
    .then((resp) => resp.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
