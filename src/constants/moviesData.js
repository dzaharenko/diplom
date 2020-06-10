const data = [
  {
    id: 5,
    title: "Four Rooms",
    tagline: "Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.",
    vote_average: 6.6,
    vote_count: 712,
    release_date: '1995-12-09',
    poster_path: "https://image.tmdb.org/t/p/w500/eQs5hh9rxrk1m4xHsIz1w11Ngqb.jpg",
    overview: "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.",
    budget: 4000000,
    revenue: 4300000,
    genres: [
      "Crime",
      "Comedy"
    ],
    runtime: 98
  },
  {
    id: 11,
    title: "Star Wars",
    tagline: "A long time ago in a galaxy far, far away...",
    vote_average: 8.1,
    vote_count: 8516,
    release_date: '1977-05-25',
    poster_path: "https://image.tmdb.org/t/p/w500/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
    overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    budget: 11000000,
    revenue: 775398007,
    genres: [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    untime: 121
  },
  {
    id: 12,
    title: "Finding Nemo",
    tagline: "There are 3.7 trillion fish in the ocean. They're looking for one.",
    vote_average: 7.7,
    vote_count: 8035,
    release_date: '2003-05-30',
    poster_path: "https://image.tmdb.org/t/p/w500/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg",
    overview: "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    budget: 94000000,
    revenue: 940335536,
    genres: [
      "Animation",
      "Family"
    ],
    runtime: 100
  },
  {
    id: 13,
    title: "Forrest Gump",
    tagline: "Life is like a box of chocolates...you never know what you're gonna get.",
    vote_average: 8.3,
    vote_count: 10297,
    release_date: '1994-07-06',
    poster_path: "https://image.tmdb.org/t/p/w500/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
    overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
    budget: 55000000,
    revenue: 677945399,
    genres: [
      "Comedy",
      "Drama",
      "Romance"
    ],
    runtime: 142
  },
  {
    id: 14,
    title: "American Beauty",
    tagline: "Look closer.",
    vote_average: 7.9,
    vote_count: 4545,
    release_date: '1999-09-15',
    poster_path: "https://image.tmdb.org/t/p/w500/or1MP8BZIAjqWYxPdPX724ydKar.jpg",
    overview: "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
    budget: 15000000,
    revenue: 356296601,
    genres: [
      "Drama"
    ],
    "runtime": 122
  },
  {
    id: 15,
    title: "Citizen Kane",
    tagline: "It's Terrific!",
    vote_average: 8.1,
    vote_count: 1607,
    release_date: '1941-04-30',
    poster_path: "https://image.tmdb.org/t/p/w500/n8wfFsQ5vtm6dM8vdgXb6OLv2GY.jpg",
    overview: "Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
    budget: 839727,
    revenue: 23217674,
    genres: [
      "Mystery",
      "Drama"
    ],
    runtime: 119
  },
  {
    id: 18,
    title: "The Fifth Element",
    tagline: "There is no future without it.",
    vote_average: 7.3,
    vote_count: 4699,
    release_date: '1997-05-07',
    poster_path: "https://image.tmdb.org/t/p/w500/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg",
    overview: "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
    budget: 90000000,
    revenue: 263920180,
    genres: [
      "Adventure",
      "Fantasy",
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    runtime: 126
  },
  {
    id: 19,
    title: "Metropolis",
    tagline: "There can be no understanding between the hands and the brain unless the heart acts as mediator.",
    vote_average: 8.1,
    vote_count: 837,
    release_date: '1927-01-10',
    poster_path: "https://image.tmdb.org/t/p/w500/qriaeUUwdmlgethK3aSAx68mG05.jpg",
    overview: "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.",
    budget: 92620000,
    revenue: 650422,
    genres: [
      "Drama",
      "Science Fiction"
    ],
    runtime: 153
  },
  {
    id: 22,
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    tagline: "Prepare to be blown out of the water.",
    vote_average: 7.5,
    vote_count: 8914,
    release_date: '2003-07-09',
    poster_path: "https://image.tmdb.org/t/p/w500/tkt9xR1kNX5R9rCebASKck44si2.jpg",
    overview: "Jack Sparrow, a freewheeling 17th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
    budget: 140000000,
    revenue: 655011224,
    genres: [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    runtime: 143
  },
  {
    id: 24,
    title: "Kill Bill: Vol. 1",
    tagline: "Go for the kill.",
    vote_average: 7.8,
    vote_count: 6511,
    release_date: '2003-10-10',
    poster_path: "https://image.tmdb.org/t/p/w500/97fNAi62HawGjWru7PvVmF7RAbU.jpg",
    overview: "An assassin is shot at the altar by her ruthless employer, Bill and other members of their assassination circle – but 'The Bride' lives to plot her vengeance. Setting out for some payback, she makes a death list and hunts down those who wronged her, saving Bill for last.",
    budget: 30000000,
    revenue: 180949045,
    genres: [
      "Action",
      "Crime"
    ],
    runtime: 111
  }
];

export default data;
