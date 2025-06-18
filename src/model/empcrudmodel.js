let conn=require("../../db.js");
exports.saveEmployee = (...empData) => {
  return new Promise((resolve, reject) => { 
    conn.query("INSERT INTO employee (eid, name, mail, contact, sal, photo, deptid) VALUES ('0',?, ?, ?, ?, ?, ?)", [...empData], (err, result) => {
      if (err) {
        reject("not save" + err);
      } else {
        resolve("Employee Save Successfully......");
      }
    });
  }); 
};