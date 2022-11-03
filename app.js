// create a simple webpage, choose a film genre, route to clickable links for each film
// import express, and films module

const express = require('express');
const films = require('./films');
const app = express();

// use public assets / CSS
app.use(express.static('public'));

//--------------Primary get request / homepage-------------------------------------------
// create a 'content' variable that we can pull from to populate. Create an HTML string object that we can modify via a mapping method. When .map is called is will inject an HTML format (elements) mapped from each film in the films.

// then respond by sending the HTML

app.get('/', (req, res) => {
  const content = films.listFilms();
  const html = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Films</title>
          <link rel="stylesheet" href="/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    </head>
      <body>
      <header>
        <div class="container">
        <div id="logo">
            <h1><span class="highlight">Film</span> Genres</h1>
        </div>
          <div>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/genres">Genres</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section id="banner">
        <div class="container">
        <h1>This is the Heading</h1>
         <p>Film is one of the most influencial artistic mediums in modern society. Let's explore some genres and a couple of popular films within each.</p>
         
        </div>
      </section>

          
      </body>
    </html>
  `
  res.send(html);
})
//--------------Genres route-------------------------------------------
app.get('/genres', (req, res) => {
  const content = films.listFilms();
  const html = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Films</title>
          <link rel="stylesheet" href="/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    </head>
      <body>
      <header>
        <div class="container">
        <div id="logo">
            <h1><span class="highlight">Film</span> Genres</h1>
        </div>
          <div>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/genres">Genres</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section id="banner">
        <div class="container">
        <div id="buttons">
        <button><a href ="/drama">Drama</a></button>
        <button><a href ="/comedy">Comedy</a></button></div>
        </div>
      </section>

          
      </body>
    </html>
  `
  res.send(html);
})

//--------------DRAMA Route-------------------------------------------
// list film titles and click to view each films indivual route page
// film specs, info and pic
app.get('/drama', (req, res) => {
    // const genre = req.params.genre;
  // import my data (films)
  const content = films.byGenre("drama");
  // create an HTML string to render on page
  const html = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Films</title>
          <link rel="stylesheet" href="/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    </head>
      <body>
      <header>
        <div class="container">
        <div id="logo">
            <h1><span class="highlight">Film</span> Genres</h1>
        </div>
          <div>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/genres">Genres</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section id="banner">
        <div class="container">
          ${content.map(film => `
            <div class="filmBox">
              <span><h3>${film.title}</h3></span>
              <div id="content">
                <div class="synopsis"><p>${film.synopsis}</p></div>
                <button><a href ="/${film.id}">More</a></button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

          
      </body>
    </html>
  `;
  res.send(html);
})

//--------------COMEDY Route-------------------------------------------
app.get('/comedy', (req, res) => {
  // const genre = req.params.genre;
  // import my data (films)
  const content = films.byGenre("comedy");
  // create an HTML string to render on page
  const html = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Films</title>
          <link rel="stylesheet" href="/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    </head>
      <body>
      <header>
        <div class="container">
        <div id="logo">
            <h1><span class="highlight">Film</span> Genres</h1>
        </div>
          <div>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/genres">Genres</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section id="banner">
        <div class="container">
          ${content.map(film => `
            <div class="filmBox">
              <span><h3>${film.title}</h3></span>
              <div id="content">
                <div class="synopsis"><p>${film.synopsis}</p></div>
                <button><a href ="/${film.id}">More</a></button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

          
      </body>
    </html>
  `;
  res.send(html);
})

//--------------Routing by id / individual film pages-------------------------------------------
// create sub pages based off the route + id. Must set route.params to "id"
app.get('/:id', (req,res) => {
  const id = req.params.id;
  const film = films.find(id);
  res.send(`
  <!DOCTYPE html>
    <html>
      <head>
        <title>Films</title>
          <link rel="stylesheet" href="/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    </head>
      <body>
      <header>
        <div class="container">
        <div id="logo">
            <h1><span class="highlight">Film</span> Genres</h1>
        </div>
          <div>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/genres">Genres</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div id="content">
        <div class="container">

          <div id="title"><span><h3>${film.title}</h3></span></div>

            <div id="specs">
              <h2>${film.year}</h2>
              <p>${film.director}</p>
              <hr>
                <div class="synopsis"><p>${film.synopsis}</p></div>
                <br>
                <p>Starring: ${film.starring}</p>
            </div>

            <div id="poster">
              <div class="film-image"><img src="${film.id}.jpeg" alt="${film.title}" width="275px"></div>
            </div>

          </div>

        </div>
      </div>
          
      </body>

    </html>
  `)
  console.log('hey');
})
app.listen(3000);


