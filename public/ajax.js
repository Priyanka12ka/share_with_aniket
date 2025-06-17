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