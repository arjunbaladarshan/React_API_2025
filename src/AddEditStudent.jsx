import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddEditStudent(){
    const [data, setData] = useState({});
    const [count, setCount] = useState(0);
    const { id } = useParams();
    
    useEffect(()=>{
        fetch('https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/'+id)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const naviagte = useNavigate();
    return(<>
        <table>
            <tr>
                <td>Enter Subject Name</td>
                <td>
                    <input type="text" value={data.subjectName} onChange={(e)=>{
                        setData({...data,subjectName:e.target.value});
                    }} />
                </td>
            </tr>
            <tr>
                <td>Enter Subject Code</td>
                <td>
                    <input type="text" value={data.subjectCode} onChange={(e)=>{
                        setData({...data,subjectCode:e.target.value});
                    }} />
                </td>
            </tr>
            <tr>
                <td>Enter Subject Faculty</td>
                <td>
                    <input type="text" value={data.subjectFaculty} onChange={(e)=>{
                        setData({...data,subjectFaculty:e.target.value});
                    }} />
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    { id==undefined && 
                        <button onClick={()=>{
                        let apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";
                        fetch(apiUrl,{
                            method:"POST",
                            body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        })
                        .then(res=>res.json())
                        .then(res=>{
                            naviagte("/students")
                        });
                    }}>
                        Add Student
                    </button> }
                    { id != undefined && 
                        <button onClick={()=>{
                            let apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";
                            fetch(apiUrl+"/"+id,{
                                method:"PUT",
                                body:JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            })
                            .then(res=>res.json())
                            .then(res=>{
                                naviagte("/students")
                            });
                        }}>Edit Student</button>
                    }
                </td>
               
            </tr>
        </table>
    
    </>)
}

export default AddEditStudent;   