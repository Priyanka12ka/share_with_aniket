let dbmodel=require("../model/savedeptmodel.js");  //to fetch handler function from mode-savedeptmodel-....
let empcrud=require("../model/empcrudmodel.js");
exports.newemp=(req,res)=>
{
    let promise=dbmodel.getAllDept();  //to fetch all dept in dropdown which will be selected by Employee
    promise.then((result)=>
    {
       
         res.render("newemp.ejs", {deptList:result},msg=" ");

    });

}

exports.saveEmployee = (req, res) => {
    let { name, email, contact, sal, deptid } = req.body;
    let filename = req.file.filename;

    let promise = empcrud.saveEmployee(name, email, contact, sal, filename, deptid);
    promise.then((result) => {
        let p = dbmodel.getAllDept();
        p.then((r) => {
            res.render("newemp.ejs", { deptList: r, msg: result });
        });
    });
    promise.catch((err)=>
    {
        res.send(err);
    });

};

