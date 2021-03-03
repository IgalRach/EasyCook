let axios = require('axios');
let cheerio = require('cheerio');
const cookingTermModel = require("../models/cookingTerm");

const createCookingTerm = async (title, desc, url) => {
    cookingTermModel.findOne({ title: title }, function (err, term) {
      if (err) console.log(err);
      if (term) console.log("This cooking term already been created");
      else {
        var term = new cookingTermModel({
            title: title,
            description: desc,
            recipePic: url,
            firstLetter: title.charAt(0)
        });
        term.save(function (err, example) {
          if (err) console.log(err);
          console.log("New cooking term created!");
          return term;
        });
      }
    });
  };

const scrape = async () => {
    const page = await axios.get('https://crushmag-online.com/a-z-of-cooking-terms/')    
    const $ = cheerio.load(page.data); 
    $('p').each(function () {
        description = $(this).text();
        $('strong', this).each(function () {
            title = $(this).text();
            createCookingTerm(title, description, "image");
        });
    });
};

module.exports = {scrape};