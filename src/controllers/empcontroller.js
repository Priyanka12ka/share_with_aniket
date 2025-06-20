let dbmodel=require("../model/savedeptmodel.js");  //to fetch handler function from mode-savedeptmodel-....
let empcrud=require("../model/empcrudmodel.js");
const { none } = require("../middleware/fileupload.js");

exports.newemp=(req,res)=>
{
    let p=dbmodel.getAllDept();
    p.then((result)=>
    {
       res.render("newemp.ejs", {list:result , msg: ""});
    })
    
}
exports.saveEmployee = (req, res) => {
    let { name, mail, contact, sal, deptid } = req.body;
    let photo = req.file.filename;
    let promise = empcrud.saveEmp(name, mail, contact, sal, photo, deptid);
    promise.then((result) => {
        let p = dbmodel.getAllDept();
        p.then((r) => {
            res.render("newemp.ejs", { list: r, msg:result }); 
            console.log(result);
        }).catch((err) => {
            res.send(err);
        });
    }).catch((err) => {
        res.send(err);
    });
};


exports.verifyEmail = (req, res) => {
    let useremail = req.query.mail;
    if (!useremail) {
        return res.send(""); // return empty response
    }

    let promise = empcrud.verifyEmail(useremail);
    promise.then((result) => {
        if (result.length > 0) {
            res.send("Email Address already Present !!!!!");
        } else {
            res.send(""); // return empty response when not found
        }
    }).catch((err) => {
        res.send(""); 
    });
};

exports.viewemp=((req,res)=>
{  
     let p = dbmodel.getAllDept();
     p.then((r) => {
            res.render("viewemp.ejs", { list: r, msg:""}); 
        
        }).catch((err) => {
            res.send(err);
        });
});

exports.getEmpByDeptId=(req,res)=>
{
     let deptid=parseInt(req.query.deptid);
     let promise=empcrud.getEmpByDeptId(deptid);
     promise.then((result)=>
    {
        res.json(result);
    })
     
}