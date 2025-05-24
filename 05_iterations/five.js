// const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.filter((num)=>num>=5);
// console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ]

const books = [
  { "title": "The Silent Ocean", "genre": "Science Fiction", "publish": 2017 },
  { "title": "Midnight in Autumn", "genre": "Romance", "publish": 2020 },
  { "title": "Shadows of the Past", "genre": "Thriller", "publish": 2015 },
  { "title": "Windswept Plains", "genre": "Historical Fiction", "publish": 2012 },
  { "title": "Code Breaker", "genre": "Techno Thriller", "publish": 2023 },
  { "title": "Beneath the Canopy", "genre": "Adventure", "publish": 2018 },
  { "title": "Ghosts of Tomorrow", "genre": "Horror", "publish": 2019 },
  { "title": "Canvas of Dreams", "genre": "Drama", "publish": 2021 },
  { "title": "Echoes of Silence", "genre": "Mystery", "publish": 2016 },
  { "title": "Skyline Protocol", "genre": "Cyberpunk", "publish": 2024 }
]

//romantic books publis after 2020
// const userBooks = books.filter((book)=>{return book.publish >= 2020 && book.genre === 'Romance'});
// console.log(userBooks); //[ { title: 'Midnight in Autumn', genre: 'Romance', publish: 2020 } ]