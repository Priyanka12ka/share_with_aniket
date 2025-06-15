let deptmodel = require("../model/savedeptmodel.js");

exports.saveDept = ((req, res) => {
  let {deptname} = req.body;
  let promise = deptmodel.saveDept(deptname);
  promise.then((result) => {
    console.log(result);
    res.render("adddept.ejs",{msg:result});
  }).catch(err => {
    res.render("adddept.ejs",{msg:err});
  });
});

exports.homePage=((req,res)=>
{
  res.render("home.ejs");
});

exports.newDept=((req,res)=>{
    res.render("adddept.ejs",{msg:''});
    console.log(msg);
});

exports.getAllDept=(req,res)=>{
   let promise=deptmodel.getAllDept();
   promise.then((result)=>{
       res.render("viewdept.ejs",{deptList:result})
   });
   promise.catch((err)=>{
       res.send(err);
   });
}

exports.delDept=(req,res)=>{
     let did=parseInt(req.query.did);
     let promise=deptmodel.delDeptById(did);
     
     promise.then((result)=>                // /call from saveDeptmodel
    {
         let p=deptmodel.getAllDept();
         p.then((result)=>{
         res.render("viewdept.ejs",{deptList:result})
         });
         p.catch((err)=>{
          res.send(err);
        });
    });  
     promise.catch((err)=>{

     });
}

exports.updateDept=((req,res)=>
{
  res.render("updatedept.ejs", {deptName: req.query.dn, deptId: req.query.did}); 
});

exports.deptFinalUpdate = (req, res) => {
    console.log("Received POST to /updatedept");
    console.log("Request Body:", req.body);
    let { id, name } = req.body;
    let promise = deptmodel.finalUpdateDept(id, name);
    promise.then((result) => {
        let p = deptmodel.getAllDept();
        p.then((result) => {
            res.render("viewdept.ejs", { deptList: result });
        })
    });

    promise.catch((err) => {
        res.send("Dept not updated.");
    })
}
