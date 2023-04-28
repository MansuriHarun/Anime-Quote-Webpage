const quoteContainer = document.getElementById('quote-container');

getQuote();
function getQuote(){
    fetch("https://animechan.vercel.app/api/random")
          .then((response) => response.json())
          .then((data) => {
            quoteContainer.innerHTML = `
                <p><strong>Anime: <strong>${data.anime}</p>
                <p><strong>Character: <strong>${data.character}</p>
                <p><strong>Quote: <strong>${data.quote}</p>
            `;
          })
          .catch(error => console.log(error));
}