let axios = require('axios');
let cheerio = require('cheerio');
const cookingTermService= require('./cookingTerms');
const cookingTermModel = require("../models/cookingTerm");


const createCookingTermByScrape = async (title, description) => {
    var term = new cookingTermModel({ 
      title: title,
      description:description 
    });
    term.save(function (err, example) {
      if (err) console.log(err);
      console.log("New term created!");
    });
  }

const scrape= async()=>{
    const page= await axios.get('https://pos.toasttab.com/blog/on-the-line/culinary-terms');
    const $ = cheerio.load(page.data);
    $('p').each(function(){
        description = $(this).text();
        $('strong',this).each(function(){
            title = $(this).text();
            createCookingTermByScrape(title,description);
        });
    });
}

module.exports={
    scrape
};