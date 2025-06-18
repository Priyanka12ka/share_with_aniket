let conn=require("../../db.js")

exports.saveDept = (deptname)=>{
    return new Promise((resolve, reject)=>{
        conn.query("insert into department values('0', ?);", [deptname], (err, result)=>{
            if(err){
                return reject("Error while adding department... Error is :"+err);
            }else{
                if(result.affectedRows>0){
                    return resolve("Department added...");
                }else{
                    return resolve("unknow error");
                }
            }
        });
    
    });
};

exports.getAllDept=()=>{
    return new Promise((resolve,reject)=>
    {
        conn.query("select *from department",(err,result)=>
        {
            if(err)
            {
                return reject("Error while adding department... Error is :"+err);
            }
            else{
                return resolve(result);
            }
        });
    });
}

exports.delDeptById=(did)=>
{
    return new Promise((resolve,reject)=>
    {
        conn.query("delete from department where deptid=?",[did],(err,result)=>{
             if(err){
                reject(err);
             }
             else
             {
                resolve("success");
             }
        });
    });
}
exports.finalUpdateDept = (did, name) => {
  return new Promise((resolve, reject) => {
    conn.query("update department set deptname=? where deptid=?", [name, did], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve("success");
      }
    });
  });
};

exports.getDeptByName=(deptname)=>{
  return new Promise((resolve,reject)=>{
    conn.query("select * from department where deptname like '%" +deptname+ "%'",(err,result)=>{
      if(err){
        reject(err);
        return reject(err);
      } else {
        resolve(result);
      }
    });
  });
};