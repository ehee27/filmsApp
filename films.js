const films = [
  {
    id: "1",
    genre: "drama",
    title: "There Will Be Blood",
    director: "Paul Thomas Anderson",
    starring: ["Daniel Day Lewis, Paul Dano"],
    year: "2007",
    synopsis: "There Will Be Blood is a 2007 American period drama film written and directed by Paul Thomas Anderson, loosely based on the 1927 novel Oil! by Upton Sinclair.[4] It stars Daniel Day-Lewis as Daniel Plainview, a silver miner turned oilman on a ruthless quest for wealth during Southern California's oil boom of the late 19th and early 20th centuries. Paul Dano, Kevin J. O'Connor, Ciarán Hinds, and Dillon Freasier co-star."
  },

  {
    id: "2",
    genre: "drama",
    title: "No Country For Old Men",
    director: "Ethan & Joel Coen",
    starring: ["Tommy Lee Jones, Javier Bardem"],
    year: 2007,
    synopsis: "No Country for Old Men is a 2007 American neo-Western crime thriller film written and directed by Joel and Ethan Coen, based on Cormac McCarthy's 2005 novel of the same name. The film follows three main characters: Llewelyn Moss (Brolin), a Vietnam War veteran and welder who stumbles upon a large sum of money in the desert; Anton Chigurh (Bardem), a hitman who is tasked with recovering the money; and Ed Tom Bell (Jones), a local sheriff investigating the crime. The film also stars Kelly Macdonald as Moss's wife Carla Jean, and Woody Harrelson as a bounty hunter seeking Moss and the return of the $2 million."
  },

  {
    id: "3",
    genre: "comedy",
    title: "Ace Ventura Pet Detective",
    director: "Tom Shadyac",
    starring: "Jim Carrey",
    year: "1994",
    synopsis: "Ace Ventura: Pet Detective is a 1994 American comedy film starring Jim Carrey as Ace Ventura, an animal detective who is tasked with finding the abducted dolphin mascot of the Miami Dolphins football team. The film was directed by Tom Shadyac, who wrote the screenplay with Jack Bernstein and Jim Carrey. The film co-stars Courteney Cox, Tone Loc, Sean Young, and then-Miami Dolphins quarterback Dan Marino and features a cameo appearance from death metal band Cannibal Corpse."
  },

  {
    id: "4",
    genre: "comedy",
    title: "Step Brothers",
    director: "Adam McKay",
    starring: ["Will Ferrell, John C. Reilly"],
    year: "2008",
    synopsis: "Step Brothers is a 2008 American comedy film directed by Adam McKay, produced by Jimmy Miller and Judd Apatow, and written by Will Ferrell and McKay from a story by Ferrell, McKay, and John C. Reilly. It follows Brennan (Ferrell) and Dale (Reilly), two grown men who are forced to live together as brothers after their single parents, with whom they still live, marry each other. Richard Jenkins, Mary Steenburgen, Adam Scott, and Kathryn Hahn also star."
  }
]

const listFilms = () =>{
  return [...films];
}

// search by genre
const byGenre = (genre) => {
  let result = films.filter(film => {
    return film.genre === genre;
  })
  return [...result];
}

// can find an indivual film based on 'id'
const find = (id) => {
  const film = films.find(film => film.id === id);
  return {...film}
}

module.exports = {listFilms, find, byGenre};