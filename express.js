const express = require('express');
const { engine } = require('express-handlebars');


const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/:movie_name", async(req, res) => {
    const { movie_name } = req.params;
    const url = `https://www.omdbapi.com/?apikey=2e01278e&t=${movie_name}`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        res.render("movies", {
            title: data.Title,
            poster: data.Poster,
            actors: data.Actors,
            rating: data.imdbRating,
            year: data.Year,
            language: data.Language,
        });
        console.log(response.data);
    } catch (error) {

        console.error('Error fetching movie data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});