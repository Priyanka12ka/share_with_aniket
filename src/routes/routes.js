let express=require("express");
let deptctrl=require("../controllers/deptcontroller.js");
let router=express.Router();

router.post("/adddept",deptctrl.saveDept);
router.get("/",deptctrl.homePage);
router.get("/newdept",deptctrl.newDept);
router.get("/viewdept",deptctrl.getAllDept);
router.get("/deldept",deptctrl.delDept);
router.get("/upddept",deptctrl.updateDept);
router.post("/updatedept",deptctrl.deptFinalUpdate);
module.exports=router;