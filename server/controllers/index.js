const example1 = (req, res) => {
  res.render('example1');
};

const example2 = (req, res) => {
  res.render('example2');
};

const example3 = (req, res) => {
  res.render('example3');
};

// making a getSongs function
const getSongs = (req, res) => {
  const songs = [
    { artist: 'De\'Andre', title: 'The Best Song' },
    { artist: 'De\'Andre', title: 'The Second Best Song' },
    { artist: 'De\'Andre', title: 'The Third Best Song' },
  ];

  res.json(songs);
};

module.exports.example1 = example1;
module.exports.example2 = example2;
module.exports.example3 = example3;
module.exports.getSongs = getSongs;
