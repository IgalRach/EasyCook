const CategoryService = require('../services/category');


const createCategory = async (req,res)=>{
    const category = await CategoryService.createCategory(req);
    res.json(category);
}


const getCategories = async (req,res) => {
    const category= await CategoryService.getcategories();
    try {
    res.json(category);
    } catch (err) {}
}


const getCategoryByName = async (req,res)=>{

    const category= await CategoryService.getCategoryByName(req);
    try {
        res.json(category);
    } catch (error) {
        
    }
}


const deleteCategory = async (req,res)=>{
    const category = await CategoryService.deleteCategory(req.params.categoryname);
    res.send();
}



module.exports={
    createCategory,
    getCategories,
    getCategoryByName,
    deleteCategory,
}