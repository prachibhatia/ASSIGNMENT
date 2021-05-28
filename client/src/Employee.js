import React from 'react'
import './index.css';
import Button from'./Button'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Employee = () => {

    const [firstname, setfirstname] = useState('');
    const [middlename, setmiddlename] = useState('');
    const [lastname, setlastname] = useState('');
    const [empid, setempid] = useState('');
    const [email, setemail] = useState('');
    const [depart, setdepart] = useState('');
    const [contact, setcontact] = useState('');

    const history = useHistory();

    const userinfo = async (e) =>{
        
        e.preventDefault();
        if(firstname === "" || lastname === "" ||empid=== "" || email=== "" || depart === "" || contact==="" ){
            alert("Fill all the information first !");
        }
        else{
        const res = await fetch("/api/employee",{
            method:"POST",
            headers:{
                 "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "firstname":firstname,
                "middlename":middlename,
                "lastname":lastname,
                "department":depart,
                "email":email,
                "empid":empid,
                "contactno":contact
            })
        })
        const data = await res.json();
        alert("Employee information successfully saved");
        history.push('/EmployeeDashboard');
    }
    }

    const empdata = ()=>{
           history.push('/EmployeeDashboard');
    }

    return (
        <div>
            <form className="container-emp">
                <h1 style={{marginLeft:300}}>Employee Details</h1>
            <div className="column">
                <div className="form-control">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name" value={firstname} onChange={(e)=> setfirstname(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Middle Name</label>
                    <input type="text" placeholder="Enter Middle Name" value={middlename} onChange={(e)=>setmiddlename(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter Last Name" value={lastname} onChange={(e)=>setlastname(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Employee ID</label>
                    <input type="text" placeholder="Enter Employee id" value={empid} onChange={(e)=>setempid(e.target.value)}></input>
                </div>
                <Button value="Add" color="#FF416C" onclick={userinfo}/>
                <Button value="Get Employee Data" color="#FF416C" onclick={empdata}/>
                </div>
                <div className="column">
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Department</label>
                    <input type="text" placeholder="Enter department" value={depart} onChange={(e)=>setdepart(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Contact No</label>
                    <input type="tel" placeholder="Enter contact no" value={contact} onChange={(e)=>setcontact(e.target.value)}></input>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Employee
