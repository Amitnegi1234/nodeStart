const dataServices=require('../service/dataService')
const getUsers=(req,res)=>{
    let users;
    users = dataServices.readingDataFromFile()
    users = dataServices.sortingValuesUsingParams(req.query,users)
    res.json(users)
}

module.exports={getUsers}