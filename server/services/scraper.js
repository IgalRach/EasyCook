let axios = require('axios');
let cheerio = require('cheerio');
const { create } = require('../models/recipe');
const cookingTermService= require('./cookingTerms');

const scrape= async()=>{
    const page= await axios.get('https://pos.toasttab.com/blog/on-the-line/culinary-terms');
    const $ = cheerio.load(page.data);
    $('p').each(function(){
        description = $(this).text();
        $('strong',this).each(function(){
            title = $(this).text();
            
            cookingTermService.createCookingTerm(title,description);
        });
    });
}

module.exports={
    scrape
};