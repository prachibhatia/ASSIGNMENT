import React from 'react'
import {useEffect} from 'react'

const EmployeeDashboard = () => {

    useEffect(() => {
        fetch('/api/employee')
        .then(res => res.json())
        .then(resp => {
               console.log(resp);
               document.getElementById("tablebody1").innerHTML="";
               for(var i=0;i<resp.length;i++){
                document.getElementById("tablebody1").innerHTML +="<tr className=`tr`><td className=`td`>"+resp[i].firstname +"</td><td className=`td`>"+resp[i].email+"</td><td className=`td`>"+resp[i].contactno+"</td><td className=`td`>"+resp[i].empid+"</td><td className=`td`>"+resp[i].department+"</td></tr>";
               }
        })
        
    })

    return (
        <div className="container-emp">
            <h1 style={{marginLeft:350}}>Employees List</h1> 
            <table id="table2" className="table-style">
            <thead>
            <tr>
            <th className="th">Name</th>
            <th className="th">Email</th>
            <th className="th">Contact No</th>
            <th className="th">Employee ID</th>
            <th className="th">Department</th>       
            </tr>
            </thead>
            <tbody id="tablebody1" className="tbody">
           </tbody>
           </table>
            </div>
    )
}

export default EmployeeDashboard
