let conn=require("../../db.js");
exports.saveEmp = (...empData) => {
  return new Promise((resolve, reject) => {
    conn.query("INSERT INTO employee VALUES ('0', ?, ?, ?, ?, ?, ?)", 
       [...empData], (err, result) => {
      if (err) {
        reject("not saved: " + err);
      } else {
        resolve("Employee Saved Successfully.");
      }
    });
  });
};

exports.verifyEmail=(useremail)=>
{
    return new Promise((resolve,reject)=>
    {

      conn.query("select * from employee where mail=?" ,[useremail],(err,result)=>{  
      if(err)
      {
          reject(err);
      }
      else{
        resolve(result);
      }
      });
      
    });
}

exports.getEmpByDeptId=(deptid)=>
{
    return new Promise((resolve,reject)=>
    {

      conn.query("select e.name,e.mail,e.contact,e.sal,e.photo,d.deptname from employee e inner join department d on e.deptid=d.deptid where e.deptid=?" ,[deptid],(err,result)=>{  
      if(err)
      {
          reject(err);
      }
      else{
        resolve(result);
      }
      });
      
    });
}