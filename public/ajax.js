let SearchDept=(str)=>
{
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4  && this.status==200)
        {
            let jsonObj=JSON.parse(this.responseText);
           // alert(this.responseText);
            let tableBody=document.getElementById("tblBody");
            tableBody.innerHTML="";
            jsonObj.forEach((element ,index )=> {
                let row=document.createElement("tr");
                let col=document.createElement("td");
                col.innerHTML=(index+1);
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML=element.deptname;
                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML="<a href='/deldept?did="+element.deptid+"'>Delete</a>";  //after search we can delete
                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML="<a href='/upddept?dn="+element.deptname+"&did="+element.deptid+"'>Update</a>"; //after search we can update
                row.appendChild(col);

                tableBody.appendChild(row);
            });
        }

    };
    xhttp.open("get","/searchDeptByName?dn="+ (str),true);
    xhttp.send();
}

let checkEmailExits=(str)=>
{
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
           if(this.responseText.length>0)
           {
              console.log(this.responseText)
             document.getElementById("lablemsg").innerHTML=this.responseText;
               document.getElementById("uemail").focus();
           }
           else{
           
            document.getElementById("lablemsg").innerHTML="";
           }
        }
    };
    xhttp.open("get","/searchEmail?mail="+str,true);
    xhttp.send();
}

let getEmpByDept=()=>
{
    let deptid=parseInt(document.getElementById("deptid").value);

    let xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
           if(this.readyState==4 && this.status==200)
         {
             let jsonArr=JSON.parse(this.responseText);
             document.getElementById("tbody").innerHTML=""; // Clear previous content

             let str = "";
             if (jsonArr.length === 0) {
                 str = "<tr><td colspan='6' style='text-align:center; color: red;'><b>    There is no Employee  in this  Department    </b></td></tr>";
             }
             else{
                 jsonArr.forEach((row,index)=> // Corrected: Iterate using forEach directly
                {
                    str += "<tr>";
                    str += "<td>" + row.name + "</td>";
                    str += "<td>" + row.mail + "</td>";
                    str += "<td>" + row.contact + "</td>";
                    str += "<td>" + row.sal + "</td>";
                    str += "<td><img src='images/" + row.photo + "' width='100px' height='100px' alt='no image found'></td>";
                    str += "<td>" + row.deptname + "</td>";
                    str += "</tr>";
                });
             }
            document.getElementById("tbody").innerHTML = str;
        }
    };
    xhttp.open("get","/getEmpByDeptId?deptid="+deptid,true);
    xhttp.send();
}