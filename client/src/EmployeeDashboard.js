import React from 'react'
import {useEffect} from 'react'

const EmployeeDashboard = () => {

    useEffect(() => {
        fetch('/api/employee')
        .then(res => res.json())
        .then(resp => {
               console.log(resp);
               document.getElementById("data").innerHTML="";
               for(var i=0;i<resp.length;i++){
                document.getElementById("data").innerHTML += (i+1) +". Name : "+resp[i].firstname +" "+resp[i].lastname+"<br/>"+"Department : "+resp[i].department+"<br/>"+"Employee Id : "+resp[i].empid+"<br/>"+"Contact No : "+resp[i].contactno +"<br/>"+"Email : "+resp[i].email+"<br/>"+"<br/>";
               }
        })
        
    })

    return (
        <div className="container-emp">
            <h1 style={{marginLeft:300}}>Employees Details</h1> 
            <div id="data" style={{fontFamily:'Georgia'}}></div>  
        </div>
    )
}

export default EmployeeDashboard
