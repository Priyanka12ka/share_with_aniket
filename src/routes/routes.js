let express=require("express");
let deptctrl=require("../controllers/deptcontroller.js");
let empcntrl=require("../controllers/empcontroller.js");
let upload=require("../middleware/fileupload.js");
//let multer=require("multer");
let router=express.Router();

router.post("/adddept",deptctrl.saveDept);
router.get("/",deptctrl.homePage);
router.get("/newdept",deptctrl.newDept);
router.get("/viewdept",deptctrl.getAllDept);
router.get("/deldept",deptctrl.delDept);
router.get("/upddept",deptctrl.updateDept);
router.post("/updatedept",deptctrl.deptFinalUpdate);
router.get("/searchDeptByName",deptctrl.searchDeptByUsingName);
router.get("/newemployee",empcntrl.newemp);


router.post("/saveemp",upload.single("photo"),empcntrl.saveEmployee);

router.get("/testup",(req,res)=>
{
    res.render("demoupload.ejs");
    console.log("hello from testup route"); 
});

module.exports=router;