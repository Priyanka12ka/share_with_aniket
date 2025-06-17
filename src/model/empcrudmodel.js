let conn=require("../../db.js");
exports.saveEmployee=(...empData)=>
{
      return new Promise((resolve,reject)=>
    {
        conn.query("insert into employee values ('0',?,?,?,?.?,?)",[...empData],(err,result)=>
        {
             if(err)
             {
                reject("not save");
             }
             else{
                resolve("Employee save into database successfully.....");
             }
        });
    })
}