let dbmodel=require("../model/savedeptmodel.js");  //to fetch handler function from mode-savedeptmodel-....
let empcrud=require("../model/empcrudmodel.js");
const { none } = require("../middleware/fileupload.js");

exports.newemp=(req,res)=>
{
    let p=dbmodel.getAllDept();
    p.then((result)=>
    {
       res.render("newemp.ejs", {list:result , msg:" "});
    })
    
}
exports.saveEmployee = (req, res) => {
    let {eid, name, mail, contact, sal, photo, deptid } = req.body;
    let filename = req.file.filename;

    let promise = empcrud.saveEmployee(eid, name, mail, contact, sal, photo, deptid);
    console.log(name);
    promise.then((result) => {
        let p = dbmodel.getAllDept();
        p.then((r) => {
            res.render("newemp.ejs", { deptList: r, msg: result });
        });
        p.catch((err)=>
        {
             res.send(err);
        });
    });
    promise.catch((err)=>
    {
        res.send(err);
    });

};



exports.viewemp=((req,res)=>
{
    
  res.render("viewemp.ejs");
})