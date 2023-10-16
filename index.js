const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://127.0.0.1:27017/your_server")
  .then(() => {
    console.log("Berhasil Connect Ke Monggo DB");
  })
  .catch((err) => {
    console.log(err);
  });

const movieSchema = new Schema({
  title: String,
  genre: String,
  year: Number,
  director: String,
  rating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

// find by year and genre
// Movie.findOne({ year: { $gte: 2018 }, genre: "Action" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find by id
// Movie.findById("652a552e248c5e4f0ba09ea1")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// update one
// Movie.updateOne({ year: { $lt: 2019 } }, { rating: 8 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find by id trus di update
Movie.findByIdAndUpdate(
  "652a552e248c5e4f0ba09ea3",
  { rating: 9 },
  { new: true }
)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Movie.insertMany([
//   {
//     title: "Black Panther",
//     genre: "Action",
//     director: "Ryan Coogler",
//     year: 2018,
//     cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
//     description:
//       "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
//     rating: 7.3,
//     image: "https://www.example.com/black_panther.jpg",
//   },
//   {
//     title: "Avengers: Infinity War",
//     genre: "Action",
//     director: "Anthony Russo, Joe Russo",
//     year: 2018,
//     cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
//     description:
//       "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
//     rating: 8.4,
//     image: "https://www.example.com/avengers_infinity_war.jpg",
//   },
//   {
//     title: "Joker",
//     genre: "Crime",
//     director: "Todd Phillips",
//     year: 2019,
//     cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
//     description:
//       "In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: 'The Joker'.",
//     rating: 8.4,
//     image: "https://www.example.com/joker.jpg",
//   },
//   {
//     title: "Parasite",
//     genre: "Drama",
//     director: "Bong Joon Ho",
//     year: 2019,
//     cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
//     description:
//       "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
//     rating: 8.6,
//     image: "https://www.example.com/parasite.jpg",
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     genre: "Animation",
//     director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
//     year: 2018,
//     cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
//     description:
//       "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
//     rating: 8.4,
//     image: "https://www.example.com/spider_man_into_the_spider_verse.jpg",
//   },
// ])
//   .then((result) => {
//     console.log("Berhasil Menambahkan data dummy");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const movie = new Movie({
//   title: "Boruto",
//   genre: "adventure",
//   year: 2019,
//   rating: 6.3,
// });

// movie.save();
