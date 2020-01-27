const axios = require('axios');
const cheerio = require('cheerio');

function getAreas() {
  return axios
    .get('https://aroundmaps.com/ID/')
    .then((response) => {
      const $ = cheerio.load(response.data);
      return $('h4 a')
        .map(function(i, elem) { return $(this).attr('href'); })
        .get();
    });
};

getAreas()
  .then((list) => { 
    console.log(list)
  });
