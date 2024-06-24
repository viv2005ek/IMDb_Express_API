function searchingMovieEnter(event) {
    if (event.key === 'Enter') {
        searchingMovie();
    }
}

function searchingMovie() {
    const searchMovie = document.getElementById("searchMovie");
    let movie_name = searchMovie.value;
    console.log("searching...");
    fetchMovieData(movie_name);
}

async function fetchMovieData(movie_name) {
    const url = `https://www.omdbapi.com/?apikey=2e01278e&t=${movie_name}`;
    console.log(url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        if (data.Title !== undefined) {
            displayMovieData(data);
            window.location.href = "#historySearch";
        }
    } catch (error) {
        console.error("There was an error fetching movie data:", error);
    }
}

const historySearch = document.getElementById("historySearch");

function displayMovieData(data) {
    contentToAdd = historySearch.innerHTML;
    historySearch.innerHTML = `<div class="card m-3" style="width: 18rem;">
  <img src="${data.Poster}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.Title}</h5>
        <p class="card-text">Actors:- ${data.Actors}</p>
        <p class="card-text">Rating:- ${data.imdbRating}</p>
        <p class="card-text">Year:- ${data.Year}</p>
        <p class="card-text">Language:- ${data.Language}</p>
    <a href="/${data.Title}" class="btn btn-primary">Watch Now <i class="bi bi-box-arrow-up-right"></i></a>
  </div>
</div>` + contentToAdd;
}